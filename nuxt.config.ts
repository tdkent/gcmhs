export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: false },
	modules: [
        '@nuxt/ui',
        '@nuxtjs/tailwindcss',
        "@nuxtjs/google-fonts",
        "@nuxt/scripts",
        '@nuxtjs/color-mode',
        "nuxt-viewport"
    ],
		viewport: {
			breakpoints: {
				xs: 360,
				sm: 480,
				md: 648,
				lg: 1026,
				xl: 1440,
			},
			defaultBreakpoints: {
				xs: 'xs',
				sm: 'sm',
				md: 'md',
				lg: 'lg',
				xl: 'xl'
			},
			fallbackBreakpoint: 'lg'
		},
	colorMode: {
		preference: 'system'
	},
	googleFonts: {
		families: {
			'Open Sans': [100, 200, 300, 400, 500, 600, 700, 800, 900],
			'Mate SC': [400],
			'Cormorant Garamond': [300, 400],
			'Urbanist': [300, 500]
		}
	},
	// Workaround: Netlify, Nuxt JS heap issue workaround
	// https://answers.netlify.com/t/javascript-heap-out-of-memory-when-trying-to-build-a-nuxt-app/93138/12
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		 cssnano:
			 process.env.NODE_ENV === 'production'
				 ? { preset: ['default', { discardComments: { removeAll: true } }] }
				 : false, // disable cssnano when not in production
		},
 },
	head: {
		meta: [
			{
				name: 'apple-mobile-web-app-capable',
				content: 'yes'
			},
			{
				name: 'apple-mobile-web-app-status-bar-style',
				content: 'black-translucent'
			},
		],
		link: [
			{
				rel: 'apple-touch-icon',
				type: 'image/png',
				href: 'https://gcmhs.netlify.app/apple-touch-icon.png'
			}
		]
 	}
})