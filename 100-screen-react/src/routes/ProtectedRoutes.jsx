import { createContext } from 'react';
import PropTypes from "prop-types";
import Navigate from "react-router-dom";



function ProtectedRoutes({ children }) {
    const { user } = createContext();
    if (!user) {
        return <Navigate to="/signin" replace/>
    } else {
        return children
    }
  
}

ProtectedRoutes.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoutes