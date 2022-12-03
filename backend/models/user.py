from tkinter import BooleanVar
from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta, engine

users = Table('CRList', meta,
              Column('id', Integer, primary_key = True),
              Column('nickname', String(225)),
              Column('sin', String(1023)),
              Column('datenschutz', String(225)),
              )

meta.create_all(engine)