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
let store;

export const initialiseStore = (preloadedState) => {
	let _store =
		store ??
		createStore(
			reducers,
			localStorageState,
			composeWithDevTools(applyMiddleware(...middlewares))
		);

	if (preloadedState && store) {
		_store = createStore({ ...store.getState(), ...preloadedState });
		store = undefined;
	}

	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(logger);
		if (module.hot) {
			module.hot.accept('./reducers', () => {
				const nextReducers = require('./reducers').default;
				store.replaceReducer(nextReducers);
			});
		}
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store;
	// Create the store once in the client
	if (!store) store = _store;

	return _store;
};

const makeStore = () => initialiseStore();

export default createWrapper(makeStore);
