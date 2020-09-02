import React from 'react';

import { getYes, PeopleContainer, Result, StyledSpan } from '../Interview';

import { Subtitle, Paragraph } from '../../constants/style';
import { COLORS } from '../../constants/style';
import { answers } from '../../constants/surveyResults';

import { BsFillPersonFill } from 'react-icons/bs';

import 'react-circular-progressbar/dist/styles.css';

function CluePlus() {
	return (
		<>
			<Result>
				<Subtitle style={{ color: `${COLORS.blue}` }}>
					The Users lack of information about Clue Plus
				</Subtitle>
				<PeopleContainer>
					{answers[5].map((item) => (
						<BsFillPersonFill
							style={{
								color: item.answer ? `${COLORS.blue}` : `${COLORS.lightGrey}`,
								fontSize: '1.5rem'
							}}
						></BsFillPersonFill>
					))}
				</PeopleContainer>
				<Paragraph>
					<StyledSpan>Only {getYes(answers[5])} people</StyledSpan> said they
					know what Clue Plus is
				</Paragraph>
				<Paragraph>
					<StyledSpan>The rest said they need more information</StyledSpan>
				</Paragraph>
			</Result>
			<Result>
				<Subtitle style={{ color: `${COLORS.blue}` }}>
					The users think the current price of Clue Plus is appropriate
				</Subtitle>
				<PeopleContainer>
					{answers[10].map((item) => (
						<BsFillPersonFill
							style={{
								color: item.answer ? `${COLORS.blue}` : `${COLORS.lightGrey}`,
								fontSize: '1.5rem'
							}}
						></BsFillPersonFill>
					))}
				</PeopleContainer>
				<Paragraph>
					<StyledSpan>{getYes(answers[10])} </StyledSpan>of {answers[10].length} people think it is appropriate
				</Paragraph>
			</Result>
		</>
	);
}

export default CluePlus;
