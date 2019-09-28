import { PLUS, MINUS, REQUEST_IP, RECEIVE_IP, FAILURE_IP } from "./actionCreator";

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

const initialIpState = {
  myIp: null,
}

export const ipReducer = (state = initialIpState, action) => {
  switch (action.type) {
    case REQUEST_IP:
      return initialIpState
    case RECEIVE_IP:
      return {myIp: action.res.ip}
    case FAILURE_IP:
      return {myIp: action.error.message}
    default:
      return state
  }
}
