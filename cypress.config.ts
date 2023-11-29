import { defineConfig } from "cypress";
import coverage from "@cypress/code-coverage/task";
export default defineConfig({
  env: {
    codeCoverage: {
      exclude: "cypress/**/*.*",
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "./src/**/*.cy.*.test.tsx",
    setupNodeEvents(on, config) {
      coverage(on, config);
      return config;
    },
  },

  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      coverage(on, config);
      return config;
    },
  },
});