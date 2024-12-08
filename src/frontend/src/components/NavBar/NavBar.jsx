import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Logout from "./Logout";
import Profile from "./Profile";

function NavBar(props) {
    // console.log("navbar rendering");
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    console.log("user is ", user);

    const userLogged = (
        <div className="navbar-user-logged">
            <Profile />
            <Link to="/post" className="navbar-link">Post Recipe</Link>
            <Logout />
        </div>
    );

    const showElement = (user && Object.keys(user).length) ? (
        userLogged
    ) : (
        <h1 className="navbar-login" onClick={() => navigate("/login")}>Login</h1>
    );

    return (
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                <Logo />
            </Link>
            <div className="navbar-search-bar">
                <SearchBar />
            </div>
            <div className="navbar-elements">
                {showElement}
            </div>
        </div>
    );
}

export default React.memo(NavBar);
