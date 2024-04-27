import { Error, Get_Todo, Loading } from "../todoreducer/actionType";

const intitalState = {
  isLoading: false,
  isError: false,
  todo: [],
};

function todoReducer(state = intitalState, { type, payload }) {
  switch (type) {
    case Loading:
      return { ...state, isLoading: true };
    case Get_Todo:
      return { ...state, isLoading: false, isError: false, todo: payload };
    case Error:
      return { ...state, isError: true };
    default:
      return state;
  }
}

export default todoReducer;
