module.exports = {
	title: "sunn4room's blogs",
	description: "Welcome to my blogs",
	head: [
		['link', { rel: 'icon', href: '/logo.png' }]
	],
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		sidebar: "auto"
	},
	plugins: [
		"@vuepress/search",
		"@vuepress/back-to-top"
	]
}
