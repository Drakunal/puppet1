const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://ams.acimacredit.com/contract_applications/new?manifest_guid=apmf-063b28b6-9d58-4430-8540-eb15f09ebad7&lang=en.leases' ,{"waitUntil" : "networkidle0"});

  await Promise.all([
   
    await  page.click('a.btn.btn-primary'),
    await   page.waitForNavigation()

     

  ]);
  await Promise.all([
   
    await page.click('a.btn.btn-lg.btn-primary'), //NEXT
    await   page.waitForSelector('a.btn.btn-lg.btn-primary')

    // await page.click('a.btn.btn-lg.btn-primary');
    // await   page.waitForNavigation()
     
   

  ]);

   
  await page.click('a.btn.btn-lg.btn-primary');
  await   page.waitForNavigation();
  
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();