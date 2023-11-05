import { useContext } from "react";
import { AuthContext } from "../Utils/AuthProvider/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
};

export default useAuth;