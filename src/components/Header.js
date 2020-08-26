import React from 'react';
import styled from 'styled-components';

import {
	SectionContainer,
	Divider,
	Title,
	Subtitle,
	Paragraph
} from '../constants/style';
import { COLORS } from '../constants/style';
import Clue from '../img/clue--2.png';

function Header() {
	return (
		<Background style={{ height: '100vw' }}>
			<Logo></Logo>
			<StyledContainer>
				<StyledTitle>Clues for the Clue</StyledTitle>
				<StyledSubtitle>10 questions & 7 interviewees</StyledSubtitle>
				{/* <Paragraph>
					The purpose of this project is to conduct a small survey and display
					the results on the mobile and web browser using React JS.
				</Paragraph> */}
			</StyledContainer>
		</Background>
	);
}

export default Header;

export const Background = styled.div`
	width: 100%;
	background-color: #f8f4ed;
	display: flex;
`;
const StyledContainer = styled.div`
	width: 90%;
	margin: 0px auto;
	padding: 2vw;
	padding-bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* border: 1px solid blue; */
`;

const Logo = styled.div`
	width: 2.4rem;
	height: 2.4rem;
	background-image: url(${Clue});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	align-self: flex-start;
	position: absolute;
	top: 6vw;
	left: 6vw;
`;

const StyledTitle = styled.h1`
	font-size: calc(32px + (36 - 30) * ((100vw - 300px) / (1600 - 300)));
	font-family: myriad-pro, sans-serif;
	font-weight: 700;
	color: ${COLORS.red};
	text-align: center;
	margin-bottom: 0.75rem;
`;

const StyledSubtitle = styled.h2`
	font-size: calc(15.6px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
	font-family: 'Montserrat', sans-serif;
	color: ${COLORS.grey};
	font-weight: 500;
	text-align: center;
	margin-bottom: 1.5vw;
	margin-bottom: 0.5rem;
`;
