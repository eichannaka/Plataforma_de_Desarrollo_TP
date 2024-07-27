    import { Navigate } from "react-router-dom";
    import { useAuth } from "./AuthContext"


    const ProtectedRouter = ({ children }) => {
        const { logueado } = useAuth();

        if (logueado) {
            return children
        } else {
            return <Navigate to="/login" />
        }
    }

    export default ProtectedRouter