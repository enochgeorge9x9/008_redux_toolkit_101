import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { addTodo } from '../features/todo/todoSlice';
import { TextField, Button } from '@mui/material';

const Addtodo = () => {
	const [input, setInput] = useState<string>('');
	const dispatch = useAppDispatch();

	const addTodoHandler = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(input);
		dispatch(addTodo(input));
		setInput('');
	};

	return (
		<form onSubmit={addTodoHandler} className='flex gap-2 my-4'>
			<TextField
				id='outlined-basic'
				label='Whats on your mind...'
				value={input}
				onChange={(e) => setInput(e.target.value)}
				variant='outlined'
				sx={{
					width: '100%',
					label: { color: 'gray' },
					root: { border: '2px solid blue' },
				}}
			/>
			<Button type='submit' variant='contained'>
				SUBMIT
			</Button>
		</form>
	);
};

export default Addtodo;
