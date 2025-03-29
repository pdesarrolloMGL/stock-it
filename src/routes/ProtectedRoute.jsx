import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem("token"); 

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
