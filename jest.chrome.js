module.exports = {
  testEnvironmentOptions: {
    browserName: 'chrome',
    remoteServer: 'http://localhost:4444/',
    browserArgs: [
        'no-sandbox',
        'headless',
        'disable-gpu',
        '--window-size=1920,1080',
        '--headless',
        '--ignore-ssl-errors=yes',
        '--ignore-certificate-errors'
    ],
  }
}
