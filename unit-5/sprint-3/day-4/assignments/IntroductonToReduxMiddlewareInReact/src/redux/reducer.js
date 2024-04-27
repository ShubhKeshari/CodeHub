import { LOGGED_PAYLOAD } from "./actionType";

const initialState = {
    loggedPayloads: []
}

function reducer(state=initialState,action){
    switch (action.type) {
        case LOGGED_PAYLOAD:
            return {...state,
                loggedPayloads: [...state.loggedPayloads, action.payload]
            }
    
        default:
            return state;
    }
} 


export default reducer;