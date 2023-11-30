import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}" ',
      },
      overlay: { initialIsOpen: false },
    }),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    port: 5173,
    host: "127.0.0.1",
  },
  preview: {
    port: 5173,
    host: "127.0.0.1",
  },
});
