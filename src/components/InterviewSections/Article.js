import React from 'react';
import styled from 'styled-components';

import {
	getAverage,
	getYes,
	ImgBoxContainer,
	PeopleContainer,
	Result,
	StyledSpan
} from '../Interview';

import { Subtitle, Paragraph } from '../../constants/style';
import { COLORS } from '../../constants/style';
import { answers } from '../../constants/surveyResults';

import { BsFillPersonFill } from 'react-icons/bs';

import {
	CircularProgressbarWithChildren,
	buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Article() {
	return (
		<>
			<Result>
				<Subtitle style={{ color: `${COLORS.blue}` }}>
					The articles are not consumed much
				</Subtitle>
				<PeopleContainer>
					{answers[4].map((item) => (
						<BsFillPersonFill
							style={{
								color: item.answer ? `${COLORS.blue}` : `${COLORS.lightGrey}`,
								fontSize: '1.5rem'
							}}
						></BsFillPersonFill>
					))}
				</PeopleContainer>
				<Paragraph>
					<StyledSpan>{getYes(answers[4])}</StyledSpan> of {answers[4].length}{' '}
					said they read the articles often and think they are very
					informational and helpful
				</Paragraph>
			</Result>
			<Result>
				<Subtitle style={{ color: `${COLORS.blue}` }}>
					Users want to read them if they are translated
				</Subtitle>
				<PeopleContainer>
					{answers[9].map((item) => (
						<BsFillPersonFill
							style={{
								color: item.answer ? `${COLORS.blue}` : `${COLORS.lightGrey}`,
								fontSize: '1.5rem'
							}}
						></BsFillPersonFill>
					))}
				</PeopleContainer>
				<Paragraph>
					<StyledSpan>{getYes(answers[9])}</StyledSpan> of {answers[9].length}{' '}
					said they are willing to read them in Korean
				</Paragraph>
			</Result>
		</>
	);
}

export default Article;
