import { createContext, useState } from "react";

export const AuthContext =createContext();

export const AuthContextProvider =({children})=>{
    let intiState ={
        isAuth:false,
        token:null,
    };

    const [isLoggedIn,setIsLoggedIn] = useState(intiState);
    //for token
    const handleLogin=(payLoad)=>{
        setIsLoggedIn({
            isAuth:true,
            token:payLoad
        });
        console.log(isLoggedIn);
    };

    const handleLogout=()=>{
        setIsLoggedIn(intiState);
    };

    return (
        <AuthContext.Provider value={{isLoggedIn,handleLogin,handleLogout,setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}