import React from 'react';
import './App.css';

import Header from './components/Header';
import Introduction from './components/Introduction';
import Survey from './components/Survey';
import Interview from './components/Interview';
import Clue from "./components/clue"

function App() {
	return (
		<div className='App'>
			<Header />
			<Clue></Clue>
			<Introduction></Introduction>
			<Survey></Survey>
			<Interview></Interview>
		</div>
	);
}

export default App;
