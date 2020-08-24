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

function App() {
	return (
		<div className='App'>
			<Header />
			<Introduction></Introduction>
			<Survey></Survey>
		</div>
	);
}

export default App;
