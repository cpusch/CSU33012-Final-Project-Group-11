from typing import Union
from fastapi import FastAPI
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from pullRequests import *
from GetIssues import *

middlewares = [
    Middleware(
        CORSMiddleware,
        allow_origins=['*'],
        allow_methods=['*'],
        allow_headers=['*']
    )
]

app = FastAPI(middleware=middlewares)
commits = None
recent_issues = None
pull_requests_over_time = None

@app.get("/")
def read_root():
    global commits,recent_issues,pull_requests_over_time
    commits = getCommitsOverTime("AUTOMATIC1111/stable-diffusion-webui", False)
    recent_issues = getRecentIssues()
    pull_requests_over_time = getPullRequestsOverTime("AUTOMATIC1111/stable-diffusion-webui", False)


    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/commits")
def get_commits():
    return commits
    # return "test"

@app.get("/pulls")
def get_pulls():
    return pull_requests_over_time

@app.get("/timeline")
def get_issues():
    return recent_issues
