import { useState } from "react";

import {CreateRecipe} from "../utils/api";

function PostRecipe()
{
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const handleSubmit = () => {
        const response = CreateRecipe(title,ingredients,instructions);
    };

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Ingredients"
            />
            <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Instructions"
            />
            <button type="submit" onClick={handleSubmit}>Post Recipe</button>
        </div>
    );

}
export default PostRecipe;
