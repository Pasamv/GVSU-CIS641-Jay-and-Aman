// API's
export async function GetRecipes(query)
{
    const response = await fetch("http://127.0.0.1:5000/search?title="+query,{
      method : "GET",
    })
    try{
    if (response.ok) {
        const data = await response.json();
        console.log("Recipes fetched",data);
        return data;
    } else {
        console.error(`Error fetching Recipes: ${response.status} - ${response.statusText}`);
        return [];
    }
    } catch (error) {
        console.error("Failed to fetch Recipes:", error);
        return null;
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
        console.error('Failed to Post Recipe');
    }
}

export async function GetReviews(recipe_id)
{
    const response = await fetch("http://127.0.0.1:5000/reviews/"+recipe_id,{
        method : "GET",
      })
      if (response.ok) {
          console.log(response.ok);
          const data = await response.json();
          console.log("Reviews fetched",data);
          return data;
      } else {
          console.error("Error fetching reviews:", error);
      }
}

export async function CreateReview(review,recipe_id)
{
    const ReviewData={
        review:review,
        recipe_id:recipe_id
    }
    const headers={
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${localStorage.getItem('jwt_token')}`
    }
    const response = await fetch("http://127.0.0.1:5000/post_review",{
        method : "POST",
        headers: headers,
        body:JSON.stringify(ReviewData)
    })
    if (response.ok) {
        console.log(response.ok);
        const data = await response.json();
        console.log("Review Posted",data);
        return true;
    } 
    else {
        // Display error message to the user
        console.error('Failed to Post Review');
    }
}

export async function GetUser(jwt_token) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt_token}`,
    };

    try {
        const response = await fetch("http://127.0.0.1:5000/user", {
            method: "GET",
            headers: headers
        });

        if (response.ok) {
            const data = await response.json();
            console.log("User info retrieved", data);
            return data;
        } else {
            console.error(`Error fetching user info: ${response.status} - ${response.statusText}`);
            return null;
        }
    } catch (error) {
        console.error("Failed to fetch user info:", error);
        return null;
    }
}

export async function signin(loginform)
{
    const headers={
        'Content-Type': 'application/json'
    }
    const response = await fetch("http://127.0.0.1:5000/signin", {
        method: "POST",
        headers:headers,
        body:JSON.stringify(loginform)
    });
    if (response.ok) {
        const data=await response.json();
        console.log("user logged in successfully");
        return data;
    }
    else {
        // Display error message to the user
        console.error('Failed to signin');
        return false;
    }
}

export async function signup(signupform)
{
    const headers={
        'Content-Type': 'application/json',
    }
    const response = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        headers:headers,
        body:JSON.stringify(signupform)
    });
    if (response.ok) {
        const data=await response.json();
        console.log("user signed up successfully");
        return data;
    }
    else {
        // Display error message to the user
        console.error('Failed to signup');
        return false;
    }
}
