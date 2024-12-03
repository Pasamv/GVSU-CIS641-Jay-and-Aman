import { useState } from "react";

function PostRecipe()
{
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const handleSubmit = () => {
            //#TODO: send the recipe to database.
        // axios.post("http://localhost:5000/recipes", {
        //     title,
        //     ingredients,
        //     instructions,
        // });
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Post Recipe</button>
        </form>
    );

}
export default PostRecipe;
