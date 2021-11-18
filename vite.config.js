import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

import { defineConfig } from 'vite';

module.exports = defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				forum: resolve(__dirname, 'forum.html'),
				'forum-topic': resolve(__dirname, 'forum-topic.html'),
			},
		},
	},
	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, 'partials'),
			context: {
				title: 'Hello, world!',
				'forum-messages': ['Hallo', 'Een item', 'Bericht!'],
			},
		}),
	],
});
