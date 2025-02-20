/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*": "prettier --write --cache",
  "*.{ts,tsx}": "eslint --fix",
};
