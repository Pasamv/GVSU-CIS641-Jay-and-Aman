import { useNavigate } from "react-router-dom";

function RecipeCard(props) {
    const navigate = useNavigate();
    const recipe = props.recipe;

    return (
        <div 
            className="recipe-card-container" 
            onClick={() => navigate("/recipe/" + recipe.recipe_id, { state: recipe })}
        >
            <h1 className="recipe-card-title">{recipe.title}</h1>
            <p className="recipe-card-author">Posted By: <span style={{textTransform: "uppercase"}}>{recipe.first_name}</span></p>
        </div>
    );
}

export default RecipeCard;
