module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    settings: {
        'import/resolver': {
            typescript: true,
            node: {
                paths: ['src'],
            },
        },
        react: {
            version: 'detect',
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'react', '@typescript-eslint', 'react-hooks'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        'react-hooks/rules-of-hooks': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        indent: ['error', 2, {offsetTernaryExpressions: true, SwitchCase: 1}],
        'linebreak-style': 0,
        quotes: ['error', 'single'],
        semi: ['off', 'always'],
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                pathGroups: [
                    {
                        pattern: '{.,..}/*.css',
                        group: 'object',
                        position: 'after',
                    },
                    {
                        pattern: '*.svg',
                        patternOptions: {
                            dot: true,
                            nocomment: true,
                            matchBase: true,
                        },
                        group: 'sibling',
                        position: 'after',
                    },
                ],
                'newlines-between': 'always',
            },
        ],
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'max-len': ['warn', {code: 120, ignoreComments: true, ignoreStrings: true, ignoreRegExpLiterals: true}],
        'prefer-arrow-callback': ['error', {allowNamedFunctions: true}],
        'react/self-closing-comp': 'warn',
        'arrow-body-style': 'warn',
        'prefer-template': 'error',
        'import/no-duplicates': 'off',
    },
}
