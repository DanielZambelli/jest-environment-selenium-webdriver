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
    '--window-size=1920,1080',
    '--ignore-ssl-errors=yes',
    '--ignore-certificate-errors'
  ],
}
```

## Config multiple envs

jest.chrome.js
```
module.exports = {
  testEnvironmentOptions: {
    browserName: 'chrome',
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
```

jest.edge.js
```
module.exports = {
  testEnvironmentOptions: {
    browserName: 'edge',
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
```

jest.firefox.js
```
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
```

## testEnvironmentOptions 
| options | description | values |
| --- | --- | --- |
| browserName | targeted browser | chrome, edge or firefox |
| browserArgs | arguments to configure the browser | (optional) array of strings |
| browserBinary | (optional) absolute path to browser exe in case you need to run a specific version | string
| remoteServer | (optional) path to reach selenium grid server | string e.g. http://localhost:4444

## Run using scripts in Package.json
```
scripts: {
  "test:chrome": "jest --config=./jest.chrome.js",
  "test:edge": "jest --config=./jest.edge.js",
  "test:firefox": "jest --config=./jest.firefox.js",
}
```

* Invoke `npm run test:chrome`
