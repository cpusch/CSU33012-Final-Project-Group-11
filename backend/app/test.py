from main import *
import GetIssues

def test_workflow():
    assert 1 == 1

def test_status():
    result = GetIssues.get_url_status()
    assert result == 200

def test_issues_length():
    result = GetIssues.getRecentIssues()
    assert len(result) == 100

