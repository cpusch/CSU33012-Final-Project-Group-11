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


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/commits")
def get_commits():
    return getCommitsOverTime("AUTOMATIC1111/stable-diffusion-webui", False)
    # return "test"

@app.get("/pulls")
def get_pulls():
    return getPullRequestsOverTime("AUTOMATIC1111/stable-diffusion-webui", False)

@app.get("/timeline")
def get_issues():
    return getRecentIssues()