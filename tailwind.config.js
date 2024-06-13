/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}'
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			gridTemplateColumns: {
				'bot-cards': 'repeat(auto-fill, minmax(270px,1fr))'
			},
			boxShadow: {
				'card': '0 0 25px -5px rgb(0 0 0 / 0.15)',
				'island': '0 0 10px 0 rgb(0 0 0 / 0.15)',
				'island-header': '0 0 10px 0 rgb(246 107 177 / 0.15)',
			},
			colors: {
				'gray-title': '#f8f8f8',
				'gray-utils': '#484848',
				accent: '#f66bb1',
				secondary: '#7a66fb',
				adjust: '#EF5B2A',
				'adjust-dark': '#8d47a9',
				'green-pulse': '#6bb431'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'up-down': {
					'0%': { transform: 'translateY(10px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'up-down': 'up-down 3s ease-in-out infinite alternate-reverse both'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
}