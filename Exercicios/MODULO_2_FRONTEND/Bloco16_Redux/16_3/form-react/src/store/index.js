import { createStore, combineReducers } from 'redux';
import cadastroReducer from '../reducers';

const rootReducer = combineReducers({ cadastroReducer });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
