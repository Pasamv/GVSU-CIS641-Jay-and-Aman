import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

function Logout() {
    console.log("logout rendering");
    const { user, setUser } = useContext(UserContext);

    function handleLogout() {
        localStorage.removeItem("jwt_token");
        setUser({});
    }

    return (
        <div className="logout-container" onClick={handleLogout}>
            <h1 className="logout-text">Logout</h1>
        </div>
    );
}

export default Logout;
