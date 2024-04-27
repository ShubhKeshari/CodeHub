import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider=({children})=>{
    // const [isAuth,setIsAuth] = useState(false);
    const [userDetails,setUserDetails]= useState({isAuth:false,username:null});
    
    const handleLogIn=(user)=>{
        setUserDetails({isAuth:true,username:user}) 
    }
    const handleLogOut=()=>{
        // setIsAuth(false);
        setUserDetails({isAuth:false,username:null})
    }
    
    return(
        <AuthContext.Provider  value={{handleLogIn,handleLogOut,userDetails,setUserDetails}}>
        {children}
        </AuthContext.Provider>
    )
}