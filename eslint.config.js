import antfu from "@antfu/eslint-config";

export default antfu({
  solid: true,
  unocss: true,
  stylistic: {
    quotes: "double",
    semi: true,
  },
  rules: {
    "antfu/no-top-level-await": "off",
    "node/prefer-global/process": "off",
    "unocss/order": "warn",
  },
});
