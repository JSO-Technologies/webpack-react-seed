import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';

const appReducers = combineReducers({...reducers});
const store = createStore(appReducers);

export default store;