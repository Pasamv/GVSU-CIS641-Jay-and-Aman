import { useLocation } from "react-router-dom";

import ReviewList from "../components/ReviewList";
import Review from "../components/Review";

function RecipeDetail()
{
    const location = useLocation();
    const recipe = location.state || {};
    return <>
    <div>
        <h1>Recipe Details</h1>
        <h2>{recipe.title}</h2>
        <h3>{recipe.ingridients}</h3>
        <h3>{recipe.instructions}</h3>
    </div>
    <Review recipe_id={recipe.recipe_id} />
    <ReviewList recipe_id={recipe.recipe_id}/>
    </>
}
export default RecipeDetail;
