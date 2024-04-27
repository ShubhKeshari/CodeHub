import { useContext, useState } from "react"
import { AuthContext } from "../Components/Auth";

export const LogIn=()=>{
    const {handleLogOut,handleLogIn,userDetails,setUserDetails}= useContext(AuthContext);
    const [userData,setUserData]= useState({username:"",password:""});
       const handleChange=(e)=>{
        let input=e.target;
        let name=input.name;
        let value= input.value;
        setUserData({...userData,[name]:value});
    }
    const handleSubmit=(e)=>{
       e.preventDefault();
    //  setUserDetails([...userDetails,userData]);
       console.log(userData);
       console.log(userDetails);
       handleLogIn(userData.username);
       setUserData({username:"",password:""});  
    }
    return (
        <form onSubmit={handleSubmit}>
         <input name="username" type="text" placeholder="Enter a Name" value={userData.username} onChange={handleChange}/>
         <input name="password" type="password" placeholder="Enter a Password" value={userData.password} onChange={handleChange}/>
         <button type="submit">Login</button>
        </form>
    )
}