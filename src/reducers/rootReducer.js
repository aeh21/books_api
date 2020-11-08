import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import rootReducer from './reducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  rootReducer,
})

export default createRootReducer;
