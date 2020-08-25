const esModules = ['ngx-simple-crpt', '@ng-idle/core'].join('|');

module.exports = {
    globals: {
        'ts-jest': {
            'allowSyntheticDefaultImports': true,
            'tsConfig': 'src/tsconfig.spec.json',
        }
    },

    testMatch: ["**/*.spec.ts"],
    transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
    testPathIgnorePatterns: [
        '<rootDir>/dist',
        './app/models/*',
        './app/utils*'
    ],
    'transform': {
        '^.+\\.js$': 'babel-jest'
    },
    verbose: true,
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage/',
    coverageThreshold: {
        'global': {
            'branches': 0,
            'functions': 0,
            'lines': 0,
            'statements': 0
        }
    },
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname'
    ],
    collectCoverageFrom: [
        '**/app/**/*.ts',
        '!**/*.module.ts*',
    ]
};
