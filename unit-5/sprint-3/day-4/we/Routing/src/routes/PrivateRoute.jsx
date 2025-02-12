import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  
    let isAuth = true;

    if(!isAuth){
       return <Navigate to="/login" />
    }

    return children;
}

export default PrivateRoute