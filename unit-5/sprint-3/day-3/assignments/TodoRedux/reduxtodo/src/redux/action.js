import { Error, Get_Todo, Loading } from "./actionType"

export const errorAction = () =>{
    return {type: Error};
}
export const loadingAction = () =>{
    return {type: Loading};
}
export const getTodoAction = (payload) =>{
    return {type: Get_Todo,payload:payload};
}
