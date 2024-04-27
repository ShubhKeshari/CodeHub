import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "./Auth"

export const Navbar=()=>{
    const {userDetails} = useContext(AuthContext);
    return(
        <div className="Navbar">
        <Link to="/">Home</Link>
        {!userDetails.isAuth&&<Link to="/LogIn">LogIn</Link>} 
        {userDetails.isAuth&&<Link to="/Users">Users</Link>}
        </div>
    )
}