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
		`components/**/*.{vue,js}`,
		`layouts/**/*.vue`,
		`pages/**/*.vue`,
		`plugins/**/*.{js,ts}`,
		`nuxt.config.{js,ts}`
	],
	theme: {
		screens: {
			sm: '450px',
			md: '680px',
			lg: '1000px',
			xl: '1280px',
			'2xl': '1500px',
		},
		extend: {
			fontSize: {
				md: '1.2em',
				lg: [
					'clamp(1.3em, 1.6em, 5vw)', {
						lineHeight: '1.2',
					}
				],
				xl: [
					'clamp(1.4em, 1.8em, 5vw)', {
						lineHeight: '1.2',
					}
				],
				'2xl': [
					'clamp(1.6em, 2.2em, 5vw)', {
						lineHeight: '1.2',
					}
				],
				'logo-top': '1.4rem',
				'logo-bottom': '1.2rem',
				'logo-letter': '2.2rem'
			},
			lineHeight: {
				'tight': '1.1'
			},
			colors: {
				primary: 'var(--bg-primary)',
				secondary: 'var(--bg-secondary)',
				content: 'var(--text)',
				title: 'var(--text-title)',
				link: 'var(--text-link)',
				button: 'var(--text-button)'
			}
		}
	}
}