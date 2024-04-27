import {
  FOOTBALL_FETCH_FAILURE,
  FOOTBALL_FETCH_REQUEST,
  FOOTBALL_FETCH_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  footballMatches: [],
};

function footballMatchReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FOOTBALL_FETCH_REQUEST:
      return { ...state, isLoading: true };
    case FOOTBALL_FETCH_SUCCESS:
        console.log(payload); 
      return {
        ...state,
        isLoading: false,
        footballMatches: payload,
        isError: false,
      };
    case FOOTBALL_FETCH_FAILURE:
      return { ...state, isError: true };

    default:
      return state;
  }
}

export default footballMatchReducer;
