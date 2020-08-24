export const questions = [
	{ num: 1, question: 'How long have you been using Clue?' },
	{ num: 2, question: 'Would you recommend Clue to your friends?' },
	{
		num: 3,
		question: 'Please rate how satisfied you are with using the app(1-10)'
	},
	{ num: 4, question: 'Do you read articles Clue provides?' },
	{ num: 5, question: 'Do you know about Clue Plus?' },
	{ num: 6, question: 'What is your language setting?' },
	{
		num: 7,
		question:
			'Please rate localization in terms of Korean translation in Clue(1-10)'
	},
	{
		num: 8,
		question:
			'Have you ever thought the use of terms is inappropriate when using the Clue?'
	},
	{
		num: 9,
		question:
			'Most of the articles are in English now. If they are provided in Korean, would you like to read them?'
	},
	{
		num: 10,
		question: 'Do you think about the current price of Clue Plus is appropriate?'
	}
];

export const answers = {
	// 1.'How long have you been using Clue?'
	// answer: month(number)
	1: [
		{ answer: 24, extra: 'extra message' },
		{ answer: 24 },
		{ answer: 30 },
		{ answer: 10 },
		{ answer: 9 },
		{ answer: 12 }
	],
	// 2. 'Would you recommend Clue to your friends?'
	// answer: yes/no(boolean)
	2: [
		{ answer: true },
		{ answer: true },
		{ answer: true },
		{ answer: true },
		{ answer: true },
		{
			answer: false,
			extra: `I don't think the app is convenient enough to recommend`
		}
	],
	// 3. 'Please rate how satisfied you are with using the app(1-10)'
	// answer: (number)
	3: [
		{
			answer: 8,
			extra:
				'It would be great if there are more menstrual pain related options'
		},
		{ answer: 9 },
		{ answer: 9 },
		{
			answer: 10,
			extra:
				'I find the app very intuitive and convenient to use and its features are the absolute necessary ones'
		},
		{ answer: 9 },
		{
			answer: 7,
			extra:
				'Clue’s prediction on period and pms prediction is impressive. I think, at least in Korea, there is no other app like Clue'
		}
	],
	// 4. 'Do you read articles Clue provides?'
	// answer: (boolean)
	4: [
		{ answer: false },
		{ answer: true, extra: 'I think they are very helpful' },
		{ answer: false },
		{ answer: false },
		{
			answer: true,
			extra: 'I read them often. I find them very informational and useful'
		},
		{
			answer: false,
			extra: `I didn’t know there are articles.`
		}
	],
	// 5. 'Do you know about Clue Plus?'
	// answer: (boolean)
	5: [
		{ answer: true },
		{ answer: true },
		{ answer: false },
		{
			answer: false,
			extra:
				'I know Clue Plus from the popup messages but I’m not sure what other benefits are.'
		},
		{
			answer: false,
			extra: 'I am aware of Clue Plus but do not know what they cover.'
		},
		{ answer: false }
	],
	// 6. 'What is your in-app language setting?'
	// answer: (string)
	6: [
		{ answer: 'KOR' },
		{ answer: 'KOR' },
		{ answer: 'ENG' },
		{ answer: 'KOR' },
		{ answer: 'ENG' },
		{ answer: 'ENG' }
	],
	// 7. 'Please rate localization in terms of Korean translation in Clue(1-10)'
	// answer: (number)
	7: [
		{ answer: 8 },
		{ answer: 8 },
		{ answer: 9 },
		{ answer: 6 },
		{ answer: 9 }
	],
	// 8. 'Have you ever thought the use of terms is inappropriate when using Clue?'
	// answer: (boolean)
	8: [
		{
			answer: false,
			extra: `When I had used another app called ‘Maya’, I sometimes felt uncomfortable because the terms are too heteronormative.`
		},
		{ answer: false },
		{ answer: false },
		{ answer: false },
		{
			answer: false,
			extra: `I’ve always felt the Clue really cares about inclusivity when I saw its posts on instagram`
		},
		{ answer: false }
	],
	// 9. 'Most of the articles are in English now. If they are provided in Korean, would you like to read them?'
	// answer: (boolean)
	9: [
		{ answer: true },
		{ answer: true },
		{ answer: false },
		{
			answer: true,
			extra: `I didn’t know about the articles but I am willing to read more related research results.`
		},
		{ answer: true },
		{ answer: true }
	],
	// 10. 'Do you think about the current price of Clue Plus is appropriate?'
	// answer: (boolean)
	10: [
		{ answer: true },
		{ answer: true },
		{ answer: true },
		{ answer: false },
		{ answer: true },
		{ answer: false,
			extra: `I need more information about Clue Plus to decide.` }
	]
};
