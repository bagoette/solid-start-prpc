/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  singleQuote: true,
  printWidth: 80,
  semi: true,
  trailingComma: 'all',
  jsxSingleQuote: true,
};
