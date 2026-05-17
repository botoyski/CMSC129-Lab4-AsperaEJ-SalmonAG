// playwright.config.js

module.exports = {
  testDir: "./tests/system",

  use: {
    baseURL: "http://localhost:3000",
    headless: true,
  },
};