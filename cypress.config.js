const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:30000,
  experimentalMemoryManagement:true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
