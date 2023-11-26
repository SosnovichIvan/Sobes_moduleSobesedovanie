import federation from "@originjs/vite-plugin-federation";
export default {
	input: "src/index.js",
	plugins: [
		federation({
			name: "sobesedovanie",
			filename: "remoteEntry.js",
			remotes: {
				host: "http://localhost:3001/assets/remoteEntry.js",
			},
			// Modules to expose
			exposes: {
				"./App": "./src/app/ui/module/ui/index.tsx",
			},
			shared: ["react", "react-dom"],
		}),
	],
};
