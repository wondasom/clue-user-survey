import React from 'react';

import { getAverage, ImgBoxContainer } from '../Interview';

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
			<Subtitle style={{ color: `${COLORS.blue}` }}>
				have been using Clue for {getAverage(answers[1])} months
			</Subtitle>
			<ImgBoxContainer>
				<CircularProgressbarWithChildren
					value={100}
					strokeWidth={6}
					styles={buildStyles({
						pathColor: `${COLORS.blue}`,
						trailColor: `${COLORS.greyBackground}`,
						textColor: `${COLORS.blue}`
					})}
				>
					<Subtitle style={{ color: `${COLORS.blue}` }}>🗓</Subtitle>
					<Subtitle style={{ color: `${COLORS.blue}` }}>
						{getAverage(answers[1])} months
					</Subtitle>
				</CircularProgressbarWithChildren>
			</ImgBoxContainer>
			<Subtitle style={{ color: `${COLORS.blue}` }}>
				use Clue in Korean and English
			</Subtitle>
			<ImgBoxContainer>
				<CircularProgressbarWithChildren
					value={100}
					strokeWidth={6}
					styles={buildStyles({
						pathColor: `${COLORS.blue}`,
						trailColor: `${COLORS.greyBackground}`,
						textColor: `${COLORS.blue}`
					})}
				>
					<Subtitle style={{ color: `${COLORS.blue}` }}>가 나 다</Subtitle>
					<Subtitle style={{ color: `${COLORS.blue}` }}>A B C</Subtitle>
				</CircularProgressbarWithChildren>
			</ImgBoxContainer>
		</>
	);
}

export default Setting;
