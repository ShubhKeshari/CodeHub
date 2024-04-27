import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./actionType";
import axios  from "axios";
let url = "https://reqres.in/api/login";
export const LoginLoadingAction=()=>{
    return {type:LOGIN_LOADING};
}
export const LoginErrorAction=()=>{
    return {type:LOGIN_ERROR};

}
export const LoginSuccessAction=(payload)=>{
    return {type:LOGIN_SUCCESS, payload};
}
export const LogoutAction =()=>{
    return {type:LOGOUT};
}

export const LoginSuccess =(payload)=>(dispatch)=>{
    dispatch(LoginLoadingAction());
    axios.post(url, payload).then((res)=>{
        dispatch(LoginSuccessAction(res.data.token));
    })
    .catch((err)=>{
        console.log(err);
        dispatch(LoginErrorAction());
    });
};