/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./utils/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'all-product-image': 'url(../public/image/Home-image12.jpg)',
				'product-image-1': "url('../public/image/Home-image5.jpg')",
				'product-image-2': "url('../public/image/News-image3.jpg')",
				'product-image-3': "url('../public/image/Home-image8.jpg')",
				'news-background-image': "url('../public/image/Home-image.jpg')",
				'about-company': "url('../public/image/Elements-image.jpg')",
				'about-suppliers': "url('../public/image/Elements-image2.jpg')",
				'about-company-banner': "url('../public/image/Home-image9.jpg')",
				'about-company-feature-1': "url('../public/image/about-image1.png')",
				'about-company-feature-2': "url('../public/image/about-image2.png')",
				'about-company-value-1': "url('../public/image/about-image3.png')",
				'about-company-value-2': "url('../public/image/about-image4.png')",
				'about-company-value-3': "url('../public/image/about-image5.png')",
				'dot-pattern': "url('../public/dot-pattern.png')",
			},
			backgroundSize: {
				'100%': '100%',
			},
			backgroundPosition: {
				'right-top-50': 'right top 50%',
			},
			screens: {
				md: '800px',
				'3xl': '1980px',
			},
		},
	},
	plugins: [],
};
