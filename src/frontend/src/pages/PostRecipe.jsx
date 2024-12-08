import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext.jsx";
import { CreateRecipe } from "../utils/api";

function PostRecipe() {
    const { user } = useContext(UserContext);
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const handleSubmit = async () => {
        await CreateRecipe(
            title,
            ingredients,
            instructions,
            user.first_name,
            user.user_id
        );
        setTitle("");
        setIngredients("");
        setInstructions("");
    };

    return (
        <div className="post-recipe-container">
            <h1 className="post-recipe-title">Post Your Recipe</h1>
            <input
                type="text"
                className="post-recipe-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                className="post-recipe-textarea"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Ingredients"
            />
            <textarea
                className="post-recipe-textarea"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Instructions"
            />
            <button
                className="post-recipe-submit-button"
                type="submit"
                onClick={handleSubmit}
            >
                Post Recipe
            </button>
        </div>
    );
}

export default PostRecipe;
