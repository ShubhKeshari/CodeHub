import { LOGIN_ERROR,LOGIN_LOADING,LOGIN_SUCCESS } from "./actionType";
const initState={
    isLoading: false,
    isError: false,
    token:null,
    isAuth:false,
}
export const authReducer=(state=initState,{type,payload})=>{
    switch(type){
        case 'LOGIN_LOADING':
            return {...state,isLoading:true};
        case 'LOGIN_ERROR':
            return {...state,isError:true};
        case 'LOGIN_SUCCESS':
            return {...state,isLoading:false,isError:false,token:payload,isAuth:true};
        case  'LOGOUT':
            return {...state,isAuth:false,token:null};
        default:
            return state
    }
};