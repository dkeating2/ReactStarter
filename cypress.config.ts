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
    setupNodeEvents(on, config) {
      coverage(on, config);
      return config;
    },
  },
});
