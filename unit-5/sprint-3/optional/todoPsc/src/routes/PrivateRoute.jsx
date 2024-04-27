import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export default function PrivateRoute({children}) {
  const {token,isAuth} = useSelector((state)=>state.auth);

    if(!token&&!isAuth) {
      return <Navigate to ="/login"/>
    }
    return children;

}
