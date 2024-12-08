import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    // console.log("search bar rendering");

    const [query, setQuery] = React.useState("");
    const navigate = useNavigate();

    function redirect() {
        const temp = query;
        setQuery("");
        navigate("/search", { state: { temp } });
    }

    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search recipes..."
            />
            <button className="search-button" onClick={redirect}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
