import * as path from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import eslint from "vite-plugin-eslint";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint(), svgr(), dts()],
    resolve: {
        alias: [{
            find: "@",
            replacement: path.resolve(__dirname, "src"),
        }],
    },
    server: {
        port: 8000,
    },
    build: {
        lib: {
            name: "atom.ui",
            fileName: (format) => `index.${format}.js`,
            entry: path.resolve(__dirname, "index.ts"),
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
});
