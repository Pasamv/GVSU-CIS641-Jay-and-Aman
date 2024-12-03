import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Login from "./Login";
import Profile from "./Profile"

function NavBar(props)
{
    const userLogged=true;
    const user=<>
        <Profile />
        <Link to="/post">Post Recipe</Link>
        <h1>Logout</h1> 
    </>;
    //TODO: logout has to be related to user context.
    const show_element = userLogged?user:<Login />;
    console.log("navbar rendering");
    return <div style={{display:"-webkit-box"}}>
        <Link to="/"><Logo/></Link>
        <SearchBar />
        {show_element}
    </div>
}
export default React.memo(NavBar);
