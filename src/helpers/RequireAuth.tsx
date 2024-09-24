import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RooteState } from "../store/store";


const RequireAuth = ({ children }: { children: ReactNode }) => {
    const jwt = useSelector((s: RooteState)=> s.user.jwt)

    if(!jwt){
        return <Navigate to="auth/login" replace/>
    }
    return (
        <>
            {children}
        </>
    );
}

export default RequireAuth;