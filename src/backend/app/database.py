recipes=[
{
    "recipe_id":"abcd",
    "title":"Chicken Curry",
    "ingridients":"Chicken, Chilli Powder, Chiken Masala,",
    "instructions":"1. Turn on the stove, 2.Heat the pan, 3.pour oil",
    "user_id":"123"
},
{
    "recipe_id":"cdef",
    "title":"Potato Curry",
    "ingridients":"Potatoes, Chilli Powder, Garam Masala,",
    "instructions":"1. Turn on the stove, 2.Heat the pan, 3.pour oil",
    "user_id":"234"
},
{
    "recipe_id":"agkh",
    "title":"Chana Curry",
    "ingridients":"Chana, Chilli Powder, Chana Masala,",
    "instructions":"1. Turn on the stove, 2.Heat the pan, 3.pour oil",
    "user_id":"234"
},
]

users=[
{
    "user_id":123465,
    "first_name": "Aman",
    "last_name":"Prajapati",
    "email":"prajapa@mail.gvsu.edu",
    "password":"zzzzz",
    "profile_pic":"some1.png"
},
{
    "user_id":34729,
    "first_name":"Jayanth",
    "last_name":"Pasam",
    "email":"pasamv@mail.gvsu.edu",
    "password":"aaaaa",
    "profile_pic":"some.png"
}
]

reviews=[
{
    "user_id":"Jayanth",
    "review":"It's not as tasty as I expected",
    "recipe_id":"emcjdf"
},
{
    "user_id":"Aman",
    "review":"Good!",
    "recipe_id":"emcjdf"
}
]

def get(collection,condition):
    if(collection=="recipes"):
        if(condition.get("title")):
            if(condition["title"]=="top"):
                return recipes
            recipes_matched=[]
            for recipe in recipes:
                if(condition["title"] in recipe["title"]):
                    recipes_matched.append(recipe)
            return recipes_matched
    return []

def create(collection,data):
    if(collection=="recipes"):
        recipes.append(data)
        print(recipes)
        return
    if(collection=="reviews"):
        reviews.append(data)
        return
    if(collection=="users"):
        users.append(data)

def find(collection,condition):
    if(collection=="recipes"):
        for recipe in recipes:
            if(recipe["recipe_id"]==condition):
                return recipe
    if(collection=="reviews"):
        reviews_of_recipe=[]
        for review in reviews:
            if(review["recipe_id"]==condition['recipe_id']):
                reviews_of_recipe.append(review)
        return reviews_of_recipe
    if(collection=="users"):
        if(condition.get("email")):
            for user in users:
                if(user["email"]==condition["email"] and user["password"]==condition["password"]):
                    return user
        if(condition.get("user_id")):
            for user in users:
                if(user["user_id"]==int(condition["user_id"])):
                    return user
    return {}
