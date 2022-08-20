import { defineConfig } from "cypress"

export default defineConfig({
  chromeWebSecurity: true,
  component: {
    devServer: {
      bundler: "webpack",
      framework: "next",
    },
    specPattern: "**/components/**/*.cy.tsx",
  },
  defaultCommandTimeout: 5000,
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    slowTestThreshold: 5000,
    specPattern: "**/acceptance/**/*.cy.ts",
    testIsolation: "legacy",
  },
  execTimeout: 5000,
  pageLoadTimeout: 3000,
  projectId: "usp287",
  reporter: "spec",
  requestTimeout: 1500,
  responseTimeout: 1500,
  retries: {
    openMode: 0,
    runMode: 0,
  },
  screenshotOnRunFailure: true,
  scrollBehavior: "center",
  taskTimeout: 15000,
  trashAssetsBeforeRuns: true,
  video: true,
  videoCompression: 40,
  videoUploadOnPasses: false,
  viewportHeight: 900,
  viewportWidth: 1440,
  watchForFileChanges: true,
})
