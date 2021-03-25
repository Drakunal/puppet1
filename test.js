const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
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

  var zip_code="12345";
  const zipCode= await page.$('#contract_applications_forms_contract_application_form_applicant_information_attributes_zip_code');
  await zipCode.type(zip_code);

  var email_id="test@test.com";
  const emailId= await page.$('#contract_applications_forms_contract_application_form_applicant_information_attributes_email');
  await emailId.type(email_id);

  var dob_month="Jan";
  const dobMonth= await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_date_of_birth_month');
  await dobMonth.type(dob_month);

  var dob_day="12";
  const dobDay= await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_date_of_birth_day');
  await dobDay.type(dob_day);


  var dob_year="1990";
  const dobYear= await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_date_of_birth_year');
  await dobYear.type(dob_year);


  

  var id_type="U";
  const idType= await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_card_type');
  await idType.type(id_type);

  var id_number="123456";
  const idNumber= await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_card_number');
  await idNumber.type(id_number);

  

  var id_state="AL";
  const idState= await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_card_state_code');
  await idState.type(id_state);
  



  var bank_routing_number="123456";
  const bankRoutingNumber= await page.$('#contract_applications_forms_contract_application_form_banking_attributes_routing_number');
  await bankRoutingNumber.type(bank_routing_number);

  var bank_account_number="123456";
  const bankAccountNumber= await page.$('#contract_applications_forms_contract_application_form_banking_attributes_account_number');
  await bankAccountNumber.type(bank_account_number);

  var bank_name="Bank name";
  const bankName= await page.$('#contract_applications_forms_contract_application_form_banking_attributes_bank_name');
  await bankName.type(bank_name);

  //selection
  var income_source="military";
  const incomeSource= await page.$('#contract_applications_forms_contract_application_form_applicant_primary_income_attributes_income_source');
  await incomeSource.type(income_source);
  // await page.select("select#first", income_source)

  var payment_method="direct_deposit";
  const paymentMethod= await page.$('#contract_applications_forms_contract_application_form_applicant_primary_income_attributes_payment_method');
  await paymentMethod.type(payment_method);

  var monthly_income="10000";
  const monthlyIncome= await page.$('#contract_applications_forms_contract_application_form_applicant_primary_income_attributes_monthly_net');
  await monthlyIncome.type(monthly_income);
  
  await page.screenshot({ path: 'example.png' });
  // await browser.close();
})();