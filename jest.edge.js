module.exports = {
  testEnvironmentOptions: {
    browserName: 'edge',
    browserArgs: [
        'no-sandbox',
        'headless',
        'disable-gpu',
        '--window-size=1920,1080',
    ],
  }
}
