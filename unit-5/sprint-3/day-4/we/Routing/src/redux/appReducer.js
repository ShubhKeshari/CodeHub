import { GET_PRODUCTS, LOADING } from "./actionType";

const initState = {
  isAuth: false,
  token: null,
  data: [],
  isLoading: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        data: [...state.data,  payload],
      };
    default:
      return state;
  }
};
