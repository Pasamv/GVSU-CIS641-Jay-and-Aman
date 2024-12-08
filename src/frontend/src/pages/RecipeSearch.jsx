import { useLocation } from "react-router-dom";
import RecipesList from "../components/RecipiesList/RecipiesList";

function RecipeSearch()
{
    // console.log("recipe search rendering");
    const location = useLocation();
    const {temp} = location.state || {};
    return <>
        <h1>Search Results for {temp}</h1>
        <RecipesList query={temp}/>
    </>
}
export default RecipeSearch;
