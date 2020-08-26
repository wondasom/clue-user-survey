import React from 'react';
import './App.css';

import {
	SectionContainer,
	Divider,
	Title,
	Subtitle,
	Paragraph
} from './constants/style';

import Header from './components/Header';
import Introduction from './components/Introduction';
import Survey from './components/Survey';
import Interview from './components/Interview';

function App() {
	return (
		<div className='App'>
			<Header />
			<Introduction></Introduction>
			<Survey></Survey>
			<Interview></Interview>
		</div>
	);
}

export default App;
