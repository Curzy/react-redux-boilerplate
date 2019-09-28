import { PLUS, MINUS } from "./actionCreator";

const initialState = 0;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};
