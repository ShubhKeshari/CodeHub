import { useContext, useEffect } from "react";
import { useState } from "react"
import { AuthContext } from "../Context/AuthContext";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export const LogIn=()=>{
const init ={username:"",password:""}    
const [userData,setUserData]= useState(init);
const {user,handleLogIn}= useContext(AuthContext);

const navigate = useNavigate();
const handleChange=(e)=>{
    let input=e.target;
    let name=input.name;
    let value= input.value;
    setUserData({...userData,[name]:value});
}
useEffect(()=>{
    if(user.isAuth){
        navigate("/product");
    }
  },[user.isAuth])

const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("https://reqres.in/api/login",userData).then((res)=>{handleLogIn(res.data.token); console.log(res.data.token); setUserData(init)}).catch((err)=>{console.log(err)})
}

return(
    <form onSubmit={handleSubmit}>
    <input type="email" name="username" placeholder="Enter Your EmailId"  value={userData.username} onChange={handleChange}/>
    <input type="password" name="password" placeholder="Enter Your Password"  value={userData.password} onChange={handleChange}/>
    <button type="submit">Login</button>
    </form>
)
}