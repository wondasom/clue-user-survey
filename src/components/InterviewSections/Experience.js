import React from 'react';
import styled from 'styled-components';

import { getAverage, getYes, ImgBoxContainer } from '../Interview';

import { Subtitle, Paragraph } from '../../constants/style';
import { COLORS } from '../../constants/style';
import { answers } from '../../constants/surveyResults';

import { BsPeopleCircle } from 'react-icons/bs';

import {
	CircularProgressbarWithChildren,
	buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Experience() {
	return (
		<>
			{/* general saisfaction rating */}
			<Subtitle style={{ color: `${COLORS.blue}` }}>
				are happy to meet Clue!
			</Subtitle>
			<Paragraph>
				The average rating is <StyledSpan>{getAverage(answers[3])} </StyledSpan>
				out of 10
			</Paragraph>

			{/* recommendation */}
			<Subtitle style={{ color: `${COLORS.blue}` }}>
				are willing to recommend Clue to others
			</Subtitle>
			<Paragraph>
				<StyledSpan>{getYes(answers[2])} </StyledSpan>
				of {answers[2].length} people said <StyledSpan>YES </StyledSpan>
			</Paragraph>
			{/* <ImgBoxContainer>
				<BsPeopleCircle
					style={{ color: `${COLORS.blue}`, fontSize: '1.5rem' }}
				></BsPeopleCircle>
			</ImgBoxContainer> */}

			{/* in-app translation */}
			<Subtitle style={{ color: `${COLORS.blue}` }}>
				are satisfied with Clue's in-app Korean translation
			</Subtitle>
			<Paragraph>
				The average rating is <StyledSpan>{getAverage(answers[7])} </StyledSpan>
				out of 10
			</Paragraph>
			{/* genter inclusivity */}
			<Subtitle style={{ color: `${COLORS.blue}` }}>
				think Clue is gender-inclusive
			</Subtitle>
			<Paragraph>
				<StyledSpan>All </StyledSpan>
				of the participants <StyledSpan>agree </StyledSpan>
				that Clue is using gender-inclusive language
			</Paragraph>
		</>
	);
}

export default Experience;

const StyledSpan = styled.span`
	color: ${COLORS.blue};
	font-weight: 500;
`;
