import { useLocation } from "react-router-dom";
import RecipesList from "../components/RecipiesList/RecipiesList";

function RecipeSearch()
{
    console.log("recipe search rendering");
    const location = useLocation();
    const {query} = location.state || {};
    return <>
        <h1>Recipe Search Results for {query}</h1>
        <RecipesList query={query}/>
    </>
}
export default RecipeSearch;
