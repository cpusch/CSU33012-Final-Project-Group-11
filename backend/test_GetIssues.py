import unittest
import GetIssues

class TestGetIssues(unittest.TestCase):

    def test_status(self):
        result = GetIssues.get_url_status()
        self.assertEqual(result, 200)

    def test_issues_length(self):
        result = GetIssues.getRecentIssues()
        self.assertEqual(len(result), 100)