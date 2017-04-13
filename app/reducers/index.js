import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import message from './message';

const rootReducer = combineReducers({
	messages:(state={}) => state,
	users:(state={}) => state,
	routing: routerReducer 
});

export default rootReducer;
