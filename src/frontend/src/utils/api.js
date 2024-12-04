// API's
export async function GetRecipes(query)
{
    const response = await fetch("http://127.0.0.1:5000/search?title="+query,{
      method : "GET",
    })
    if (response.ok) {
        console.log(response.ok);
        const data = await response.json();
        console.log("Recipes fetched",data);
        return data;
    } else {
        // Display error message to the user
        throw new Error('Failed to fetch Recipes');
    }
}

export async function CreateRecipe(title,ingredients,instructions)
{
    const RecipeData={
        title:title,
        ingredients:ingredients,
        instructions:instructions
    }
    const headers={
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${localStorage.getItem('jwt_token')}`
    }
    const response = await fetch("http://127.0.0.1:5000/post_recipe",{
        method : "POST",
        headers: headers,
        body:JSON.stringify(RecipeData)
    })
    if (response.ok) {
        console.log(response.ok);
        const data = await response.json();
        console.log("Recipe Posted",data);
        return true;
    } 
    else {
        // Display error message to the user
        throw new Error('Failed to Post Recipe');
    }
}

