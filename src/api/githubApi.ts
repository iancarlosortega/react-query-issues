import axios from 'axios';

export const githubApi = axios.create({
	baseURL: 'https://api.github.com/repos/facebook/react',
	headers: {
		Authorization:
			'Bearer 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',
	},
});
