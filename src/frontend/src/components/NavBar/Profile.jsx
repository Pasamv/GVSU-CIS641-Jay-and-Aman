import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
function Profile()
{
    console.log("profile rendering");
    const {user,setUser}=useContext(UserContext);
    return <h1>{user?user["first_name"]:""}</h1> //user
}
export default Profile;
