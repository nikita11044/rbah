import path from 'path';

export default {
    globals: {
        __IS_DEV__: true,
        __BASE_URL__: '',
        __PROJECT__: 'jest',
    },
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    rootDir: '../../',
    setupFilesAfterEnv: [
        '<rootDir>config/jest/testSetup.ts',
    ],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'componentMock.tsx'),
    },
};
