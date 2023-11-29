import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  "src/*",
  {
    extends: "./vite.config.js",
    test: {
      globals: true,
      include: ["**/*.vitest.hook.test.{ts, tsx}"],
      name: "hook",
      environment: "jsdom",
    },
  },
  {
    extends: "./vite.config.js",
    test: {
      globals: true,
      include: ["**/*.vitest.component.test.{ts, tsx}"],
      name: "component",
      environment: "jsdom",
    },
  },
  {
    test: {
      include: ["**/*.vitest.unit.test.{ts}"],
      name: "unit",
      environment: "node",
    },
  },
]);
