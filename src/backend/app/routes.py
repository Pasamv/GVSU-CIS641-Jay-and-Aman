from flask import request, jsonify
from app import app

@app.route('/')
def index():
    return "Hello world",200

@app.route('/post_recipe', methods=["POST"])
def post_recipe():
    # user_id = request.header.get("user_id")
    title=request.form.get("title")
    ingredients=request.form.get("ingredients")
    instructions=request.form.get("instructions")
    #user_name
    print(title, ingredients, instructions)
    # database.add({"collection":"recipe", "user_name":username})
    return jsonify({'message':'Successfully added the item to lending space'}), 200

@app.route('/search',methods=["GET"])
def search():
    recipe_name=request.args.get("title")
    print(recipe_name)
    return jsonify(recipe_name=recipe_name),200
