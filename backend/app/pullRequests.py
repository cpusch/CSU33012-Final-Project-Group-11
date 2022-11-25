from commits import *
SECRETS = dotenv_values("./../.env")

"""
getPullRequestsOverTime
Uses the GitHub Rest API to retrieve the number of pull requests created over time on a given repo
Author: Abigail Amethyst

project - name of requested project, stored as a String (formatted as 'owner/repoName')
isYears - Boolean value determining whether the commit dict will be in years or months

Returns a tuple list with the chosen timespan and the number of pull requests for each year/month
If an error is encountered when calling the API, the function will return a String with an error message
"""
def getPullRequestsOverTime(project, isYears):
    # getting information about specified project
    url = f'https://api.github.com/repos/{project}'
    resp = requests.get(url, headers={"authorization": SECRETS['GITHUB_TOKEN']})
    if resp.status_code != 200:
        return "Error Encountered when using API. Make sure that repo is valid."
    if isYears:
        timePulls = initYears(resp)
    else:
        timePulls = initMonths(resp)
    timespan = timePulls[0]
    pulls = timePulls[1]

    # get initial set of pull requests
    i = 0
    url = f'https://api.github.com/repos/{project}/pulls?per_page=100&page={i}&state=all'
    resp = requests.get(url, headers={"authorization": SECRETS['GITHUB_TOKEN']})
    respDicts = resp.json()
    pageEmpty = False
    while not pageEmpty:
        if len(respDicts) == 0:
            pageEmpty = True
        else:
            for j in range(0, len(respDicts)):
                tmp = respDicts[j]
                date = tmp['created_at']
                if isYears:
                    date = date[:4]
                else:
                    date = date[:7]
                pulls[timespan.index(date)] += 1

    # generate tuple list
    output = []
    for i in range(0, len(timespan)):
        tmp = [timespan[i], pulls[i]]
        output.append(tmp)
    return output
