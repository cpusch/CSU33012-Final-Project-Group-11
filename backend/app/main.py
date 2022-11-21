from typing import Union
from fastapi import FastAPI
from commits import *
from GetIssues import *

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/commits")
def get_commits():
    return getCommitsOverTime("AUTOMATIC1111/stable-diffusion-webui")
    # return "test"

@app.get("/timeline")
def get_issues():
    return getRecentIssues()