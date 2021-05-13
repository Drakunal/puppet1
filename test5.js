//American Finance
require('dotenv').config()
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://sv1.americanfirstfinance.com/application/7827/1', {
        "waitUntil": "networkidle0"
    });
    //await page.click('input[value="google"][type="submit"]');
   
    // await page.waitForTimeout(4000);
    await Promise.all([
        await page.click('.aff-button'),
        await   page.waitForNavigation()
    ]);
      await Promise.all([
        await page.click('button[class~="text-natural"]'),
        // await page.click('.text-natural.card-button.mx-auto.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default'),
        await   page.waitForNavigation()
    ]);

    await page.screenshot({
        path: 'american.png'
    });
})();