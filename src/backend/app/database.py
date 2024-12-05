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
user=[

]
reviews=[
{
    "user_id":"kasik",
    "review":"Awsome!",
    "recipe_id":"emcjdf"
},
{
    "user_id":"kasik",
    "review":"Awsome!",
    "recipe_id":"emcjdf"
}
]

def get(collection,search_string):
    if(collection=="recipes"):
        return recipes

def create(collection,data):
    if(collection=="recipes"):
        recipes.append(data)
        print(recipes)
        return
    if(collection=="reviews"):
        reviews.append(data)
        return

def find(collection,condition):
    if(collection=="recipes"):
        for recipe in recipes:
            if(recipe["recipe_id"]==condition):
                return recipe
    if(collection=="reviews"):
        return reviews
    return ""
