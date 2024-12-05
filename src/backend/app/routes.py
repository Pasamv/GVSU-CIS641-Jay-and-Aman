from flask import request, jsonify
from app import app
from app import database
count=1
@app.route('/')
def index():
    return "Hello world",200

@app.route('/post_recipe', methods=["POST"])
def post_recipe():
    # user_id = request.header.get("user_id")
    global count
    data = request.get_json()
    title=data.get("title")
    ingredients=data.get("ingredients")
    instructions=data.get("instructions")
    #user_name
    print(title, ingredients, instructions)
    username="Jayanth"
    database.create("recipes", {"user_id":username,"title":title,"ingredients":ingredients,"instructions":instructions,"recipe_id":count})
    count+=1
    return jsonify({'message':'Successfully added the recipe'}), 200

@app.route('/search',methods=["GET"])
def search():
    recipe_name=request.args.get("title")
    print(recipe_name)
    print(database.get("recipes",""))
    return jsonify(recipe_name=database.get("recipes","")),200

@app.route('/recipe/<recipe_id>',methods=["GET"])
def recipe(recipe_id):
    recipe = database.find("recipes",recipe_id)
    if(recipe):
        return recipe,200
    return jsonify({}),200

@app.route("/reviews/<review_id>",methods=["GET"])
def reviews(review_id):
    print(review_id)
    res=database.find("reviews","review_id")
    return jsonify(res),200

@app.route('/post_review', methods=["POST"])
def post_review():
    # user_id = request.header.get("user_id")
    global count
    data = request.get_json()
    review=data.get("review")
    recipe_id=data.get("recipe_id")
    #user_name
    print(recipe_id, review)
    username="Jayanth"
    database.create("reviews", {"user_id":username,"recipe_id":recipe_id,"review":review, "review_id":count})
    count+=1
    return jsonify({'message':'Successfully added the review to the recipe'}), 200
