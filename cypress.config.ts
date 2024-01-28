import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://computer-database.gatling.io/computers',
    specPattern: 'cypress/e2e/**/*.spec.{js,ts}',
    watchForFileChanges: false,
    retries: { runMode: 2, openMode: 2 },
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
  },
});
