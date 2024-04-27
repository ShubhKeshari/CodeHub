import { FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "./actionType"

export const fetchdataAction =()=>{
    return {type:FETCH_DATA};
}
export const fetchdataSucessAction =(payload)=>{
    return {type:FETCH_DATA_SUCCESS,payload};
}
export const fetchdataFailureAction = ()=>{
    return {type:FETCH_DATA_FAILURE};
}

