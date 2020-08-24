import React from 'react';

import {
	SectionContainer,
	Title,
	Subtitle,
	Paragraph
} from '../constants/style';
import { COLORS } from '../constants/style';

function Introduction() {
	return (
		<SectionContainer>
			<Title>💁🏻‍♀️ I am the User!</Title>
			{/* <Subtitle style={{color:`${COLORS.red}`}}>10 questions & 7 interviewees</Subtitle> */}

			<Paragraph>
				Tracking my period, or keeping tabs on my monthly cycle by documenting
				the dates, symptoms, and other changes throughout the month can be
				helpful for a variety of reasons.
			</Paragraph>
			<Paragraph>
				There are many period tracking apps and I've used{' '}
				<span style={{ color: `${COLORS.red}` }}>the Clue</span> for more than 2
				years. First of all, its{' '}
				<span style={{ color: `${COLORS.red}` }}>UI</span> is very intuitive and
				simple to use. Second, I support the Clue's{' '}
				<span style={{ color: `${COLORS.red}` }}>mission and values</span> .
			</Paragraph>
			<Paragraph>
				In the process of brainstorming ideas for my React toy projects, I decided to
				take a look at an app that I use regularly and get the most
				health-related help from.
			</Paragraph>
		</SectionContainer>
	);
}

export default Introduction;
