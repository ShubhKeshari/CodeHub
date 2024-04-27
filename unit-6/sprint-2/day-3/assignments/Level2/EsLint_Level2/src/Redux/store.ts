

import kidSlice from "./ProductsSlice/kidSlice";
import menSlice from "./ProductsSlice/menSlice";
import womenSlice from "./ProductsSlice/womenSlice";
import { loginReducer } from "./Reducers/AuthReducer";
import productReducer from "./adminDataReducer/reducer"
import {configureStore} from "@reduxjs/toolkit";
 const store = configureStore({
  reducer:{
     auth: loginReducer,
    menData: menSlice,
    womenData: womenSlice,
    kiddata : kidSlice,
    Products: productReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
