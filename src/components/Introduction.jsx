import React from 'react';

import {
	SectionContainer,
	Title,
	Subtitle,
	Paragraph
} from '../constants/style';
import { COLORS } from '../constants/style';

function Introduction() {
	const color = COLORS.blue;

	return (
		<SectionContainer style={{ boxShadow: 'none' }}>
			<Title>💁🏻‍♀️ I am the Customer!</Title>
			<Subtitle style={{ color: `${color}` }}>and I LOVE it</Subtitle>
			<Paragraph>
				I find it absolutely important to keep tracking my monthly cycle by
				documenting the dates, symptoms, and other changes throughout the months
				for several reasons. There are many period tracking apps and I've used
				Clue for more than 2 years now.
			</Paragraph>
			<Paragraph>
				Ever since I installed the application, I have thought the{' '}
				<span style={{ color: `${color}` }}>UI</span> is intuitive and simple to
				use and supported their{' '}
				<span style={{ color: `${color}` }}>mission and values:</span> to create
				and distribute accessible, scientific, and actionable health information
				for women and people with cycles.
			</Paragraph>
			<Paragraph>
				A few months ago, I started to subscribe Clue Plus. As a front-end
				developer, the more I knew about app development the more I realized how
				important it is to support an inclusive, ethical, sustainable app. Based
				on this experience and thought,{' '}
				<span style={{ color: `${color}` }}>
					I decided to make a small poll and user interview
				</span>{' '}
				to examine any potential obstacle to Clue's premium subscription.
			</Paragraph>
		</SectionContainer>
	);
}

export default Introduction;
