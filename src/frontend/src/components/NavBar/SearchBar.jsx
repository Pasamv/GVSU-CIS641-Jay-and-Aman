import React from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
    const [query, setQuery] = React.useState("");
    const navigate = useNavigate();
    console.log("search bar rendering.");

    function redirect()
    {
        navigate("/search", { state: { query } });
    }

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search recipes..."
            />
            <button onClick={redirect}>Search</button>
        </div>
    );
};

export default SearchBar;
