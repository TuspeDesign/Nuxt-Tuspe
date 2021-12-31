module.exports = {
	mode: 'jit',
	corePlugins: {
		preflight: false,
		fontFamily: false
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
		extend: {
			lineHeight: {
				'tight': '1.1'
			}
		}
	}
}