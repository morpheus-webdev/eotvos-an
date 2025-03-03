import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Animals from './components/Animals';
import NewAnimal from './components/NewAnimal';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Animals />} />
				<Route path='/new-animal' element={<NewAnimal />} />
			</Routes>
		</div>
	);
}

export default App;
