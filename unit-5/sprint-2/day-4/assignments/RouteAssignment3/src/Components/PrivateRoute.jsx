import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom";

export const PrivateRoute=({children})=>{
    const {user} = useContext(AuthContext);
  return user.isAuth? children : <Navigate to="/logIn" />  
}