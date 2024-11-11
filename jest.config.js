// jest.config.js
module.exports = {
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(axios)/)', // Permet transformar axios
    ],
  };