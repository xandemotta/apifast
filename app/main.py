# print('oi')
# from fastapi import FastAPI
# print('oi')
# # from .routers import task
# # from routers import task
# import os
# import sys

# # Adiciona o diretório 'app' ao PYTHONPATH
# sys.path.append(os.path.abspath('app'))

# # Resto do seu código aqui...

# from app.routers import task
# from database import init_db

# print('oi')
# app = FastAPI()
# print('oi')
# @app.on_event("startup")
# def on_startup():
#     init_db()
#     print('oi db')
# print('oi')
# app.include_router(task.router, prefix="/api")

# 
# 
# 
# 


# import os
# import sys
# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware

# # Adiciona o diretório 'app' ao PYTHONPATH
# sys.path.append(os.path.abspath('app'))

# from app.routers import task
# from database import init_db

# app = FastAPI()

# # Configuração de CORS
# origins = [
#     "http://localhost:8080",  # URL do frontend
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.on_event("startup")
# def on_startup():
#     init_db()

# app.include_router(task.router, prefix="/api")

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)

import os
import sys
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

# Adiciona o diretório 'app' ao PYTHONPATH
sys.path.append(os.path.abspath('app'))

from app.routers import task
from database import init_db

app = FastAPI()

# Configuração de CORS
origins = [
    "http://localhost:8080",  # URL do frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    init_db()

@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content={"message": exc.detail}
    )

app.include_router(task.router, prefix="/api")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
