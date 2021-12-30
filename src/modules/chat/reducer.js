/** @format */

import { handleActions } from 'redux-actions';
import { initialState } from './state.js';
import types from './types';
import { HYDRATE } from 'next-redux-wrapper'

export default handleActions(
	{
		[HYDRATE]: (state, action) => ({
			...state,
			...action.payload.chat
		}),
		[`${types.ADD}`]: (state, action) => ({
			...state,
			count: state.count + action.payload.count,
		}),
	},
	initialState
);
