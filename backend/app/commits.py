import requests
from dotenv import dotenv_values
SECRETS = dotenv_values("./../.env")
def getCommitsOverTime(project):
    """
    getCommitsOverTime
    Uses the GitHub REST API to retrieve the number of commits made over time on the master branch
    Author: Abigail Amethyst
    project - name of requested project, stores as a String (formatted as 'owner/repoName')
    does not return anything, but creates a .json file with 2 lists
    the first list is the timespan of the repo in months, the second is the amount of commits made per month
    the index of both arrays correspond with each other
    """

    # initialising months and commits list for storage of data
    months = []
    commits = []
    # getting information about specified project
    url = f'https://api.github.com/repos/{project}'
    resp = requests.get(url, headers={"authorization": SECRETS['GITHUB_TOKEN']})
    if resp.status_code != 200:
        return "Error Encountered when using API. Make sure that repo is valid."
    if isYears:
        timeCommits = initYears(resp)
    else:
        timeCommits = initMonths(resp)
    timespan = timeCommits[0]
    commits = timeCommits[1]

    # getting list of branches for given repo
    url = f'https://api.github.com/repos/{project}/branches?per_page=100'
    resp = requests.get(url, headers={"authorization": SECRETS['GITHUB_TOKEN']})
    if resp.status_code != 200:
        return "Error Encountered when using API. Make sure that repo is valid."
    respDicts = resp.json()
    # look for master branch
    for i in range(0, len(respDicts)):
        respDict = respDicts[i]
        name = respDict['name']
        if name == 'master':
            # get list of 100 latest commits from master branch
            sha = respDict['commit']['sha']
            url = f'https://api.github.com/repos/{project}/commits?per_page=100&sha={sha}'
            resp = requests.get(url, headers={"authorization": SECRETS['GITHUB_TOKEN']})
            if resp.status_code != 200:
                return "Error Encountered when using API. Make sure that repo is valid."
            commitDicts = resp.json()
            # parse list and increment commits by their respective months
            while len(commitDicts) != 1:
                j = 0
                while j < len(commitDicts)-1:
                    commit = commitDicts[j]
                    date = commit['commit']['author']['date']
                    if isYears:
                        date = date[:4]
                    else:
                        date = date[:7]
                    commits[timespan.index(date)] += 1
                    j += 1
                # get sha of last commit in list to get next 100 commits
                commit = commitDicts[j]
                sha = commit['sha']
                url = f'https://api.github.com/repos/{project}/commits?per_page=100&sha={sha}'
                resp = requests.get(url, headers={"authorization": SECRETS['GITHUB_TOKEN']})
                if resp.status_code != 200:
                    return "Error Encountered when using API. Make sure that repo is valid."
                commitDicts = resp.json()

    # generate tuple list
    output = []
    for i in range(0, len(timespan)):
        tmp = [ timespan[i], commits[i] ]
        output.append(tmp)
    return output


"""
initMonths
Initialises 2 lists with months from the creation date of a repo to the latest update of a repo
Author: Abigail Amethyst

resp - response gotten from the GitHub API call

Returns a list with 2 lists within
The first list is a list of the months from the creation date to the latest update
The second list is a list of all the commits for the timespan initialised to 0
The index of the first list corresponds to the amount of commits in the second list at the same index
"""
def initMonths(resp):
    timeList = []
    commitList = []
    respDict = resp.json()
    # getting creation date
    creationDate = respDict['created_at']
    creationDate = creationDate[:7]
    # getting date of the latest update
    latestUpdate = respDict['updated_at']
    latestUpdate = latestUpdate[:7]
    # storing both dates as integer lists
    year = int(creationDate[:4])
    month = int(creationDate[5:7])
    currentDate = [ year, month ]
    year = int(latestUpdate[:4])
    month = int(latestUpdate[5:7])
    latestDate = [ year, month ]

    # generating the months and commit lists from month of creation to month of the latest update for storing data
    while currentDate != latestDate:
        if currentDate[1] < 10:
            timeList.append(f'{currentDate[0]}-0{currentDate[1]}')
        else:
            timeList.append(f'{currentDate[0]}-{currentDate[1]}')
        commitList.append(0)
        currentDate[1] += 1
        # reset month count and increment year count if necessary
        if currentDate[1] > 12:
            currentDate[1] = 1
            currentDate[0] += 1
    if currentDate[1] < 10:
        timeList.append(f'{currentDate[0]}-0{currentDate[1]}')
    else:
        timeList.append(f'{currentDate[0]}-{currentDate[1]}')
    commitList.append(0)

    output = [ timeList, commitList ]
    return output


"""
initYears
Initialises 2 lists with years from the creation date of a repo to the latest update of a repo
Author: Abigail Amethyst

resp - response gotten from the GitHub API call

Returns a list with 2 lists within
The first list is a list of the years from the creation date to the latest update
The second list is a list of all the commits for the timespan initialised to 0
The index of the first list corresponds to the amount of commits in the second list at the same index
"""
def initYears(resp):
    timeList = []
    commitList = []
    respDict = resp.json()
    # getting creation date
    creationDate = respDict['created_at']
    creationDate = creationDate[:4]
    # getting date of the latest update
    latestUpdate = respDict['updated_at']
    latestUpdate = latestUpdate[:4]
    # storing both dates as integer lists
    currentYear = creationDate
    latestDate = latestUpdate

    # generating the months and commit lists from month of creation to month of the latest update for storing data
    while currentYear != latestDate:
        timeList.append(currentYear)
        commitList.append(0)
        currentYear += 1
    timeList.append(currentYear)
    commitList.append(0)

    output = [ timeList, commitList ]
    return output
