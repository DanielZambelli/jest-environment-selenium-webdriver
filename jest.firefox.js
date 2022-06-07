module.exports = {
  testEnvironmentOptions: {
    browserName: 'firefox',
    browserArgs: [
      'no-sandbox',
      'headless',
      'disable-gpu',
      '--window-size=1920,1080',
      '--ignore-ssl-errors=yes',
      '--ignore-certificate-errors'
    ],
  }
}
