import { combineReducers } from 'redux';
import baseReducer from './base';
import userReducer from './users';
import toasterReducer from './notifications';


const rootReducer = combineReducers({
  baseReducer,
  toasterReducer,
  userReducer
});

export default rootReducer;
