import Addtodo from './components/Addtodo';
import './App.css';
import Todos from './components/Todos';

function App() {
	return (
		<>
			<h1>{'To-Do List'.toUpperCase()}</h1>
			<Addtodo />
			<Todos />
		</>
	);
}

export default App;
