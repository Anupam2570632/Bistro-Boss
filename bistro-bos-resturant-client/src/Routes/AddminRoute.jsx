import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import LoadingPage from "../components/LoadingPage";



const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <LoadingPage/>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={location.pathname} replace></Navigate>

};

export default AdminRoute;