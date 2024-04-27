import { FETCH_DATA, FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from "./actionType"


export const fetchdataAction=()=>{
    return {type:FETCH_DATA};
}

export const fetchdataSuccessAction=()=>{
    return {type:FETCH_DATA_SUCCESS,payload};
}
export const fetchdataFailureAction=()=>{
    return {type:FETCH_DATA_FAILURE};
}