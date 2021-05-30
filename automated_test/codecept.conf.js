require('dotenv').config()
exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium'
    },
    Rest: {
      require: './helpers/RestHelper.js',
    },
  },
  include: {
    ArchivedPage: './PageObjects/ArchivedPage.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/willow_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    allure: {
    }
  },
  tests: './tests/*_tests.js',
  name: 'codeceptjs'
}