from .schemas import Task, TaskCreate, TaskUpdateCompleted, TaskUpdate
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal, engine

from app.models import models
models.Base.metadata.create_all(bind=engine)

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/tasks", response_model=List[Task])
def read_tasks(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    tasks = db.query(models.Task)\
              .order_by(models.Task.id.desc())\
              .offset(skip)\
              .limit(limit)\
              .all()
    return tasks


@router.post("/create", response_model=Task)
def create_task(task: TaskCreate, db: Session = Depends(get_db)):
    db_task = models.Task(**task.dict())
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task


@router.get("/read/{task_id}", response_model=Task)
def read_task(task_id: int, db: Session = Depends(get_db)):
    task = db.query(models.Task).filter(models.Task.id == task_id).first()
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return task
@router.put("/update/{task_id}", response_model=Task)
def update_task(task_id: int, task: TaskCreate, db: Session = Depends(get_db)):
    db_task = db.query(models.Task).filter(models.Task.id == task_id).first()
    if db_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    for key, value in task.dict().items():
        setattr(db_task, key, value)
    db.commit()
    db.refresh(db_task)
    return db_task

@router.put("/completed/{task_id}", response_model=Task)
def update_task(task_id: int, task_update: TaskUpdate, db: Session = Depends(get_db)):
    db_task = db.query(models.Task).filter(models.Task.id == task_id).first()
    if db_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    
    # Atualiza apenas os campos fornecidos no objeto task_update
    for field, value in task_update.dict(exclude_unset=True).items():
        setattr(db_task, field, value)
    
    db.commit()
    db.refresh(db_task)
    return db_task

@router.delete("/delete/{task_id}", response_model=Task)
def delete_task(task_id: int, db: Session = Depends(get_db)):
    db_task = db.query(models.Task).filter(models.Task.id == task_id).first()
    if db_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    db.delete(db_task)
    db.commit()
    return db_task
