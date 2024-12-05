import { useNavigate } from "react-router-dom";

function RecipeCard(props)
{
    const navigate = useNavigate();
    const recipe=props.recipe;
    return <div onClick={()=>navigate("/recipe/"+recipe.recipe_id,{ state: recipe })}><h1>
        {props.recipe.title},{recipe.recipe_id}</h1>
    </div>
}
export default RecipeCard;
