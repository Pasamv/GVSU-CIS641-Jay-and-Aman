import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ReviewList from "../components/ReviewList";
import Review from "../components/Review";
import { GetRecipe } from "../utils/api";

function RecipeDetail() {
    const location = useLocation();
    const { id } = useParams();
    const [recipe,setRecipe] = useState(location.state || null);

    async function get() {
        const data = await GetRecipe(id);
        console.log(data);
        setRecipe(data);
    }
    useEffect(()=>{get()}, []);

    return (
        <>{recipe?(
        <div className="recipe-details-container">
            <div className="recipe-details-content">
                <h1 className="recipe-details-title">Recipe Details</h1>
                <h2 className="recipe-title">{recipe.title}</h2>
                <div className="recipe-ingredients">
                    <h3>Ingredients:</h3>
                    <p>{recipe.ingredients}</p>
                </div>
                <div className="recipe-instructions">
                    <h3>Instructions:</h3>
                    <p>{recipe.instructions}</p>
                </div>
            </div>
            <div className="recipe-reviews">
                <Review recipe_id={recipe.recipe_id} />
                <ReviewList recipe_id={recipe.recipe_id} />
            </div>
        </div>):
        <div>Recipe Loading</div>}
        </>
    );
}

export default RecipeDetail;
