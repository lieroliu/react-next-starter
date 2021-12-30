/** @format */

import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import thunkFSAMiddleware from 'redux-thunk-fsa';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import { createWrapper } from 'next-redux-wrapper';

const middlewares = [thunkFSAMiddleware, promiseMiddleware];
const localStorageState = {};

if (process.env.NODE_ENV !== 'production') {
	middlewares.push(logger);
	if (module.hot) {
		module.hot.accept('./reducers', () => {
			const nextReducers = require('./reducers').default;
			store.replaceReducer(nextReducers);
		});
	}
}

const makeStore = () =>
	createStore(
		reducers,
		localStorageState,
		composeWithDevTools(applyMiddleware(...middlewares))
	);

export default createWrapper(makeStore);
