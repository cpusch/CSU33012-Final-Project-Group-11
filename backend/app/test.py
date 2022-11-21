from main import *

def test_workflow():
    assert 1 == 1

def test_commits():
    return getCommitsOverTime("AUTOMATIC1111/stable-diffusion-webui")

print(test_commits())

