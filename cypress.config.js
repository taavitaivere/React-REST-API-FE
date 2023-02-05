const { defineConfig } = require("cypress");

module.exports = defineConfig({
  supportFile: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
