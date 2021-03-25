const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ams.acimacredit.com/contract_applications/new?manifest_guid=apmf-fc04494b-ce3f-47fc-9e2f-af5fa5505c5d&lang=en.leases');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();