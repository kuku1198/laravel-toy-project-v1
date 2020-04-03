module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb-base',
        'plugin:vue/recommended',
        'plugin:prettier/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['vue', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'import/no-unresolved': 0,
        'import/extensions': 0,
    },
};
