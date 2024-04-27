import { useContext } from "react"
import { AuthContext } from "../context/AuthContextProvider"

export const Dashboard =()=>{
    const {isLoggedIn,setIsLoggedIn,handleLogout}= useContext(AuthContext);
    return(
        <div className="Dashboard">
            <h2 className="User">Hi User</h2>
            <p>How May I help You?</p>
            <button className="LogoutButton" type="submit" onClick={handleLogout}>Log Out</button>
        </div>
    )
}