import RecipeCard from "./RecipeCard"
import { GetRecipes } from "../../utils/api";
import { useEffect, useState } from "react";

const RecipesList = (props) =>{
    // fetch newly added recipies if props.search="" else search it with that key.
    // then display them using recipe card.
    console.log("prop that we got is",props);
    const [data,setData]= useState([])
    async function get()
    {
        const respose = await GetRecipes(props.query);
        console.log(respose);
        setData(respose);
    }
    useEffect(()=>{get()},[props.query]);
    console.log(data,"tharun");

    return <>
    <h1> recipies list </h1>
    {data.length > 0 ? (
        data.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
        ))
    ) : (
        <p>No recipes found.</p>
    )}
    </>
};

export default RecipesList;
