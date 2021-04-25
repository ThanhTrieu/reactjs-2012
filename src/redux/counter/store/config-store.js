// day la noi tao ra store, chua toan bo state cua ung dung
import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);
export default store;