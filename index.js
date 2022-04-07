const NodeEnvironment = require('jest-environment-node')
const { By, until } = require('selenium-webdriver')

class SeleniumWebDriverEnvironment extends NodeEnvironment {

  constructor(config) {
    super(config)
    const defaultOptions = {
      browserName: 'chrome',
      browserArgs: [
        'no-sandbox',
        'disable-gpu',
        'headless'
      ]
    }
    this.options = {...defaultOptions, ...config.testEnvironmentOptions}
    console.log('testing in browser', this.options.browserName)
  }

  async setup() {
    await super.setup()
    const browser = require(`selenium-webdriver/${this.options.browserName}`)
    const service = new browser.ServiceBuilder().enableVerboseLogging().build()
    const options = new browser.Options()
    options.addArguments(this.options.browserArgs)

    this.driver = browser.Driver.createSession(options, service)
    this.global.driver = this.driver
    this.global.by = By
    this.global.until = until
    this.global.driver.restart = async () => {
      if (this.driver) {
        await this.driver.quit()
        await this.setup()
      }
    }
  }

  async teardown() {
    if (this.driver) await this.driver.quit()
    await super.teardown()
  }

}

module.exports = SeleniumWebDriverEnvironment
