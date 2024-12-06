import { createContext, useState, useEffect } from "react";
import { GetUser } from "../utils/api";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    console.log("user context rendering");
    const [user, setUser] = useState(null);
    const func = async()=>{
        const jwt=localStorage.getItem('jwt_token');
        if(jwt)
        {
            const res = await GetUser(jwt);
            setUser(res);
        }
    }
    useEffect(()=>{func()},[children]);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
