import React from 'react';
import styled from 'styled-components';

import {
	SectionContainer,
	Title,
	Subtitle,
	Paragraph
} from '../constants/style';
import { COLORS } from '../constants/style';

const color = COLORS.red;
function Clue() {
	return (
		<SectionContainer style={{ boxShadow: 'none' }}>
			<Title>🩸What is Clue?</Title>
			<Subtitle style={{ color: `${color}` }}>
				Track your period and understand your body better
			</Subtitle>
			<Paragraph>
				Clue is a period tracking application which is on a mission{' '}
				<span style={{ color: `${color}` }}>
					to help you understand your body, periods, ovulation
				</span>
				, and so much more. All the predictions are based on the most up-to-date
				science. Clue work together with scientists to make sure continuous
				improvements.
			</Paragraph>
			<Subtitle style={{ color: `${color}` }}>
				Your Data is in Good Hands
			</Subtitle>
			<Paragraph>
				<span style={{ color: `${color}` }}>
					Clue doesn't sell data. Period.
				</span>{' '}
				What about other apps? Well, as you can imagine, many companies choose
				to sell out user data to third parties, such as advertisers or data
				brokers, to make money. Unless you take extra care to read Terms of
				Service and Privacy Policies, which are usually written in crazy small
				font sizes, it is unlikely that you as a user know this.{' '}
			</Paragraph>
			<Subtitle style={{ color: `${color}` }}>
				Be a Customer, not just a User
			</Subtitle>
			<Paragraph>
				If you stay as a free user for an application, who are paying? In most
				cases of free mobile apps, advertisers are the paying customers. Clue
				does not let this happen. One of their business models is to ask users
				to become customers - Clue Plus. It is simple. Clue app is a great
				product and if you are willing and able to afford the service,{' '}
				<span style={{ color: `${color}` }}>you pay the price.</span>
			</Paragraph>
			<Subtitle style={{ color: `${color}` }}>
				When You Subscribe to Clue Plus
			</Subtitle>
			<Paragraph>
				You contribute to improving the application's feature, supporting the
				team to make bigger and better impacts, and advocating menstrual and
				reproductive research.
			</Paragraph>
			<a
				href='https://helloclue.com/articles/about-clue/making-money-at-clue-our-principles-and-promises'
				target='_blank'
				rel='noopener noreferrer'
			>
				{' '}
				<Button>Learn More</Button>
			</a>
		</SectionContainer>
	);
}

export default Clue;

const Button = styled.button`
	cursor: pointer;
	padding: 1rem 2rem;
	border-radius: 2rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	font-size: 1rem;
	text-align: center;
	letter-spacing: 0.5px;
	box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.08);
	background-color: ${color};
	color: ${COLORS.white};
	outline: none;
	border: none;
	margin: 1.3em 0 0 0;
	@media (max-width: 500px) {
		font-size: 1rem;
		padding: 0.9rem 1.9rem;
		margin: 1.2em 0 0 0;
	}
	&:hover {
		opacity: 0.8;
		transition: all 0.2s ease 0s;
	}
`;
