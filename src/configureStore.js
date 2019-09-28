import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { counterReducer, ipReducer } from './reducer'

export const configureStore = () => {
  const reducer = combineReducers({
    count: counterReducer,
    ip: ipReducer,
  })
  const store = createStore(reducer, applyMiddleware(thunkMiddleware))

  return store
}
