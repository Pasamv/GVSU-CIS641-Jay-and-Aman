import { useLocation } from "react-router-dom";

function RecipeSearch()
{
    const location = useLocation();
    const {query} = location.state || {};
    return <>
    <h1>Recipe Search {query}</h1>
    </>
}
export default RecipeSearch;
