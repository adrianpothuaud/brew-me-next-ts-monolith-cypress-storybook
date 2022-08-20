import { expect } from 'chai'
import { chromium } from 'playwright'

describe('Client signup nominal', function () {
  it('When a Client is not yet registered, and he goes to our website, then he could go to the Client registration form', async function () {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')
    await page.click('a[data-cy=client-signup-link]')
    await page.waitForURL('http://localhost:3000/client-signup')
    const title = await page.title()
    expect(title).to.equal('Brew Me | Sign Up as Client')
  })
})
