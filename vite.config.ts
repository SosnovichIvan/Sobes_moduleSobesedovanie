import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "sobesedovanie",
      filename: "remoteEntry.js",
      remotes: {
        hostApp: "http://localhost:3001/assets/remoteEntry.js",
      },
      exposes: {
        "./App": "./src/app/ui/index",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
