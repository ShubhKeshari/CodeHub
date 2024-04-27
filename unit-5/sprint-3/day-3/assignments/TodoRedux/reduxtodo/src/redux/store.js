import { legacy_createStore } from "redux"; // imported the legacy_createStore from redux
import todoReducer from "./todoReducer"; //the reducer function

//paas the reducer function
export const store = legacy_createStore(todoReducer);