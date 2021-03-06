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
				'forum-topics': ['Hallo', 'Een item', 'Bericht!'],
				'forum-messages': [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ipsum ac nibh porttitor, ac bibendum odio convallis. Nulla quis viverra nisl, sed semper massa. Donec pharetra ligula nisl. Cras id nibh sagittis, lobortis turpis eu, interdum nibh. Aenean placerat rutrum accumsan. Nam enim felis, consequat maximus risus et, malesuada euismod lacus. In ullamcorper a ex sit amet imperdiet. Integer dapibus dui enim, eu viverra urna eleifend vel. Donec sed pharetra risus. Nulla molestie arcu id diam ullamcorper interdum. Etiam pellentesque lacus id est accumsan, non congue arcu rutrum. Donec sed urna placerat, lacinia orci et, tempor turpis.',
					'Pellentesque pellentesque scelerisque nisi, nec vulputate felis imperdiet sit amet. Curabitur suscipit id augue eu mollis. Praesent porttitor augue et urna feugiat suscipit. Suspendisse feugiat fringilla diam ultrices lobortis. Fusce malesuada leo quis diam elementum tincidunt. Aliquam congue pretium accumsan. Suspendisse laoreet varius lectus, in ornare mauris tincidunt nec. Praesent elementum, risus euismod pretium viverra, tortor sem feugiat odio, in pharetra tellus tellus eu ipsum. Nam porttitor maximus arcu ut mattis. Curabitur sodales sapien eleifend sem iaculis, sit amet viverra orci fringilla. Donec non blandit orci. Sed nisi massa, rhoncus nec scelerisque et, commodo vel neque.',
				],
				navItems: [],
				navItemsPhone: [
					{
						title: 'Home',
						isActive: 'd-flex flex-column nav-link active',
					},
					{ title: 'Forum', isActive: 'd-flex flex-column nav-link' },
					{
						title: 'Agenda',
						isActive: 'd-flex flex-column nav-link',
					},
					{ title: 'Leden', isActive: 'd-flex flex-column nav-link' },
					{ title: 'Meer', isActive: 'd-flex flex-column nav-link' },
				],
				voorpagina: {
					advertenties: [
						'dosign.jpg',
						'galjema.png',
						'mechdes.gif',
						'tudelft.png',
					],
					agenda: [
						{
							dag: 'Woensdag 16 juni',
							items: [
								{
									titel: 'Werkgroep',
									tijd: '18:30',
									kanInketzen: false,
									isIngeketzt: false,
								},
								{
									titel: 'Na-werkgroep-borrel',
									tijd: '22:00',
									kanInketzen: true,
									isIngeketzt: false,
								},
							],
						},
						{
							dag: 'Donderdag 17 juni',
							items: [
								{
									titel: 'Donderdagmaaltijd',
									tijd: '18:30',
									kanInketzen: true,
									isIngeketzt: true,
								},
								{
									titel: 'Borrel',
									tijd: '20:00',
									kanInketzen: true,
									isIngeketzt: false,
								},
							],
						},
						{
							dag: 'Dinsdag 21 juni',
							items: [
								{
									titel: 'Kring',
									tijd: '18:30',
									kanInketzen: false,
									isIngeketzt: false,
								},
							],
						},
						{
							dag: 'Woensdag 22 juni',
							items: [
								{
									titel: 'Kringleidersinstructie',
									tijd: '18:30',
									kanInketzen: false,
									isIngeketzt: false,
								},
							],
						},
						{
							dag: 'Donderdag 17 juni',
							items: [
								{
									titel: 'Donderdagmaaltijd',
									tijd: '18:30',
									kanInketzen: true,
									isIngeketzt: true,
								},
								{
									titel: 'LeO',
									tijd: '20:00',
									kanInketzen: true,
									isIngeketzt: false,
								},
								{
									titel: 'Borrel',
									tijd: '22:00',
									kanInketzen: true,
									isIngeketzt: false,
								},
							],
						},
						{
							dag: 'Vrijdag 24 juni',
							items: [
								{
									titel: 'ZZW',
									tijd: '18:30',
									kanInketzen: true,
									isIngeketzt: false,
								},
							],
						},
						{
							dag: 'Donderdag 17 juni',
							items: [
								{
									titel: 'Donderdagmaaltijd',
									tijd: '18:30',
									kanInketzen: true,
									isIngeketzt: true,
								},
								{
									titel: 'LeO',
									tijd: '20:00',
									kanInketzen: true,
									isIngeketzt: false,
								},
								{
									titel: 'Borrel',
									tijd: '22:00',
									kanInketzen: true,
									isIngeketzt: false,
								},
							],
						},
						{
							dag: 'Dinsdag 11 december',
							items: [
								{
									titel: 'Broedersjaarschmaaltijd',
									tijd: '18:30',
									kanInketzen: false,
									isIngeketzt: false,
								},
							],
						},
					],
					album: {
						titel: 'Commissiebedankdag',
						dag: '21 juni 2021',
						items: [
							'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
							'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
							'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
							'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
							'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
							'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
							'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
							'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
							'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
							'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
							'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
							'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
							'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
							'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
							'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
						],
					},
					forum: [
						{
							titel: 'Openheid en veiligheid: regenboogvlag Confide',
							tijd: '17:17',
							nieuweBerichten: false,
							aantalNieuw: 0,
						},
						{
							titel: 'H.V. voorbereiding',
							tijd: '22:00',
							nieuweBerichten: true,
							aantalNieuw: 2,
						},
						{
							titel: 'Interesse in Deltse Politiek?',
							tijd: '22:00',
							nieuweBerichten: true,
							aantalNieuw: 1,
						},
						{
							titel: '[Beautort ZZZW 2021]',
							tijd: '22:00',
							nieuweBerichten: false,
							aantalNieuw: 0,
						},
						{
							titel: 'Citaeten',
							tijd: '22:00',
							nieuweBerichten: true,
							aantalNieuw: 1,
						},
						{
							titel: 'Aangeboden: Goedbetaalde webdesign baan',
							tijd: '22:00',
							nieuweBerichten: false,
							aantalNieuw: 0,
						},
						{
							titel: 'Propaganda meem-draadje',
							tijd: '22:00',
							nieuweBerichten: false,
							aantalNieuw: 0,
						},
					],
					posters: [
						{
							isActive: 'active',
							src: 'https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1333&q=80',
						},
						{
							isActive: '',
							src: 'https://images.unsplash.com/photo-1508161773455-3ada8ed2bbec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2148&q=80',
						},
						{
							isActive: '',
							src: 'https://images.unsplash.com/photo-1584448097764-374f81551427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
						},
					],
					verjaardagen: [
						{
							naam: 'Ama. van Ketel - de Wit',
							dag: 'Vandaag',
							profielFoto:
								'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
						},
						{
							naam: 'Am. Immink',
							dag: 'Morgen',
							profielFoto:
								'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
						},
						{
							naam: 'Ama. de Zwaan',
							dag: 'do 13 juni',
							profielFoto:
								'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
						},
					],
				},
			},
		}),
	],
});
