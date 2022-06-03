const NodeEnvironment = require('jest-environment-node')
const { By, until } = require('selenium-webdriver')
const webdriver = require('selenium-webdriver')

class SeleniumWebDriverEnvironment extends NodeEnvironment{

  constructor(config) {
    super(config)
    const defaultOptions = {
      browserName: 'chrome',
      remoteServer: 'http://localhost:4444/',
      browserArgs: [
        'no-sandbox',
        'disable-gpu',
        'headless',
        '--headless',
        '--ignore-ssl-errors=yes',
        '--ignore-certificate-errors'
      ]
    }
    this.options = {...defaultOptions, ...config.testEnvironmentOptions}
    if(this.options.browserName === 'edge'){
      this.options.browserName = 'MicrosoftEdge'
      this.options.remoteServer = 'http://localhost:4443/'
    }
    console.log('testing in browser', this.options.browserName)
  }

  setupDriver(){

    let setOptionsName = null
    if(this.options.browserName === 'MicrosoftEdge') setOptionsName = 'setEdgeOptions'
    if(this.options.browserName === 'chrome') setOptionsName = 'setChromeOptions'
    if(this.options.browserName === 'firefox') setOptionsName = 'setFirefoxOptions'

    this.driver = new webdriver.Builder()
      .usingServer(this.options.remoteServer)
      .withCapabilities({ 'browserName' : this.options.browserName })
      [setOptionsName](this.options.browserArgs)
      .build()

    this.global.driver = this.driver
    this.global.by = By
    this.global.until = until
    this.global.driver.restart = async () => {
      //TODO: might need to solve this...
      //if (this.driver) {
        //await this.driver.quit()
        //await this.setupDriver()
      //}
    }
  }

  async setup() {
    await super.setup()
    this.setupDriver()
  }

  async teardown() {
    if (this.driver) await this.driver.quit()
    await super.teardown()
  }

}

module.exports = SeleniumWebDriverEnvironment
