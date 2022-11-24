from main import *
import requests

def test_workflow():
    assert 1 == 1

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

# print(test_commits())

