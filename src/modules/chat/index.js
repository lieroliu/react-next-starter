import { add } from './action';
import { chatSelector } from './selector';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useChat = () => {
	const dispatch = useDispatch();

	const chat = useSelector(chatSelector);

	const boundAdd = useCallback((count) => {
		dispatch(add(count));
	}, [dispatch, add]);

	return { chat, boundAdd };
};
