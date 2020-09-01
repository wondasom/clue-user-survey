import React from 'react';

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

function Experience() {
	return (
		<>
			<Result>
				{/* general saisfaction rating */}
				<Subtitle style={{ color: `${COLORS.blue}` }}>
					are happy to meet Clue!
				</Subtitle>

				<ImgBoxContainer>
					<CircularProgressbarWithChildren
						value={getAverage(answers[3]) * 10}
						strokeWidth={6}
						styles={buildStyles({
							pathColor: `${COLORS.blue}`,
							trailColor: `${COLORS.greyBackground}`,
							textColor: `${COLORS.blue}`
						})}
					>
						<Subtitle style={{ color: `${COLORS.blue}` }}>
							{getAverage(answers[3])} / 10
						</Subtitle>
					</CircularProgressbarWithChildren>
				</ImgBoxContainer>
				<Paragraph>
					The average app rating is{' '}
					<StyledSpan>{getAverage(answers[3])} </StyledSpan>
					out of 10
				</Paragraph>
			</Result>
			<Result>
				{/* recommendation */}
				<Subtitle style={{ color: `${COLORS.blue}` }}>
					are willing to recommend Clue to others
				</Subtitle>

				<PeopleContainer>
					{answers[2].map((item) => (
						<BsFillPersonFill
							style={{
								color: item.answer ? `${COLORS.blue}` : `${COLORS.lightGrey}`,
								fontSize: '1.5rem'
							}}
						></BsFillPersonFill>
					))}
				</PeopleContainer>
				<Paragraph>
					<StyledSpan>{getYes(answers[2])} </StyledSpan>
					of {answers[2].length} people said <StyledSpan>YES </StyledSpan>
				</Paragraph>
			</Result>
			<Result>
				{/* in-app translation */}
				<Subtitle style={{ color: `${COLORS.blue}` }}>
					are satisfied with Clue's in-app Korean translation
				</Subtitle>

				<ImgBoxContainer>
					<CircularProgressbarWithChildren
						value={getAverage(answers[7]) * 10}
						strokeWidth={6}
						styles={buildStyles({
							pathColor: `${COLORS.blue}`,
							trailColor: `${COLORS.greyBackground}`,
							textColor: `${COLORS.blue}`
						})}
					>
						<Subtitle style={{ color: `${COLORS.blue}` }}>
							{getAverage(answers[7])} / 10
						</Subtitle>
					</CircularProgressbarWithChildren>
				</ImgBoxContainer>
				<Paragraph>
					The average rating is{' '}
					<StyledSpan>{getAverage(answers[7])} </StyledSpan>
					out of 10
				</Paragraph>
			</Result>
			<Result>
				{/* genter inclusivity */}
				<Subtitle style={{ color: `${COLORS.blue}` }}>
					think Clue is gender-inclusive
				</Subtitle>

				<PeopleContainer>
					{answers[8].map((item) => (
						<BsFillPersonFill
							style={{
								color: item.answer ? `${COLORS.lightGrey}` : `${COLORS.blue}`,
								fontSize: '1.5rem'
							}}
						></BsFillPersonFill>
					))}
				</PeopleContainer>
				<Paragraph>
					<StyledSpan>All </StyledSpan>
					of the participants <StyledSpan>agree </StyledSpan>
					that Clue is using gender-inclusive language
				</Paragraph>
			</Result>
		</>
	);
}

export default Experience;
