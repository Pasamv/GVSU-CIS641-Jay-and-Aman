import React, { useState, useEffect } from "react";
import RecipesList from "../components/RecipiesList/RecipiesList";

const HomePage = () => {
    console.log("homepage re-rendering");
    return <div>
        <h1>Home Page</h1>
        <RecipesList query="top"/>
    </div>
};

export default HomePage;
