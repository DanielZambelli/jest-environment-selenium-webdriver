module.exports = {
  testEnvironmentOptions: {
    browserName: 'edge',
    remoteServer: 'http://localhost:4443/',
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
