import React from 'react';
import styled from 'styled-components';

import {
	SectionContainer,
	Title,
	Subtitle,
	Paragraph
} from '../constants/style';
import { COLORS } from '../constants/style';

const color = COLORS.red;
function Clue() {
	return (
		<SectionContainer style={{ boxShadow: 'none' }}>
			<Title>🩸What is Clue?</Title>
			<Subtitle style={{ color: `${color}` }}>
				A Period Tracker App That Teaches You about Your Body
			</Subtitle>
			<Paragraph>
				Clue is on <span style={{ color: `${color}` }}>a mission</span> a
				mission to help you understand your body, periods, ovulation, and so
				much more.
			</Paragraph>
			<a
				href='https://helloclue.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				{' '}
				<Button>Learn More</Button>
			</a>
		</SectionContainer>
	);
}

export default Clue;

const Button = styled.button`
	cursor: pointer;
	padding: 1rem 2rem;
	border-radius: 2rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	font-size: 1rem;
	text-align: center;
	letter-spacing: 0.5px;
	box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.08);
	background-color: ${color};
	color: ${COLORS.white};
	outline: none;
	border: none;
	margin: 1.3em 0 0 0;
	@media (max-width: 500px) {
		font-size: 1rem;
		padding: 0.9rem 1.9rem;
		margin: 1.2em 0 0 0;
	}
	&:hover {
		opacity: 0.8;
		transition: all 0.2s ease 0s;
	}
`;
