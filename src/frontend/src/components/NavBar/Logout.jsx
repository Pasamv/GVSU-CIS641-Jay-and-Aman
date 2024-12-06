import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

function Logout()
{
    console.log("logout rendering");
    const {user,setUser}=useContext(UserContext);
    function fun()
    {
        localStorage.removeItem("jwt_token");
        setUser({});
    }
    return <h1 onClick={fun}>Logout</h1>
}
export default Logout;