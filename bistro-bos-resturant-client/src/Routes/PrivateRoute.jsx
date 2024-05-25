import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return '...Loading'
    }
    if (!user) {
        return <Navigate to={'/login'} state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivateRoute;