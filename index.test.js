/**
 * @jest-environment ./index.js
 */

const client = require('./index')

describe(client, () => {

  afterEach(driver.restart)

  test('defined', () => {
    expect(driver).toBeDefined()
    expect(by).toBeDefined()
    expect(until).toBeDefined()
    expect(driver.restart).toBeDefined()
  })

  test('title', async () => {
    await driver.get('https://en.wikipedia.org/wiki/Base64')
    const title = await driver.getTitle()
    expect(title).toBeDefined()
  })

  test('title', async () => {
    await driver.get('https://en.wikipedia.org/wiki/Jagged_array')
    const title = await driver.getTitle()
    expect(title).toBeDefined()
  })

})
