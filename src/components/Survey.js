import React from 'react';
import styled from 'styled-components';

import {
	SectionContainer,
	Title,
	Subtitle,
	Paragraph
} from '../constants/style';
import { COLORS } from '../constants/style';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from '../providers/AnimatedProgressProvider';

function Survey() {
	return (
		<SectionContainer>
			<Title>✅ A Mini Survey!</Title>
			<Subtitle style={{ color: `${COLORS.green}` }}>
				I made a poll on Twitter
			</Subtitle>
			<Paragraph>
				Most of my fellow Twitter addicts are{' '}
				<span style={{ color: `${COLORS.green}` }}> Korean 🇰🇷 </span> who are
				experiencing{' '}
				<span style={{ color: `${COLORS.green}` }}>monthly menstruation</span>{' '}
				🩸
			</Paragraph>
			<ProgressbarContainer>
				<AnimatedProgressProvider
					valueStart={0}
					valueEnd={28}
					duration={1.4}
					easingFunction={easeQuadInOut}
				>
					{(value) => {
						const roundedValue = Math.round(value);
						return (
							<CircularProgressbar
								value={value}
								text={`${roundedValue}%`}
								styles={buildStyles({ pathTransition: 'none' })}
								strokeWidth={8}
								styles={buildStyles({
									pathColor: `${COLORS.green}`,
									trailColor: `${COLORS.greyBackground}`,
									textColor: `${COLORS.green}`
								})}
							/>
						);
					}}
				</AnimatedProgressProvider>
			</ProgressbarContainer>

			<Subtitle style={{ color: `${COLORS.green}` }}>
				Among 250 votes, 28% of them know the Clue and are using it
			</Subtitle>
			<ProgressbarContainer>
				<AnimatedProgressProvider
					valueStart={0}
					valueEnd={39}
					duration={1.4}
					easingFunction={easeQuadInOut}
				>
					{(value) => {
						const roundedValue = Math.round(value);
						return (
							<CircularProgressbar
								value={value}
								text={`${roundedValue}%`}
								styles={buildStyles({ pathTransition: 'none' })}
								strokeWidth={8}
								styles={buildStyles({
									pathColor: `${COLORS.lightGrey}`,
									trailColor: `${COLORS.greyBackground}`,
									textColor: `${COLORS.lightGrey}`
								})}
							/>
						);
					}}
				</AnimatedProgressProvider>
			</ProgressbarContainer>

			<Subtitle style={{ color: `${COLORS.lightGrey}` }}>
				39% of them said they do not know the app
			</Subtitle>
			<ProgressbarContainer>
				<AnimatedProgressProvider
					valueStart={0}
					valueEnd={28}
					duration={1.4}
					easingFunction={easeQuadInOut}
				>
					{(value) => {
						const roundedValue = Math.round(value);
						return (
							<CircularProgressbar
								value={value}
								text={`${roundedValue}%`}
								styles={buildStyles({ pathTransition: 'none' })}
								strokeWidth={8}
								styles={buildStyles({
									pathColor: `${COLORS.lightGrey}`,
									trailColor: `${COLORS.greyBackground}`,
									textColor: `${COLORS.lightGrey}`
								})}
							/>
						);
					}}
				</AnimatedProgressProvider>
			</ProgressbarContainer>

			<Subtitle style={{ color: `${COLORS.lightGrey}` }}>
				28% of them said they know the app but do not use it
			</Subtitle>
		</SectionContainer>
	);
}

export default Survey;

const ProgressbarContainer = styled.div`
	width: 40%;
	margin: 4vw 0;
`;
