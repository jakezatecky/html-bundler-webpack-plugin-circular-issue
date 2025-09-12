import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

import webpackConfig from './webpack.config.js';

export default [
    js.configs.recommended,
    importPlugin.flatConfigs.recommended,
    {
        files: [
            '**/*.{js,jsx}',
        ],
        ignores: ['./node_modules/**/*'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
        },
        settings: {
            // Account for webpack.resolve.module imports
            'import/resolver': {
                webpack: {
                    config: webpackConfig,
                },
            },
        },
    }
];
