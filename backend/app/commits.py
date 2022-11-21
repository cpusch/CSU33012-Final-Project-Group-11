import json
import requests
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
    resp = requests.get(url)
    respDict = resp.json()
    # getting creation date
    creationDate = respDict['created_at']
    creationDate = creationDate[:7]
    # getting date of latest update
    latestUpdate = respDict['updated_at']
    latestUpdate = latestUpdate[:7]
    # storing both dates as integer lists
    year = int(creationDate[:4])
    month = int(creationDate[5:7])
    currentDate = [ year, month ]
    year = int(latestUpdate[:4])
    month = int(latestUpdate[5:7])
    latestDate = [ year, month ]

    # generating the months and commit lists from month of creation to month of latest update for storing data
    while currentDate != latestDate:
        if currentDate[1] < 10:
            months.append(f'{currentDate[0]}-0{currentDate[1]}')
        else:
            months.append(f'{currentDate[0]}-{currentDate[1]}')
        commits.append(0)
        currentDate[1] += 1
        # reset month count and increment year count if necessary
        if currentDate[1] > 12:
            currentDate[1] = 1
            currentDate[0] += 1
    if currentDate[1] < 10:
        months.append(f'{currentDate[0]}-0{currentDate[1]}')
    else:
        months.append(f'{currentDate[0]}-{currentDate[1]}')
    commits.append(0)

    # getting list of branches for given repo
    url = f'https://api.github.com/repos/{project}/branches?per_page=100'
    resp = requests.get(url)
    respDicts = resp.json()
    # look for master branch
    for i in range(0, len(respDicts)):
        respDict = respDicts[i]
        name = respDict['name']
        if name == 'master':
            # get list of 100 latest commits from master branch
            sha = respDict['commit']['sha']
            url = f'https://api.github.com/repos/{project}/branches?per_page=100&sha={sha}'
            resp = requests.get(url)
            commitDicts = resp.json()
            # parse list and increment commits by their respective months
            while len(commitDicts) != 1:
                j = 0
                while j <= len(commitDicts)-1:
                    commit = commitDicts[j]
                    date = commit['commit']['author']['date']
                    date = date[:7]
                    commits[months.index(date)] += 1
                    j += 1
                # get sha of last commit in list to get next 100 commits
                commit = commitDicts[j]
                sha = commit['sha']
                url = f'https://api.github.com/repos/{project}/branches?per_page=100&sha={sha}'
                resp = requests.get(url)
                commitDicts = resp.json()
    # generate .json file with dictionary of commits per month
    jsonDict = dict(zip(months, commits))
    with open("commits.json", "w") as outfile:
        json.dump(jsonDict, outfile)
