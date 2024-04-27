import { applyMiddleware, combineReducers, legacy_createStore } from "redux"; // imported the legacy_createStore from redux
import todoReducer from "../todoreducer/todoReducer"; //the reducer function
import footballMatchReducer from "../footballreducer/footballReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    todo:todoReducer,
    football:footballMatchReducer
})

//paas the combined reducer function
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));