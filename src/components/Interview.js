import React from 'react';
import styled from 'styled-components';

import { Background } from './Header';
import {
	SectionContainer,
	Title,
	Subtitle,
	Paragraph
} from '../constants/style';
import { COLORS } from '../constants/style';
import { answers } from '../constants/surveyResults';

import Setting from './InterviewSections/Setting';
import Experience from './InterviewSections/Experience';
import Article from './InterviewSections/Article';
import CluePlus from './InterviewSections/CluePlus';

export function getAverage(arr) {
	let num = 0;
	for (let i = 0; i < arr.length; i++) {
		num = num + arr[i].answer;
	}
	const average = parseInt(num / arr.length);
	return average;
}

export function getYes(arr) {
	let num = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].answer === true) {
			num++;
		}
	}
	const result = num;
	return result;
}

function Interview() {
	return (
		<Background>
			<SectionContainer style={{ boxShadow: 'none' }}>
				<Title>📋 10 Questions and Answers</Title>
				<Subtitle style={{ color: `${COLORS.blue}` }}>
					The interview consists of 10 questions about
				</Subtitle>
				<Paragraph>
					in-app setting, general user experience, contents of Clue and the Clue
					Plus
				</Paragraph>
				<Sections>
					<Section>
						<Title>Interview Participants...</Title>
						<Setting></Setting>
					</Section>
					<Section>
						<Title>The Clue Users...</Title>
						<Experience></Experience>
					</Section>
					<Section>
						<Title>About Clue Articles...</Title>
						<Article></Article>
					</Section>
					<Section>
						<Title>About Clue Plus...</Title>
						<CluePlus></CluePlus>
					</Section>
				</Sections>
			</SectionContainer>
		</Background>
	);
}

export default Interview;

const Sections = styled.div`
	margin-top: 5vw;
	@media (min-width: 500px) {
		margin-top: 4vw;
	}
	@media (min-width: 700px) {
		margin-top: 3vw;
	}
	@media (min-width: 1000px) {
		margin-top: 2vw;
	}
`;

export const Section = styled.div`
	width: 100%;
	background-color: ${COLORS.white};
	box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.08);
	border-radius: 3vw;
	padding: 4vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 5vw;
	@media (min-width: 500px) {
	}
	@media (min-width: 700px) {
	}
	@media (min-width: 1000px) {
		padding: 2vw;
	}
`;

export const ImgBoxContainer = styled.div`
	width: 40%;
	margin: 3vw 0;
	@media (min-width: 500px) {
		width: 36%;
	}
	@media (min-width: 700px) {
		width: 32%;
		margin: 1vw 0;
	}
	@media (min-width: 1000px) {
		width: 28%;
		margin: 0.8vw 0;
	}
`;

export const PeopleContainer = styled.div`
	width: 75%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: space-between;
	margin: 3vw 0;
	@media (min-width: 1000px) {
		width: 60%;
	}
`;

export const Result = styled.div`
	width: 90%;
	padding: 5vw 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-bottom: 2px solid ${COLORS.greyBackground};
	&:last-child {
		border: none;
	}
	@media (min-width: 500px) {
		padding: 4vw 0;
	}
	@media (min-width: 700px) {
		padding: 2vw 0;
	}
	@media (min-width: 1000px) {
		padding: 2vw 0;
	}
`;

export const StyledSpan = styled.span`
	color: ${COLORS.blue};
	font-weight: 500;
`;
