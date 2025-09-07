import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { js, prettier: prettierPlugin },
        extends: ['js/recommended', prettierConfig],
        languageOptions: { globals: globals.browser },
        rules: {
            ...prettierPlugin.configs.recommended.rules,
        },
    },
    {
        files: ['src/**/*.{js,mjs,cjs}'],
        languageOptions: { sourceType: 'module' },
    },
    {
        files: ['*.js', '*.config.js', 'webpack.*.js'],
        languageOptions: {
            sourceType: 'commonjs',
            globals: { ...globals.node },
        },
    },
]);
