export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Tuspe Design Oy',
		htmlAttrs: {
			lang: 'fi'
		},
		meta: [
			{ charset: 'UTF-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
			{ type: 'date', lang: 'fi-FI' },
			{ name: 'twitter:site', content: '@tuspedesign' },
			{ name: 'twitter:creator', content: '@_timoanttila' },
			{ property: 'og:site_name', content: 'Tuspe Design Oy' },
			{ property: 'og:locale', content: 'fi_FI' },
			{ property: 'og:type', content: 'business.business' },
			{ property: 'business:contact_data:street_address', content: 'Petäjäpolku 11-15 K70' },
			{ name: 'geo.placename', property: 'business:contact_data:locality', content: 'Nokia' },
			{ property: 'business:contact_data:region', content: 'Pirkanmaa' },
			{ property: 'business:contact_data:postal_code', content: '37130' },
			{ property: 'business:contact_data:country_name', content: 'Finland' },
			{ name: "email", property: "og:email", content: "moro@tuspe.com" },
			{ name: "telephone", property: "og:phone_number", content: "+358407746121" },
			{ name: 'latitude', property: 'og:latitude', content: '61.489173' },
			{ name: 'longitude', property: 'og:longitude', content: '23.492723' },
			{ name: 'geo.region', content: 'fi' },
			{ name: 'geo.position', content: '61.489173;23.492723' },
			{ name: 'ICBM', content: '61.489173, 23.492723' },
			{ name: 'fb:page_id', content: '161472337564741' },
			{ name: 'apple-mobile-web-app-capable', content: 'yes' },
			{ name: 'apple-mobile-web-app-status-bar-style', content: '#298fd6' },
			{ name: 'theme-color', content: '#298fd6' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ property: "og:image:type", content: "image/jpeg" },
		],
		link: [
			{ rel: 'shortcut icon', type: 'image/x-icon', size: "16x16", href: 'https://tuspe.com/favicon.ico' },
			{ rel: 'icon', type: 'image/png', size: "96x96", href: 'https://tuspe.com/favicon.png' }
		],
		script: [
			{
				type: 'application/ld+json',
				json: {
					"@context": "https://schema.org",
					"@type": "ProfessionalService",
					"name": "Tuspe Desgin Oy",
					"image": "https://tuspe.com/images/tuspesimple.jpg",
					"logo": "https://tuspe.com/images/tuspe-logo.png",
					"url": "https://tuspe.com",
					"telephone": "+358407746121",
					"priceRange": "400€ - 3000€",
					"address": {
						"@type": "PostalAddress",
						"streetAddress": "Petäjäpolku 11-15",
						"addressLocality": "Nokia",
						"postalCode": "37130",
						"addressCountry": "FI"
					},
					"geo": {
						"@type": "GeoCoordinates",
						"latitude": 61.489173,
						"longitude": 23.492723
					},
					"openingHoursSpecification": [{
						"@type": "OpeningHoursSpecification",
						"dayOfWeek": [
							"Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday"
						],
						"opens": "09:00",
						"closes": "20:00"
					}, {
						"@type": "OpeningHoursSpecification",
						"dayOfWeek": "Saturday",
						"opens": "11:00",
						"closes": "18:00"
					}],
					"sameAs": [
						"https://twitter.com/tuspedesign",
						"",
						"https://github.com/TuspeDesign"
					]
				}
			}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/global.css'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts'
	],
	googleFonts: {
		families: {
			Montserrat: [400, 700],
		},
		display: 'swap'
	},
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
