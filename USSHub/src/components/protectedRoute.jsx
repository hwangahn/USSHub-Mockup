import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
    let { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
        return <Navigate to='/login' />
    } else {
        return <Outlet/>;
    }
}