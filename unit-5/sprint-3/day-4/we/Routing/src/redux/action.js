import { GET_PRODUCTS, LOADING } from "./actionType";

export const loadingAction = () => {
  return { type: LOADING };
};

export const getSuccessAction = (payload) => {
  return { type: GET_PRODUCTS, payload: payload };
};
