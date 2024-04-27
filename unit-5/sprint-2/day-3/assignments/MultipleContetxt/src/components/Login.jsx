import { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContextProvider";

export const LoginForm=()=>{
   const init ={username:"",password:""}
   const [userData,setUserData]= useState(init);
   const {handleLogin,handleLogout,isLoggedIn}= useContext(AuthContext);
   
   const handleChange=(e)=>{
       let input=e.target;
       let name=input.name;
       let value= input.value;
       setUserData({...userData,[name]:value});
   }
   const handleSubmit=(e)=>{
      e.preventDefault();
       axios.post("https://reqres.in/api/login",userData).then((res)=>{handleLogin(res.data.token); console.log(res.data.token); setUserData(init)}).catch((err)=>{console.log(err)})
     //  console.log(isLoggedIn);
   }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input className="Email" type="text" name="username" placeholder="Enter a Email ID" value={userData.username} onChange={handleChange}/>
            <br/>
            <input className="Password" type="password" name="password" placeholder="Enter a password" value={userData.password} onChange={handleChange} />
            <br/>
            <button type="submit" onClick={(()=>{isLoggedIn.isAuth?false:true})}>{isLoggedIn.isAuth?"LogOut":"LogIn"}</button>
        </form>
    )
}