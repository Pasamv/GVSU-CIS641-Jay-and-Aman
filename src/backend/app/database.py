recipes=[
{
    "recipe_id":"abcd",
    "title":"Chicken Curry",
    "ingridients":"Chicken, Chilli Powder, Chiken Masala,"
},
]
user=[

]
reviews=[

]

def get(collection,search_string):
    if(collection=="recipes"):
        return recipes

def create(collection,data):
    if(collection=="recipes"):
        print("are we")
        recipes.append(data)
        print(recipes)
        return
