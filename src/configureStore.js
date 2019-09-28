import { createStore, combineReducers } from "redux"
import { counterReducer } from "./reducer"

export const configureStore = () => {
  const reducer = combineReducers({
    count: counterReducer
  });
  const store = createStore(reducer);

  return store;
};
