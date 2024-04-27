import { FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "./actionType";


const initState = {
    isLoading: false,
    isError:false,
    products:[]
}

export const reducer = (state = initState,{type,payload})=>{
    switch(type){
        case FETCH_DATA:
            return {
              ...state,
                isLoading:true
            };
        case FETCH_DATA_SUCCESS:
            return {
              ...state,
                products:payload,
                isLoading:false,
                isError:false
            };
        case FETCH_DATA_FAILURE:
            return {
              ...state,
                isError:true,
                isLoading:false
            }
        default:
            return state
    }
}