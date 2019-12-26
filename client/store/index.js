import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from './home/index';

const reducer = combineReducers({
  home: homeReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;