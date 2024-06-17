from fastapi import FastAPI
from .routers import task
from .database import init_db

app = FastAPI()

@app.on_event("startup")
def on_startup():
    init_db()

app.include_router(task.router, prefix="/api")
