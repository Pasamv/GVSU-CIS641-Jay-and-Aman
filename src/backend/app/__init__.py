from flask import Flask
from flask_cors import CORS
app=Flask(__name__,static_folder='../images/')
CORS(app,origins=['http://localhost:3000'])
from app import routes

