from pymongo import MongoClient
from urllib.parse import quote_plus

from . import config

username = config.DATABASE['user']
password = config.DATABASE['password']
username=quote_plus(username)
password=quote_plus(password)

def connect_to_database():
    try:
        uri = "mongodb+srv://" + username + ":" + password + "@cluster0.0419p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        client = MongoClient(uri)
        db = client.RecipeBlog # db = client['LendItJunction']
        print('connected to database')
        return db
    except ConnectionError as e:
        print(f"Error connecting to database : {e}")
        raise

db = connect_to_database()

# recipes=[
# {
#     "recipe_id":"abcd",
#     "title":"Chicken Curry",
#     "ingridients":"Chicken, Chilli Powder, Chiken Masala,",
#     "instructions":"1. Turn on the stove, 2.Heat the pan, 3.pour oil",
#     "user_id":"123"
# },
# {
#     "recipe_id":"cdef",
#     "title":"Potato Curry",
#     "ingridients":"Potatoes, Chilli Powder, Garam Masala,",
#     "instructions":"1. Turn on the stove, 2.Heat the pan, 3.pour oil",
#     "user_id":"234"
# },
# {
#     "recipe_id":"agkh",
#     "title":"Chana Curry",
#     "ingridients":"Chana, Chilli Powder, Chana Masala,",
#     "instructions":"1. Turn on the stove, 2.Heat the pan, 3.pour oil",
#     "user_id":"234"
# },
# ]

# users=[
# {
#     "user_id":123465,
#     "first_name": "Aman",
#     "last_name":"Prajapati",
#     "email":"prajapa@mail.gvsu.edu",
#     "password":"zzzzz",
#     "profile_pic":"some1.png"
# },
# {
#     "user_id":34729,
#     "first_name":"Jayanth",
#     "last_name":"Pasam",
#     "email":"pasamv@mail.gvsu.edu",
#     "password":"aaaaa",
#     "profile_pic":"some.png"
# }
# ]

# reviews=[
# {
#     "user_id":"Jayanth",
#     "review":"It's not as tasty as I expected",
#     "recipe_id":"emcjdf"
# },
# {
#     "user_id":"Aman",
#     "review":"Good!",
#     "recipe_id":"emcjdf"
# }
# ]

def find(collection,condition):
    res = db[collection].find(condition,{"_id": 0})
    return list(res)

def find_one(collection,condition):
    res = db[collection].find_one(condition,{"_id": 0})
    return res

def create(collection,data):
    result = db[collection].insert_one(data)
    print(f"Inserted into {collection}: {data}")
    db[collection].update_one({"_id": result.inserted_id}, {"$set": {f"{collection}_id": str(result.inserted_id)}})
    data[f"{collection}_id"]=str(data["_id"])
    del data['_id']
    return

# def find(collection,condition):
#     if(collection=="recipes"):
#         for recipe in recipes:
#             if(recipe["recipe_id"]==condition):
#                 return recipe
#     if(collection=="reviews"):
#         reviews_of_recipe=[]
#         for review in reviews:
#             if(review["recipe_id"]==condition['recipe_id']):
#                 reviews_of_recipe.append(review)
#         return reviews_of_recipe
#     if(collection=="users"):
#         if(condition.get("email")):
#             for user in users:
#                 if(user["email"]==condition["email"] and user["password"]==condition["password"]):
#                     return user
#         if(condition.get("user_id")):
#             for user in users:
#                 if(user["user_id"]==int(condition["user_id"])):
#                     return user
#     return {}
