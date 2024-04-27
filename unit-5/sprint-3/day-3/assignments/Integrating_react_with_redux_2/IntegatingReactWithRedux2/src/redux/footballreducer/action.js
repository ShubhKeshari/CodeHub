import { FOOTBALL_FETCH_FAILURE, FOOTBALL_FETCH_REQUEST, FOOTBALL_FETCH_SUCCESS } from "./actionType"

export const footlistFetchAction = ()=>{
    return {type:FOOTBALL_FETCH_REQUEST}
}
export const footlistFetchSuccess = (payload)=>{
    return {type:FOOTBALL_FETCH_SUCCESS,payload}
}
export const footlistFetchFailure = ()=>{
    return {type:FOOTBALL_FETCH_FAILURE}
}