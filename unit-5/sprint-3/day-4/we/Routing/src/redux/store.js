import { reducer } from "./appReducer";
import {legacy_createStore} from "redux";


export const store = legacy_createStore(reducer)



