import federation from "@originjs/vite-plugin-federation";
export default {
  input: "src/index.js",
  plugins: [
    federation({
      name: "sobesedovanie",
      filename: "remoteEntry.js",
      remotes: {
        hostApp: "http://localhost:3001/assets/remoteEntry.js",
      },
      // Modules to expose
      exposes: {
        "./App": "./src/app/ui/index",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
