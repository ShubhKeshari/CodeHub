import { useState } from "react";
import { createContext } from "react";
import { Navbar } from "../Components/Navbar";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
  const init ={isAuth:false ,Token:""};
  const [user,setUser]= useState(init);

  const handleLogIn=(payloads)=>{
    setUser({
        isAuth:true,
        Token:payloads,
    })
    // return  <Navigate to="/" />;
  }

  const handleLogOut=()=>{
    setUser(init);
  }

  return (
    <AuthContext.Provider value={{handleLogOut,handleLogIn,user}}>
        {children}
    </AuthContext.Provider>
  )
}