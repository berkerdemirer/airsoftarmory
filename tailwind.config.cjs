/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Overpass', 'sans-serif'],
			code: ['Fira Code', 'monospace']
		},
		fontWeight: {
			thin: 100,
			normal: 400
		},
		container: {
			center: true
		},
		extend: {}
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')]
};
