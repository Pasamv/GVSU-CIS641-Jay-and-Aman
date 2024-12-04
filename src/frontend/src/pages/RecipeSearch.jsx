import { useLocation } from "react-router-dom";
import {GetRecipes} from "../utils/api"
import RecipesList from "../components/RecipiesList/RecipiesList";

function RecipeSearch()
{
    const location = useLocation();
    const {query} = location.state || {};
    const data=GetRecipes(query);
    return <>
        <h1>Recipe Search Results for {query}</h1>
        <RecipesList data={data}/>
    </>
}
export default RecipeSearch;
