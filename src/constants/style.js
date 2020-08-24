import styled from 'styled-components';

// 🎨 color palette of Clue
export const COLORS = {
	red: '#e63e33',
	pink: '#f3b8b8',
	blue: '#144181',
	orange: '#eb6133',
	turquoise: '#46916f',
	aqua: '#36829b',
	green: '#8ba52c',
	white: '#fefefe',
	grey: '#333333',
	lightGrey: '#727272',
	yellow: '#f8c433'
};

// 📦 Container
export const SectionContainer = styled.div`
	width: 90%;
	background-color: inherit;
	margin: 0px auto;
	padding: 3rem 0 0 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

// ✏️ Divider
export const Divider = styled.div`
	margin: 0 auto;
	width: 100%;
	height: 1px;
	border-bottom: 1.5px solid ${COLORS.red};
`;

// 💅🏼 Text Styles
export const Title = styled.h1`
	font-size: calc(30px + (36 - 30) * ((100vw - 300px) / (1600 - 300)));
	padding-bottom: 0.625rem;
	font-family: myriad-pro, sans-serif;
	font-weight: 700;
	color: ${COLORS.grey};
	text-align: center;
`;

export const Subtitle = styled.h2`
	font-size: calc(15.6px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
	font-family: 'Montserrat', sans-serif;
	color: ${COLORS.red};
	font-weight: 500;
	text-align: center;
	margin-bottom: 0.6rem;
`;

export const Paragraph = styled.div`
	font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
	font-family: 'Montserrat', sans-serif;
	font-weight: 300;
	line-height: 1.8;
	color: ${COLORS.lightGrey};
	text-align: center;
`;
