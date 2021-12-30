import { createAction } from 'redux-actions';
import types from './types.js';
import { initialState } from './state';


export const add = createAction(types.ADD, (count) => ({
	count
}));

export const await_function = createAction(
	types.ADD,
	() => async (dispatch, getState) => {
		// await delay(5000);
		try {
			dispatch(add(100));
		} catch (err) {
		}
	}
);

const delay = (interval) => {
    return new Promise((resolve) => {
        setTimeout(resolve, interval);
    });
};