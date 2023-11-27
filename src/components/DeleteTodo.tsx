import React from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { Button } from '@mui/material';
import { deleteTodo } from '../features/todo/todoSlice';

interface Props {
	id: string;
}

const DeleteTodo = ({ id, ...props }: Props) => {
	const dispatch = useAppDispatch();
	return (
		<Button {...props} id={id} variant='outlined' color='error' onClick={() => dispatch(deleteTodo(id))}>
			Delete
		</Button>
	);
};

export default DeleteTodo;
