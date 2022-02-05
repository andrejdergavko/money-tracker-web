module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // 'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [0, 'always'],
    'import/prefer-default-export': [0, 'always'],
    'no-restricted-exports': [0, 'always'],
    'react/prop-types': 'off',
  },
};
