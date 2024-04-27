import { LOGGED_PAYLOAD } from "./actionType";

export const demoAction = () => {
  return {
    type: LOGGED_PAYLOAD,
    payload: 'Some data',
  };
};
