from main import *
<<<<<<< HEAD
import requests
=======
import GetIssues
>>>>>>> dev

def test_workflow():
    assert 1 == 1

<<<<<<< HEAD
#tests that the api call receives a status code of 200
def test_status_code():
    url = f'https://api.github.com/repos/AUTOMATIC1111/stable-diffusion-webui'
    response = requests.get(url)
    assert response.status_code == 200, print(
        "Got wrong status code, expected is: {}, actual is  {}".format("200", response.status_code))
    
#tests our get_commits function, checking whether the dictionary returned is not null
def test_commits():
    jsonDict = get_commits()
    assert len(jsonDict) != 0

#tests our get_issues function, checking whether the dictionary returned is not null 
def test_issues():
    jsonDict = get_issues()
    assert len(jsonDict) != 0
=======
def test_status():
    result = GetIssues.get_url_status()
    assert result == 200
>>>>>>> dev

def test_issues_length():
    result = GetIssues.getRecentIssues()[:100]
    assert len(result) == 100

if __name__ == "__main__":
    test_status()
    test_issues_length()

