import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import NewTaskComp from './components/TaskManager/NewTaskComp';
import TaskManager from './components/TaskManager/TaskManager';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<NewTaskComp />} />
				<Route path='/tasks' element={<TaskManager />} />
			</Routes>
		</div>
	);
}

export default App;
