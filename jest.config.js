const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  modulePaths: ['<rootDir>/src', '<rootDir>/.jest'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.ts(x)?',
    '!src/templates/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/**/skeleton.tsx'
  ]
}

module.exports = createJestConfig(customJestConfig)
