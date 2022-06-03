module.exports = {
  testEnvironmentOptions: {
    browserName: 'firefox',
    remoteServer: 'http://localhost:4442/',
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
