// day la noi gop cac reducer lai voi nhau - de sau nay dua het chung vao trong store
import { combineReducers } from 'redux';
import { counterReducer } from './counter-reducer';

const rootReducer = combineReducers({
  counter: counterReducer
});
export default rootReducer;