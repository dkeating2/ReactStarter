const perfectionistRules = {
  "perfectionist/sort-array-includes": [
    "error",
    {
      type: "natural",
      order: "asc",
      "spread-last": true,
    },
  ],
  "perfectionist/sort-enums": [
    "error",
    {
      type: "natural",
      order: "asc",
    },
  ],
  "perfectionist/sort-exports": [
    "error",
    {
      type: "natural",
      order: "asc",
    },
  ],
  "perfectionist/sort-imports": [
    "error",
    {
      type: "natural",
      order: "asc",
      groups: [
        "type",
        "react",
        ["builtin", "external"],
        "internal-type",
        "internal",
        ["parent-type", "sibling-type", "index-type"],
        ["parent", "sibling", "index"],
        "side-effect",
        "style",
        "object",
        "unknown",
      ],
      "custom-groups": {
        value: {
          react: ["react", "react-*"],
        },
        type: {
          react: "react",
        },
      },
      "newlines-between": "always",
      "internal-pattern": [
        "@/components/**",
        "@/stores/**",
        "@/pages/**",
        "@/lib/**",
      ],
    },
  ],
  "perfectionist/sort-interfaces": [
    "error",
    {
      type: "natural",
      order: "asc",
    },
  ],
  "perfectionist/sort-named-exports": [
    "error",
    {
      type: "natural",
      order: "asc",
    },
  ],
  "perfectionist/sort-named-imports": [
    "error",
    {
      type: "natural",
      order: "asc",
    },
  ],

  "perfectionist/sort-union-types": [
    "error",
    {
      type: "natural",
      order: "asc",
    },
  ],
};

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:sonar/recommended",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "cypress/**/*",
    "cypress.config.ts",
    "**/*.test.*",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "sonar", "perfectionist"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    ...perfectionistRules,
  },
};
