import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			keyframes: {
				fadein: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				fadeout: {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
			},
		},
	},

	// The output directory for your css system
	outdir: "styled-system",
});
