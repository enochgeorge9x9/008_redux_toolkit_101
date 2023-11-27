import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppSelector } from '../hooks/hooks';
import DeleteTodo from './DeleteTodo';
import UpdateTodo from './UpdateTodo';

function createData(name: string, action: React.ReactNode) {
	return { name, action };
}

const Todos = () => {
	const todos = useAppSelector((state) => state.todos.todos);

	// const handleDelete = (e) => {
	// 	const id = e.target.id;
	// 	dispatch(deleteTodo(id));
	// };

	const rows = todos.map((todo) => {
		return createData(
			todo.text,
			<div className='flex gap-2 justify-end'>
				<UpdateTodo id={todo.id} text={todo.text} />
				<DeleteTodo id={todo.id} />
			</div>
		);
	});

	return (
		<TableContainer component={Paper}>
			<Table sx={{ width: 450 }} aria-label='todo table'>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component='th' scope='row'>
								{row.name}
							</TableCell>
							<TableCell component='th' scope='row' align='right'>
								{row.action}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Todos;
