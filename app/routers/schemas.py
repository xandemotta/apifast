from pydantic import BaseModel, Field

class TaskBase(BaseModel):
    title: str
    description: str
    completed: bool = False

class TaskCreate(TaskBase):
    title: str = Field(..., max_length=20)
    description: str = Field(..., max_length=100)
    

class Task(TaskBase):
    id: int

    class Config:
        orm_mode = True
