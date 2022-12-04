from sqlalchemy import Table, Column,Integer, String
from config.db import meta, engine

users = Table('CRList', meta,
              Column('id', Integer, primary_key = True),
              Column('nickname', String(225)),
              Column('sin', String(225)),
              Column('yourPain', Integer),
              Column('objPain', Integer),
              Column('ifKeepSecret', String(255)),
              )

meta.create_all(engine)