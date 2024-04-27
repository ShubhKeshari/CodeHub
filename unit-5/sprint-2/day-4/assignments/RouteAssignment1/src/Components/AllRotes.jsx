import { Route, Router, Routes } from "react-router-dom"
import { LogIn } from "../pages/Login"
import { Home } from "../pages/Home"
import { Users } from "../pages/Users"
import { useContext } from "react"
import { AuthContext } from "./Auth"

export const AllRoute=()=>{
    const {userDetails}= useContext(AuthContext);
    return (
        <>
        
         <Routes>
            <Route path="/" element={<Home/>}/>
            {userDetails.isAuth?(<Route path="/users" element={<Users />}/>):(<Route path="/logIn" element={<LogIn/>}/>)}
        </Routes>
        </>
    )
}