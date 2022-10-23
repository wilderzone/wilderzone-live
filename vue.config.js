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
		}
	}
});
