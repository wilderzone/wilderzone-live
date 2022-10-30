const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	pages: {
		index: {
			entry: 'src/main.ts',
			template: 'public/index.html',
			title: 'Home'
		},
		login: {
			entry: 'src/pages/login.ts',
			template: 'public/index.html',
			title: 'Login'
		},
		register: {
			entry: 'src/pages/register.ts',
			template: 'public/index.html',
			title: 'Register'
		},
		online: {
			entry: 'src/pages/online.ts',
			template: 'public/index.html',
			title: "Who's playing Tribes: Ascend?"
		},
		'how-to-play': {
			entry: 'src/pages/how-to-play.ts',
			template: 'public/index.html',
			title: 'How to play Tribes: Ascend'
		}
	}
});
