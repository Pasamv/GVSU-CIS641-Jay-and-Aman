import React from "react";
import RecipesList from "../components/RecipiesList/RecipiesList";

const HomePage = () => {
    console.log("homepage re-rendering");

    return (
        <div className="homepage-container">
            <div className="homepage-header">
                <h5 className="homepage-title">Top Recipes</h5>
            </div>
            <div className="homepage-content">
                <RecipesList query="top" />
            </div>
        </div>
    );
};

export default HomePage;
