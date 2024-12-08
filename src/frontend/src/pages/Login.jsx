import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { signin, signup } from "../utils/api";
import UserContext from "../contexts/UserContext";

function Login() {
    console.log("login rendering");

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({ email: "", password: "" });
    const [signupForm, setSignupForm] = useState({
        email: "",
        first_name: "",
        last_name: "",
        password: ""
    });

    async function handleLogin() {
        const res = await signin(loginForm);
        if (res) {
            console.log("user is:", res);
            localStorage.setItem("jwt_token", res["user_id"]);
            setUser({
                username: res["first_name"] + res["last_name"],
                first_name: res["first_name"]
            });
            navigate("/");
        } else {
            setLoginForm({ email: "", password: "" });
        }
    }

    async function handleSignup() {
        const res = await signup(signupForm);
        if (res) {
            console.log("user is:", res);
            localStorage.setItem("jwt_token", res["user_id"]);
            setUser({
                username: res["first_name"] + res["last_name"],
                first_name: res["first_name"]
            });
            navigate("/");
        } else {
            setSignupForm({
                email: "",
                first_name: "",
                last_name: "",
                password: ""
            });
        }
    }

    return (
        <div className="login-container">
            <div className="form-section">
                <h1 className="form-title">Login</h1>
                <input
                    type="text"
                    className="form-input"
                    value={loginForm.email}
                    onChange={(e) =>
                        setLoginForm({ ...loginForm, email: e.target.value })
                    }
                    placeholder="Email"
                />
                <input
                    type="password"
                    className="form-input"
                    value={loginForm.password}
                    onChange={(e) =>
                        setLoginForm({ ...loginForm, password: e.target.value })
                    }
                    placeholder="Password"
                />
                <button className="form-button" type="submit" onClick={handleLogin}>
                    Login
                </button>
            </div>
            <div className="form-section">
                <h1 className="form-title">Signup</h1>
                <input
                    type="text"
                    className="form-input"
                    value={signupForm.first_name}
                    onChange={(e) =>
                        setSignupForm({ ...signupForm, first_name: e.target.value })
                    }
                    placeholder="First Name"
                />
                <input
                    type="text"
                    className="form-input"
                    value={signupForm.last_name}
                    onChange={(e) =>
                        setSignupForm({ ...signupForm, last_name: e.target.value })
                    }
                    placeholder="Last Name"
                />
                <input
                    type="text"
                    className="form-input"
                    value={signupForm.email}
                    onChange={(e) =>
                        setSignupForm({ ...signupForm, email: e.target.value })
                    }
                    placeholder="Email"
                />
                <input
                    type="password"
                    className="form-input"
                    value={signupForm.password}
                    onChange={(e) =>
                        setSignupForm({ ...signupForm, password: e.target.value })
                    }
                    placeholder="Password"
                />
                <button
                    className="form-button"
                    type="submit"
                    onClick={handleSignup}
                >
                    Signup
                </button>
            </div>
        </div>
    );
}

export default Login;
