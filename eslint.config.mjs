import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { ignores: ["node_modules/*"] },
  {
    rules: {
      "operator-linebreak": "off",
      "symbol-description": "off",
      "dot-notation": "off",
      "class-methods-use-this": "off",
      "linebreak-style": ["error", "unix"],
      eqeqeq: "error",
      "no-await-in-loop": "off",
      "no-underscore-dangle": "off",
      "no-nested-ternary": "off",
      "no-continue": "off",
      "padded-blocks": ["error", { classes: "always" }],
      "no-unused-vars": [
        "error",
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "consistent-return": "off",
      "object-curly-spacing": [2, "always"],
      "object-curly-newline": "off",
      "array-bracket-spacing": ["error", "always"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      indent: ["error", 2],
      "no-restricted-syntax": [
        "error",
        {
          selector: "LabeledStatement",
          message:
            "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message:
            "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ],
      "no-void": "off",
      curly: "off",
      "no-inner-declarations": "off",
      "react/button-has-type": "off",
      "react/display-name": "off",
    },
  },
];
