import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext(null);

export function Auth({ children }) {
    let [isLoggedIn, setLoggedIn] = useState(null);

    let getProfile = () => {
        return localStorage.getItem("USSHub Profile");
    }

    let setProfile = (username) => {
        localStorage.setItem("USSHub Profile", username);
    }

    let clearProfile = () => {
        localStorage.clear("USSHub Profile");
    }

    useEffect(() => {
        if (getProfile()) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, setProfile, clearProfile, getProfile }}>
            {children}
        </AuthContext.Provider>
    )
}