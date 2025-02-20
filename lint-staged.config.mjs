/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  "src/**/*.{css,ts,tsx}": "prettier --write --cache",
};
