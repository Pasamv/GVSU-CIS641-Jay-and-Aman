from flask import request, jsonify
from app import app
from app import database

@app.route('/')
def index():
    return "Hello world",200

@app.route('/post_recipe', methods=["POST"])
def post_recipe():
    # user_id = request.header.get("user_id")
    data = request.get_json()
    title=data.get("title")
    ingredients=data.get("ingredients")
    instructions=data.get("instructions")
    #user_name
    print(title, ingredients, instructions)
    username="Jayanth"
    database.create("recipes", {"user_name":username,"title":title,"ingredients":ingredients,"instructions":instructions})
    return jsonify({'message':'Successfully added the item to lending space'}), 200

@app.route('/search',methods=["GET"])
def search():
    recipe_name=request.args.get("title")
    print(recipe_name)
    print(database.get("recipes",""))
    return jsonify(recipe_name=database.get("recipes","")),200

