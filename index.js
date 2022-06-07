require('chromedriver')
require('msedgedriver')
const NodeEnvironment = require('jest-environment-node')
const  webdriver = require('selenium-webdriver')

class SeleniumWebDriverEnvironment extends NodeEnvironment{

  constructor(config) {
    super(config)
    const defaultOptions = {
      browserName: 'chrome',
      browserArgs: [
        'no-sandbox',
        'disable-gpu',
        'headless',
        '--ignore-ssl-errors=yes',
        '--ignore-certificate-errors'
      ]
    }
    this.options = {...defaultOptions, ...config.testEnvironmentOptions}
    console.log('testing in browser', this.options.browserName)
  }

  getSetOptionsName(){
    switch(this.options.browserName){
      case 'edge':
        return 'setEdgeOptions'
      case 'chrome':
        return 'setChromeOptions'
      case 'firefox':
        return 'setFirefoxOptions'
    }
    throw new Error('could not find setOptionsName for the browser')
  }

  getSetBinaryPathName(){
    switch(this.options.browserName){
      case 'edge':
        return 'setBinaryPath'
      case 'chrome':
        return 'setChromeBinaryPath'
      case 'firefox':
        return 'setBinary'
    }
    throw new Error('could not find getSetBinaryPathName for the browser')
  }

  getBrowserName(){
    switch(this.options.browserName){
      case 'edge':
        return 'MicrosoftEdge'
      default:
        return this.options.browserName
    }
  }

  setupDriver(){
    const browser = require('selenium-webdriver/'+this.options.browserName)
    const options = new browser.Options()

    if(this.options.browserArgs)
      options.addArguments(this.options.browserArgs)

    if(this.options.browserBinary)
      options[this.getSetBinaryPathName()](this.options.browserBinary)

    if(this.options.remoteServer){
      this.driver = new webdriver.Builder()
        .usingServer(this.options.remoteServer)
        .withCapabilities({ 'browserName' : this.getBrowserName() })
        [this.getSetOptionsName()](options)
        .build()
    }else{
      this.driver = new webdriver.Builder()
        .withCapabilities({ 'browserName' : this.getBrowserName() })
        [this.getSetOptionsName()](options)
        .build()
    }

    this.global.driver = this.driver
    this.global.by = webdriver.By
    this.global.until = webdriver.until
    this.global.driver.restart = async () => {
      if (this.driver) {
        await this.driver.quit()
        await this.setupDriver()
      }
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
