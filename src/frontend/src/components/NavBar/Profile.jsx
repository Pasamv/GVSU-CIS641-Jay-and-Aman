import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

function Profile() {
    console.log("profile rendering");
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="profile-container">
            {user ? (
                <div className="profile-content">
                    <h1 className="profile-name">Hi, {user["first_name"]}!</h1>
                </div>
            ) : (
                <div className="profile-content">
                    <h1 className="profile-name">Guest</h1>
                </div>
            )}
        </div>
    );
}

export default Profile;
