import globals from "globals";
import { configs as pluginJs } from "@eslint/eslint-plugin";
import { configs as tseslint } from "@typescript-eslint/eslint-plugin";
import { configs as pluginReactConfig } from "@eslint/eslint-plugin-react";

export default {
  "extends": [
    "next/core-web-vitals"
  ],
  "files": ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "overrides": [
    {
      "files": ["**/*.{ts,tsx}"],
      "extends": [
        "plugin:@typescript-eslint/recommended",
        "next/core-web-vitals"
      ]
    }
  ]
};
