import { legacy_createStore } from "redux";
import logger from "redux-logger";
import {thunk} from "redux-thunk";
import {reducer} from "./reducer";
const middleware = [thunk, logger];
export const store = legacy_createStore(reducer,[...middleware])