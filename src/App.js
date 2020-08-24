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

function App() {
	return (
		<div className='App'>
			<Header />
			{/* <SectionContainer>
				<Title>This is the Title</Title>
				<Subtitle>This is the Subtitle</Subtitle>
				<Paragraph>
					this is a project for display user surbey for the Clue
				</Paragraph>
				<Divider></Divider>
			</SectionContainer> */}
		</div>
	);
}

export default App;
