module.exports = {
  testEnvironmentOptions: {
    browser: 'chrome',
    chromeArgs: [
        'no-sandbox',
        'headless',
        'disable-gpu',
        '--window-size=1920,1080',
    ],
  }
}
