from pydantic import BaseModel

class User(BaseModel):
    nickname: str
    sin:str
    yourPain:int
    objPain:str
    ifKeepSecret:str