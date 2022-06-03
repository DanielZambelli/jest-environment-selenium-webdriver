# Jest Selenium Environment
Automated testing in Chrome, Edge, Firefox using Jest, Selenium and Docker.

## Install
```
npm i jest-environment-selenium-webdriver
```

## Config single env in Package.json
```
testEnvironmentOptions: {
  browserName: 'chrome',
  browserArgs: [
    'no-sandbox',
    'headless',
    'disable-gpu',
  ],
}
```

## Config multiple envs

jest.chrome.js
```
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
```

jest.edge.js
```
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
```

jest.firefox.js
```
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
```

## Run using scripts in Package.json
```
scripts: {
    "jest:chrome": "jest --config=./jest.chrome.js",
    "jest:edge": "jest --config=./jest.edge.js",
    "jest:firefox": "jest --config=./jest.firefox.js",
    "docker:chrome":"docker run -d -p 4444:4444 -p 7900:7900 --name jsc selenium/standalone-chrome:4.2.1-20220531",
    "docker:edge":"docker run -d -p 4443:4444 -p 7900:7900 --name jse selenium/standalone-edge:4.2.1-20220531",
    "docker:firefox":"docker run -d -p 4442:4444 -p 7900:7900 --name jsf selenium/standalone-firefox:4.2.1-20220531",
    "test:chrome": "npm run docker:chrome && npm run jest:chrome && docker stop jsc && docker rm jsc",
    "test:edge": "npm run docker:edge && npm run jest:edge && docker stop jse && docker rm jse",
    "test:firefox": "npm run docker:firefox && npm run jest:firefox && docker stop jsf && docker rm jsf",
    "test": "npm run test:chrome && npm run test:edge && npm run test:firefox"
  }
```

* `npm run test:chrome`
* `npm run test`
