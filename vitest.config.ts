import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: "istanbul",
      enabled: true,
      extension: [".ts", ".tsx"],
      all: true,
      reportsDirectory: "./test/vitest/coverage",
    },
    reporters: ["junit"],
    outputFile: "./test/vitest/reports/junit-report.xml",
    include: [
      "./src/**/*.vitest.unit.test.ts",
      "./src/**/*.vitest.hook.test.tsx",
      "./src/**/*.vitest.component.test.tsx",
    ],
    environment: "jsdom",
    setupFiles: "./setupTest.ts",
  },
});
