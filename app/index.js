import React, { Component } from 'react';
import { render } from 'react-dom';

//components
import Messages from './components/Messages';
import Main from './components/Main';
import Users from './components/Users';
import Inputs from './components/Inputs';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Main}>
				<IndexRoute component={Messages}></IndexRoute>
			</Route>
		</Router>
	</Provider>
	)

render(router, document.getElementById('root'));

