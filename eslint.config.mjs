import eslint from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import eslintPluginImportX from "eslint-plugin-import-x";
import reactPlugin from "eslint-plugin-react";
import tailwind from "eslint-plugin-tailwindcss";
import tseslint, { configs as tseslintconfigs } from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  // Base
  eslint.configs.recommended,
  // Typescript
  tseslintconfigs.recommended,
  // Next
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  // React
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  { settings: { react: { version: "detect" } } },
  // Imports
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
  {
    rules: {
      "import-x/order": [
        "warn",
        {
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  // Tailwind
  ...tailwind.configs["flat/recommended"],
);
