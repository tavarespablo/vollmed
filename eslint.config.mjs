import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import cypress from "eslint-plugin-cypress";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    rules: {
      semi: ["error", "always"]
    },
    extends: ["js/recommended"]
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["cypress/**/*.{js,mjs,cjs}"],
    plugins: { cypress },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,     // adiciona describe, it, beforeEach etc.
        Cypress: "readonly",  // para evitar erros com Cypress
        cy: "readonly",       // para evitar erros com cy
      },
    },
    rules: {
      ...cypress.configs.recommended.rules
    }
  },
  {
    ignores: ["cypress/results/**"]
  }
]);
