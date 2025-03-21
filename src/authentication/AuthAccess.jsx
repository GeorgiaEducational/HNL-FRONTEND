import React from "react";
import { Navigate } from "react-router-dom";    
import { useAuthentication } from "../auth";    


function ProtectedRoute({children}) {
    const {isAuthorized} = useAuthentication();

    if (!isAuthorized) {
        return <div>Loading...........</div>
    }

    if (
        isAuthorized &&
        (window.location.pathname === "/login" || window.location.pathname === "/signup")
    ) {
        return <Navigate to="/" />;
    }

    return children;
}

export default ProtectedRoute;
