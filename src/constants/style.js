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
	lightGrey: '#929292',
	yellow: '#f8c433',
	greyBackground: '#f8f4ed'
};

// 📦 Container
export const SectionContainer = styled.div`
	box-sizing: border-box;
	width: 86%;
	background-color: inherit;
	margin: 0px auto;
	padding: 8vw 1vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* border: 1px solid blue; */
	@media (min-width: 500px) {
		width: 70%;
	}
	@media (min-width: 700px) {
		width: 65%;
	}
	@media (min-width: 1000px) {
		width: 50%;
		padding: 4vw 3vw;
		box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.08);
		border-radius: 1.5vw;
		margin-bottom: 5vw;
	}
`;

// ✏️ Divider
export const Divider = styled.div`
	margin: 0 auto;
	width: 100%;
	height: 1px;
	border-bottom: 1.5px solid ${COLORS.red};
	margin-top: 2vw;
`;

// 💅🏼 Text Styles
export const Title = styled.h1`
	font-size: calc(24px + (36 - 30) * ((100vw - 300px) / (1600 - 300)));
	font-family: myriad-pro, sans-serif;
	font-weight: 700;
	color: ${COLORS.grey};
	text-align: center;
	margin-bottom: 2.5vw;
`;

export const Subtitle = styled.h2`
	font-size: calc(15.6px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	text-align: center;
	margin-bottom: 1.5vw;
`;

export const Paragraph = styled.div`
	font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
	font-family: 'Montserrat', sans-serif;
	font-weight: 300;
	line-height: 1.8;
	color: ${COLORS.lightGrey};
	text-align: center;
	/* margin-bottom: 2vw; */
`;
