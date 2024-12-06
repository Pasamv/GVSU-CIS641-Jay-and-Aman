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
    recipe_title=request.args.get("title")
    print(recipe_title)
    res = database.get("recipes",{"title":recipe_title})
    return jsonify(res),200

@app.route('/recipe/<recipe_id>',methods=["GET"])
def recipe(recipe_id):
    recipe = database.find("recipes",recipe_id)
    if(recipe):
        return recipe,200
    return jsonify({}),200

@app.route("/reviews/<recipe_id>",methods=["GET"])
def reviews(recipe_id):
    print(recipe_id)
    res=database.find("reviews",{"recipe_id":recipe_id})
    return jsonify(res),200

@app.route('/post_review', methods=["POST"])
def post_review():
    # user_id = request.header.get("user_id")
    global count
    data = request.get_json()
    review=data.get("review")
    recipe_id=data.get("recipe_id")
    first_name=data.get("first_name")
    #user_name
    print(recipe_id, review)
    database.create("reviews", {"first_name":first_name,"recipe_id":recipe_id,"review":review, "review_id":count})
    count+=1
    return jsonify({'message':'Successfully added the review to the recipe'}), 200

@app.route("/user",methods=["GET"])
def user():
    authorization_header=request.headers.get('Authorization')
    if(authorization_header):
        token = authorization_header.split(' ')[1]
    print("getting user info and we recived user_id",token)
    res=database.find("users",{"user_id":token})
    print("we are returning",res)
    return jsonify(res)

@app.route("/signin",methods=["POST"])
def signin():
    data = request.get_json()
    print("singin data we recived",data)
    res=database.find("users",data)
    print("we are returning",res)
    if(res):
        return jsonify(res),200
    return jsonify("invalid credentials"),404

@app.route('/signup',methods=['POST'])
def signup():
    global count
    data = request.get_json()
    print("signup data we recived",data)
    data["user_id"]=count
    database.create("users",data)
    return jsonify(data),200
