from main import *
import requests
import GetIssues

def test_workflow():
    assert 1 == 1

#tests that the issues functions returns a respone of 200, indicating a success
def test_status():
    result = GetIssues.get_url_status()
    assert result == 200

#tests that the api call receives a status code of 200
def test_status_code():
    url = f'https://api.github.com/repos/AUTOMATIC1111/stable-diffusion-webui'
    response = requests.get(url)
    assert response.status_code == 200, print(
        "Got wrong status code, expected is: {}, actual is  {}".format("200", response.status_code))

#tests our get_commits function, checking whether the dictionary returned is not null
def test_commits_not_null():
    jsonDict = get_commits()
    assert jsonDict != 0
#tests our get_commits function, checking correct length of commits
def test_commits_length():
    result = getCommitsOverTime("amy-coolshark/Bus-System", False)
    commits = [item[0] for item in result]
    assert commits[0] == '2022-03'

#tests our get_pull_requests function, checking whether the dictionary returned is not null
def test_pull_requests_not_null():
    jsonDict = get_pulls()
    assert jsonDict != 0
#tests our get_commits function, checking correct length of commits
def test_pull_requests_length():
    result = getPullRequestsOverTime("amy-coolshark/Bus-System", False)
    pull_requests = [item[0] for item in result]
    assert pull_requests[1] == '2022-04'
    
#tests our get_issues function, checking returned value is not null
def test_issues_not_null():
    jsonDict = get_issues()
    assert jsonDict != 0

if __name__ == "__main__":
    test_status()
    test_status_code()
    test_commits_not_null()
    test_commits_length()
    test_pull_requests_not_null()
    test_pull_requests_length()