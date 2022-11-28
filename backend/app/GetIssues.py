import requests
import json
from dotenv import dotenv_values
SECRETS = dotenv_values("./../.env")

url = 'https://api.github.com/repos/AUTOMATIC1111/stable-diffusion-webui'
issues = 'https://api.github.com/repos/AUTOMATIC1111/stable-diffusion-webui/issues'
issue_times = 'https://api.github.com/repos/AUTOMATIC1111/stable-diffusion-webui/issues?state=closed'
issue_times_100 = 'https://api.github.com/repos/AUTOMATIC1111/stable-diffusion-webui/issues?state=closed&per_page=100&page=1'

response = requests.get(url)
# print("Status code: ", response.status_code)
response_dict = response.json()
# print('Open issues: ', response_dict['open_issues_count'],'\n')

def get_url_status():
    return response.status_code

def getRecentIssues():
    response = requests.get(issue_times_100,headers={"authorization": SECRETS['GITHUB_TOKEN']})
    response_dict = response.json()
    array = []

    for i in range(len(response_dict)):
        issue = response_dict[i]
        #print('Issue ID: ', issue['number'])
        #print('Issue Title: ', issue['title'])
        dateCreated = issue['created_at'].replace('Z', 'T').split('T')
        dateClosed = issue['closed_at'].replace('Z', 'T').split('T')
        issueArr = {
            "name": issue['title'],
            "date created": dateCreated[0],
            "time created": dateCreated[1],
            "date closed": dateClosed[0],
            "time closed": dateClosed[1],
        }
        #issueArr = [issue['title'], dateCreated[0], dateCreated[1], dateClosed[0], dateClosed[1]]
        #print('Issue: ', issueArr)
        array.append(issueArr)

    return json.dumps(array)


# arr = getRecentIssues()
# print(arr)
