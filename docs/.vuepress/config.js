module.exports = {
	title: "sunn4room's blogs",
	description: "Welcome to my blogs",
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		logo: '/assets/img/logo.png',
		sidebar: "auto"
	},
	plugins: [
		"@vuepress/search",
		"@vuepress/back-to-top"
	]
}
