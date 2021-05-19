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

    //accept cookies
    await Promise.all([
        await page.click('.aff-button'),
        await   page.waitForNavigation()
    ]);

    //start application not working
    //   await Promise.all([
    //     await page.click('button[class~="text-natural"]'),
    //     // await page.click('.text-natural.card-button.mx-auto.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default'),
    //     await   page.waitForNavigation()
    // ]);
    //after  manual start application
    await   page.waitForNavigation()

    //verify page
    
    var mobile_number = process.env.mobile_number;
    const mobileNumber = await page.$('#mobile');
    await mobileNumber.type(mobile_number);


    var ssn_itin = process.env.ssn_itin;

    // const str = 'ECMAScript 2015';
    const n = 4;
 
    console.log(ssn_itin.substring(ssn_itin.length - n));
    var newr=ssn_itin.substring(ssn_itin.length - n);
    const ssnItin = await page.$('#ssnlastfour');
    await ssnItin.type(newr);

    await page.screenshot({
        path: 'american.png'
    });
})();