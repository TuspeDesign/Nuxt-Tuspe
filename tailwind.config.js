module.exports = {
	mode: 'jit',
	corePlugins: {
		preflight: false,
		fontFamily: false,
		sepia: false,
		boxShadow: false
	},
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	content: [
		'./pages/*.vue',
		'./components/*.vue',
		'./dist/**/*.{html,js}'
	],
	theme: {
		screens: {
			sm: '450px',
			md: '680px',
			lg: '1000px',
			xl: '1280px',
			'2xl': '1500px',
		},
		fontSize: {
			'sm': '.875em',
			'lg': '1.125em',
			'xl': '1.25em',
			'4xl': [
				'clamp(1.4em, 2.2em, 5vw)', {
					lineHeight: '1.2',
				}
			],
			'logo': '2.2rem'
		},
		extend: {
			lineHeight: {
				'tight': '1.1'
			}
		}
	}
}