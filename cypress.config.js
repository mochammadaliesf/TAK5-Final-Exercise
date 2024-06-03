const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com'

    
      // implement node event listeners here
    },
    setupNodeEvents(on, config) {
  },
  defaultCommandTimeout: 11000,
});
