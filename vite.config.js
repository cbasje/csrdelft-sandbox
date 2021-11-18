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
				'forum-topics': ['Hallo', 'Een item', 'Bericht!'],
				'forum-messages': [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ipsum ac nibh porttitor, ac bibendum odio convallis. Nulla quis viverra nisl, sed semper massa. Donec pharetra ligula nisl. Cras id nibh sagittis, lobortis turpis eu, interdum nibh. Aenean placerat rutrum accumsan. Nam enim felis, consequat maximus risus et, malesuada euismod lacus. In ullamcorper a ex sit amet imperdiet. Integer dapibus dui enim, eu viverra urna eleifend vel. Donec sed pharetra risus. Nulla molestie arcu id diam ullamcorper interdum. Etiam pellentesque lacus id est accumsan, non congue arcu rutrum. Donec sed urna placerat, lacinia orci et, tempor turpis.',
					'Pellentesque pellentesque scelerisque nisi, nec vulputate felis imperdiet sit amet. Curabitur suscipit id augue eu mollis. Praesent porttitor augue et urna feugiat suscipit. Suspendisse feugiat fringilla diam ultrices lobortis. Fusce malesuada leo quis diam elementum tincidunt. Aliquam congue pretium accumsan. Suspendisse laoreet varius lectus, in ornare mauris tincidunt nec. Praesent elementum, risus euismod pretium viverra, tortor sem feugiat odio, in pharetra tellus tellus eu ipsum. Nam porttitor maximus arcu ut mattis. Curabitur sodales sapien eleifend sem iaculis, sit amet viverra orci fringilla. Donec non blandit orci. Sed nisi massa, rhoncus nec scelerisque et, commodo vel neque.',
				],
			},
		}),
	],
});
