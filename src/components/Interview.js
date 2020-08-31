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

import {
	CircularProgressbar,
	CircularProgressbarWithChildren,
	buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from '../providers/AnimatedProgressProvider';

import Setting from './InterviewSections/Setting';
import Experience from './InterviewSections/Experience';

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
	console.log('here');
	console.log(answers[2]);
	console.log(answers[2][0].answer);
	const ex = [{ answer: true }];
	console.log(getYes(answers[2]));
	console.log(ex);
	console.log(getYes(ex));

	return (
		<Background>
			<SectionContainer>
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
						<Title>The Users...</Title>
						<Experience></Experience>
					</Section>
				</Sections>
			</SectionContainer>
		</Background>
	);
}

export default Interview;

const Sections = styled.div`
	margin-top: 5vw;
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
`;

export const ImgBoxContainer = styled.div`
	width: 45%;
	margin: 4vw 0;
`;
