import requests

issues = 'https://api.github.com/repos/AUTOMATIC1111/stable-diffusion-webui/issues'
url = 'https://api.github.com/repos/AUTOMATIC1111/stable-diffusion-webui'
issue_times = 'https://api.github.com/repos/AUTOMATIC1111/stable-diffusion-webui/issues?state=closed'

response = requests.get(url)
print("Status code: ", response.status_code)
response_dict = response.json()
print('Open issues: ', response_dict['open_issues_count'],'\n')

def getRecentIssues():
    response = requests.get(issue_times)
    response_dict = response.json()

    for i in range(len(response_dict)):
        issue = response_dict[i]
        print('Issue ID: ', issue['number'])
        dateCreated = issue['created_at'].replace('Z', 'T').split('T')
        dateClosed = issue['closed_at'].replace('Z', 'T').split('T')
        issue_id = issue['number']
        dateCreated[2] = issue_id
        dateClosed[2] = issue_id
        print('Date Created: ', dateCreated)
        print('Date Closed: ', dateClosed)

    return dateCreated

getRecentIssues()