# Jest Selenium Environment
Run automated integration tests using Jest and Selenium. 

## Prerequisite
* Supports testing in: **Chrome, Edge**  
* WebDrivers included but might prompt client to run compatiable browser version

## Install
```
npm i jest-environment-selenium-webdriver
```

## Config in Package.json
``` JSON
testEnvironmentOptions: {
  browserName: 'chrome', 
  browserArgs: [
    'no-sandbox',
    'headless',
    'disable-gpu',
  ],
}
```

## Config with multiple envs
Place jest config file in root. E.g.:

jest.chrome.js
``` js
module.exports = {
  testEnvironmentOptions: {
    browserName: 'chrome',
    browserArgs: [
        'no-sandbox',
        'headless',
        'disable-gpu',
        '--window-size=1920,1080',
    ],
  }
}
```

jest.edge.js
``` js
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
```

Run in chrome or edge using: 
* `jest --config=./jest.chrome.js`
* `jest --config=./jest.edge.js`

## Considerations: 
* Include fixed WebDriver and browser version for OS (Linuc, Mac, Win) to avoid clients being prompted becuase they are using incompatible versions
