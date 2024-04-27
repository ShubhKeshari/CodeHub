import { legacy_createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import {reducer} from './reducer'

const middleWare = [thunk,logger]

export const store = legacy_createStore(reducer,[...middleWare])