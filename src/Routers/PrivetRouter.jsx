import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({children}) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();
    

    if(isLoading){
        return (
            <div>
                <h1>Loading ...</h1>
            </div>
        );
    }

    if(!user){
        return <Navigate state={location.pathname} to='/login' />
    }

    return children;
};

PrivetRouter.propTypes = {
    children: PropTypes.node, 
  };
export default PrivetRouter;