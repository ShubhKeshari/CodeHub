import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSuccessAction, loadingAction } from '../redux/action';

const Login = () => {
    const [data, setData]= useState({})
const dispatch =useDispatch();
const {isLoading, token} = useSelector((state)=> state)

    const handleLogin =(data)=>{
        dispatch(loadingAction());

        dispatch(getSuccessAction(data))
    }
  return (
    <div>Login</div>
  )
}

export default Login