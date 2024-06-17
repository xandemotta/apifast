print('oi')
from fastapi import FastAPI
print('oi')
# from .routers import task
from .routers import task
print('oi')
from .database import init_db
print('oi')
app = FastAPI()
print('oi')
@app.on_event("startup")
def on_startup():
    init_db()
    print('oi db')
print('oi')
app.include_router(task.router, prefix="/api")
