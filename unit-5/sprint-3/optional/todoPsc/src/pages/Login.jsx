import { Box, Button, Stack,Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginSuccess } from "../redux/authReducer/action";
import { Navigate } from "react-router-dom";

function Login() {
    const [txt, setTxt] = useState({email:"",password:""});
    const dispatch = useDispatch();
    const {isLoading,isError,isAuth,token} = useSelector((state)=>state.auth);
    const handleChange = (e)=>{
        let {name,value} = e.target;
        setTxt({...txt,[name]:value})
    }
    const handleClick=()=>{
        console.log(txt);
        dispatch(LoginSuccess(txt));
    }
    if(token && isAuth){
      return <Navigate to="/dashboard"/>;
    }
  return (
    <Stack  spacing={4} width={"40%"} margin={"auto"}>
        <Box as="h1" fontSize={"20px"} fontWeight={"bold"}>Login</Box>
      <Input
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <Button onClick={handleClick} isLoading={isLoading} loadingText={"Please wait..."}>
        Login
      </Button>
    </Stack>
    
  );
}

export default Login;
