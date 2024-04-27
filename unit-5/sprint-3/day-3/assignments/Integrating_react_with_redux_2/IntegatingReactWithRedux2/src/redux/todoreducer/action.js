import { Error, Get_Todo, Loading } from "../todoreducer/actionType"

export const errorAction = () =>{
    return {type: Error};
}
export const loadingAction = () =>{
    return {type: Loading};
}
export const getTodoAction = (payload) =>{
    return {type: Get_Todo,payload:payload};
}
