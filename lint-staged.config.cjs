module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --max-warnings=0', 'prettier -w .'],
  '**/*.{json,css,scss,md}': ['prettier -w .'],
  '**/*.ts?(x)': () => 'npm run typecheck',
};
