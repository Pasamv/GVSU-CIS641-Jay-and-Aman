from flask import request, jsonify
from app import app
from app import database

@app.route('/')
def index():
    return "Hello world",200

@app.route('/post_recipe', methods=["POST"])
def post_recipe():
    try:
        authorization_header=request.headers.get('Authorization')
        if(authorization_header):
            user_id = authorization_header.split(' ')[1]
        data = request.get_json()
        title=data.get("title")
        ingredients=data.get("ingredients")
        instructions=data.get("instructions")
        first_name=data.get("first_name")
        print("data recived",data)
        database.create("recipe", {"first_name":first_name,"title":title,"ingredients":ingredients,"instructions":instructions})
        return jsonify({'message':'Successfully added the recipe'}), 200
    except Exception as e:
        print("Error occured in posting recipe: ",e)
        return jsonify(error="An error occured",details=str(e)),500

@app.route('/search',methods=["GET"])
def search():
    try:
        recipe_title=request.args.get("title")
        print(recipe_title)
        if(recipe_title=="top"):
            res = database.find("recipe",{})
            res = sorted(res,key=lambda x:x["title"])
        else:
            res = database.find("recipe",{})
            matched_list = []
            for recipe in res:
                if(recipe_title.lower() in recipe["title"].lower()):
                    matched_list.append(recipe)
            res = sorted(matched_list,key=lambda x:x["title"])
        return jsonify(res),200
    except Exception as e:
        print("Error occured in search: ",e)
        return jsonify(error="An error occured",details=str(e)),500

@app.route('/recipe/<recipe_id>',methods=["GET"])
def recipe(recipe_id):
    print(recipe_id)
    try:
        recipe = database.find_one("recipe",{"recipe_id":recipe_id})
        if(recipe):
            return recipe,200
    except Exception as e:
        print("Error occured in fecthing recipe is: ",e)
        return jsonify(error="An error occured",details=str(e)),500

@app.route("/reviews/<recipe_id>",methods=["GET"])
def reviews(recipe_id):
    try:
        print(recipe_id)
        res=database.find("review",{"recipe_id":recipe_id})
        res = sorted(res, key=lambda x: x["review"])
        return jsonify(res),200
    except Exception as e:
        print("Error occured in fecthing reviews is: ",e)
        return jsonify(error="An error occured",details=str(e)),500

@app.route('/post_review', methods=["POST"])
def post_review():
    try:
        authorization_header=request.headers.get('Authorization')
        if(authorization_header):
            user_id = authorization_header.split(' ')[1]
        data = request.get_json()
        review=data.get("review")
        recipe_id=data.get("recipe_id")
        first_name=data.get("first_name")
        if(user_id=="null" or not user_id):
            raise Exception("user should login to give review")
        print(user_id, review,type(user_id))
        reviews = database.find_one("review",{"recipe_id":recipe_id, "user_id":user_id})
        if(reviews):
            raise Exception("user already gave review")
        database.create("review", {"first_name":first_name,"recipe_id":recipe_id,"review":review,"user_id":user_id})
        return jsonify({'message':'Successfully added the review to the recipe'}), 200
    except Exception as e:
        print("Error occured in posting review is: ",e)
        return jsonify(error="An error occured",details=str(e)),500

@app.route("/user",methods=["GET"])
def user():
    try:
        authorization_header=request.headers.get('Authorization')
        if(authorization_header):
            user_id = authorization_header.split(' ')[1]
        print("getting user info and we recived user_id",user_id)
        res=database.find_one("user",{"user_id":user_id})
        print("we are returning",res)
        return jsonify(res)
    except Exception as e:
        print("Error occured in fecthing user details is: ",e)
        return jsonify(error="An error occured",details=str(e)),500

@app.route("/signin",methods=["POST"])
def signin():
    try:
        data = request.get_json()
        print("signin data we recived",data)
        res=database.find_one("user",data)
        print("we are returning",res)
        if(res):
            return jsonify(res),200
        return jsonify("Invalid credentials"),401
    except Exception as e:
        print("Error occured in signing user is: ",e)
        return jsonify(error="An error occured",details=str(e)),500

@app.route('/signup',methods=['POST'])
def signup():
    try:
        data = request.get_json()
        print("signup data we recived",data)
        database.create("user",data)
        print(data)
        return jsonify(data),200
    except Exception as e:
        print("Error occured in signup is: ",e)
        return jsonify(error="An error occured",details=str(e)),500
