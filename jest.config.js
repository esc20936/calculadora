/* eslint-disable linebreak-style */
module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.jsx"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>//src/test/styleMock.js",
  },
  testEnvironment: 'jsdom',
};
