import { useContext } from "react"
import { AuthContext } from "../context/AuthContextProvider"
import { ThemeContext } from "../context/ThemeProvider";

 export const Navbar=()=>{
    const {isLoggedIn,setIsLoggedIn,handleLogout}= useContext(AuthContext);
    const {theme,setTheme} = useContext(ThemeContext);

    return (
        <div className="Navbar">
        {isLoggedIn.isAuth?<h3>Logged in</h3>:<h3>LogIn Here</h3>}
        <button onClick={()=>{setTheme((prev)=>(prev==="dark"?"light":"dark"))}}>Theme</button>
       </div>
    )
 }