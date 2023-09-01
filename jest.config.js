const nextJest = require("next/jest");

const createConfig = nextJest({
  dir: './'
})

const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js/"],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/"
  ],
  preset:"ts-jest"
}

module.exports = createConfig(config)