import { applyMiddleware, legacy_createStore } from "redux";
import { loggerActionMiddleWare, loggerPayloadMiddleWare } from "../middleware/midware";
import reducer from "./reducer";
const middleware  = applyMiddleware(loggerActionMiddleWare,loggerPayloadMiddleWare);
const store = legacy_createStore(reducer, middleware);

export {store}
