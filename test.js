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

  await Promise.all([
  await page.click('a.btn.btn-lg.btn-primary'),
  await   page.waitForNavigation()
]);


  //form input

  var first_name="hi";
  const firstName= await page.$('#contract_applications_forms_contract_application_form_applicant_information_attributes_first_name');
  await firstName.type(first_name);
  

  var last_name="bye";
  const lastName= await page.$('#contract_applications_forms_contract_application_form_applicant_information_attributes_last_name');
  await lastName.type(last_name);

  var ssn_itin="123456789";
  const ssnItin= await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_identification_number');
  await ssnItin.type(ssn_itin);

  var confirm_ssn="123456789";
  const confirmSsn= await page.$('#identification_number_confirmation');
  await confirmSsn.type(ssn_itin);

  var mobile_number="9876543210";
  const mobileNumber= await page.$('#contract_applications_forms_contract_application_form_applicant_information_attributes_primary_phone_number');
  await mobileNumber.type(mobile_number);

  var street_address="Street Address 123 House";
  const streetAddress= await page.$('#contract_applications_forms_contract_application_form_applicant_information_attributes_street_address');
  await streetAddress.type(street_address);

  var apt_number="3rd";
  const aptNumber= await page.$('#contract_applications_forms_contract_application_form_applicant_information_attributes_autofill_selected_secondary_address');
  await aptNumber.type(apt_number);

  var city_name="City name";
  const cityName= await page.$('#contract_applications_forms_contract_application_form_applicant_information_attributes_city');
  await cityName.type(city_name);

  var state_code="IL";
  const stateCode= await page.$('#contract_applications_forms_contract_application_form_applicant_information_attributes_state_code');
  await stateCode.type(state_code);


  
  
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();