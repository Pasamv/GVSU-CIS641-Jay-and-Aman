import RecipeCard from "./RecipeCard";
import { GetRecipes } from "../../utils/api";
import { useEffect, useState } from "react";

const RecipesList = (props) => {
    console.log("recipes list rendering",props);
    const [data, setData] = useState([]);

    async function get() {
        const response = await GetRecipes(props.query);
        setData(response);
    }

    useEffect(() => {
        get();
    }, [props.query]);

    console.log(data);

    return (
        <div className="recipes-list-container">
            <h1 className="recipes-list-title">Recipes List</h1>
            <div className="recipes-list-content">
                {data.length > 0 ? (
                    data.map((recipe, index) => (
                        <RecipeCard key={index} recipe={recipe} />
                    ))
                ) : (
                    <p className="recipes-list-empty">No recipes found.</p>
                )}
            </div>
        </div>
    );
};

export default RecipesList;
