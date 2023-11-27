import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { updateTodo } from '../features/todo/todoSlice';
import { Button, Box, TextField, Modal } from '@mui/material';

interface UpdateTodoProp {
	id: string;
	text: string;
}

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const UpdateTodo = ({ id, text, ...props }: UpdateTodoProp) => {
	const dispatch = useAppDispatch();
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState({ id: id, text: text });

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleUpdateTodo = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(updateTodo(input));
		setOpen(false);
	};

	return (
		<>
			<Button onClick={handleOpen} color='secondary' variant='outlined' {...props}>
				Update
			</Button>
			<Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<div className='text-center font-bold text-2xl text-blue-800'>UPDATE LIST</div>
					<form onSubmit={handleUpdateTodo} className='flex gap-2 my-4'>
						<TextField id='outlined-basic' label='Like to rethink...' value={input.text} onChange={(e) => setInput({ ...input, text: e.target.value })} variant='outlined' sx={{ width: '100%' }} />
						<Button type='submit' variant='contained'>
							UPDATE
						</Button>
					</form>
				</Box>
			</Modal>
		</>
	);
};

export default UpdateTodo;
