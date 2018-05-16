import {createStore, combineReducers, applyMiddleware} from 'redux';
import contractReducer from './reducers/accountReducer.js'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import account from './middleware/account.js'


const store = createStore(
  combineReducers({
    contract: contractReducer
  }), applyMiddleware(logger, thunk)
);


export default store
