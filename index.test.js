/**
 * @jest-environment ./index.js
 */

const client = require('./index')

describe(client, () => {

  afterEach(browserRestart)

  test('defined', () => {
    expect(browser).toBeDefined()
    expect(by).toBeDefined()
    expect(until).toBeDefined()
    expect(browserRestart).toBeDefined()
  })

  test('title', async () => {
    await browser.get('https://en.wikipedia.org/wiki/Base64');
    const title = await browser.getTitle();
    expect(title).toBeDefined()
  });

  test('title', async () => {
    await browser.get('https://en.wikipedia.org/wiki/Jagged_array');
    const title = await browser.getTitle();
    expect(title).toBeDefined()
  });

})
