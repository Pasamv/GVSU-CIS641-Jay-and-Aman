import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Logout from "./Logout";
import Profile from "./Profile"

function NavBar(props)
{
    console.log("navbar rendering");
    const navigate = useNavigate();
    const {user,setUser}=useContext(UserContext);
    console.log("user is ",user);
    const user_logged=<div> 
        <Profile />
        <Link to="/post">Post Recipe</Link>
        <Logout />
    </div>;
    const show_element = (user && Object.keys(user).length)?user_logged:<h1 onClick={()=>navigate("/login")}>Login</h1>;
    return <div style={{display:"-webkit-box"}}>
        <Link to="/"><Logo/></Link>
        <SearchBar />
        {show_element}
    </div>
}
export default React.memo(NavBar);
