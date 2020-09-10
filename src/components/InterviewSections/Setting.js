import React from 'react';

import { getAverage, ImgBoxContainer, Result } from '../Interview';

import { Subtitle } from '../../constants/style';
import { COLORS } from '../../constants/style';
import { answers } from '../../constants/surveyResults';

import {
	CircularProgressbarWithChildren,
	buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Setting() {
	return (
		<>
			<Result>
				{' '}
				<Subtitle style={{ color: `${COLORS.red}` }}>
					have been using Clue for {getAverage(answers[1])} months
				</Subtitle>
				<ImgBoxContainer>
					<CircularProgressbarWithChildren
						value={100}
						strokeWidth={2}
						styles={buildStyles({
							pathColor: `${COLORS.pink}`,
							trailColor: `${COLORS.greyBackground}`,
							textColor: `${COLORS.pink}`
						})}
					>
						<Subtitle style={{ color: `${COLORS.pink}` }}>🗓</Subtitle>
						<Subtitle style={{ color: `${COLORS.pink}` }}>
							{getAverage(answers[1])} months
						</Subtitle>
					</CircularProgressbarWithChildren>
				</ImgBoxContainer>
			</Result>
			<Result>
				<Subtitle style={{ color: `${COLORS.red}` }}>
					use Clue in Korean and English
				</Subtitle>
				<ImgBoxContainer>
					<CircularProgressbarWithChildren
						value={100}
						strokeWidth={2}
						styles={buildStyles({
							pathColor: `${COLORS.pink}`,
							trailColor: `${COLORS.greyBackground}`,
							textColor: `${COLORS.pink}`
						})}
					>
						<Subtitle style={{ color: `${COLORS.pink}` }}>가 나 다</Subtitle>
						<Subtitle style={{ color: `${COLORS.pink}` }}>A B C</Subtitle>
					</CircularProgressbarWithChildren>
				</ImgBoxContainer>
			</Result>
		</>
	);
}

export default Setting;
