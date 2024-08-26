/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			margin: {
				"-full": "-100%",
			},
			screens: {
				"md-l": "884px",
			},
		},
		fontFamily: {
			inter: ["Inter-BlackItalic", "Inter", "sans-serif"],
		},
	},
	plugins: [],
};
