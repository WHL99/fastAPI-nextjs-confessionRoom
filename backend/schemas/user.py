from pydantic import BaseModel

class User(BaseModel):
    nickname: str
    sin:str
    datenschutz:str