import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
// import the root reducer
import rootReducer from './reducers/index';

import users from './data/users';
import messages from './data/messages';

// create an object for the default data
const defaultState = {
  users,
  messages
};

// for redux dev tools
const enhancers = compose(
	window.devToolsExtension? window.devToolsExtension(): f=>f
	);

// create store
const store = createStore(rootReducer, defaultState, enhancers);
window.store = store;
// save store history
export const history = syncHistoryWithStore(browserHistory, store);

// allows hot refresh for reducers as well
if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
