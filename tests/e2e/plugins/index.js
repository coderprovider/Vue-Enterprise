// https://docs.cypress.io/guides/guides/plugins-guide.html
module.exports = (on, config) => {
  // Dynamic configuration
  // https://docs.cypress.io/guides/references/configuration.html
  return Object.assign({}, config, {
    // ===
    // General
    // https://docs.cypress.io/guides/references/configuration.html#Global
    // ===
    // HACK: Only necessary until we correctly set the baseURL
    // when opening Cypress
    baseUrl: config.env.VUE_DEV_SERVER_URL,
    watchForFileChanges: true,
    // ===
    // Viewport
    // https://docs.cypress.io/guides/references/configuration.html#Viewport
    // ===
    viewportWidth: 1280,
    viewportHeight: 720,
    // ===
    // Animations
    // https://docs.cypress.io/guides/references/configuration.html#Animations
    // ===
    waitForAnimations: true,
    animationDistanceThreshold: 4,
    // ===
    // Timeouts
    // https://docs.cypress.io/guides/references/configuration.html#Timeouts
    // ===
    defaultCommandTimeout: 4000,
    execTimeout: 60000,
    pageLoadTimeout: 60000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    // ===
    // Main Directories
    // https://docs.cypress.io/guides/references/configuration.html#Folders-Files
    // ===
    supportFile: 'tests/e2e/support/setup.js',
    integrationFolder: 'tests/e2e/specs',
    fixturesFolder: 'tests/e2e/fixtures',
    // ===
    // Videos & Screenshots
    // https://docs.cypress.io/guides/core-concepts/screenshots-and-videos.html
    // ===
    videoUploadOnPasses: true,
    videoCompression: 32,
    videosFolder: 'tests/e2e/videos',
    screenshotsFolder: 'tests/e2e/screenshots',
  })
}
