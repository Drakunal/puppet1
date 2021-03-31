require('dotenv').config()
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  await page.goto('https://apply.snapfinance.com/?paramId=%2BDuwQdYomRXi1E%2BWcXyAQsljS1AwpiW%2FaDIok%2F6DV5NmRz%2BZDSyOH9eEytMD8rETnFaIlRYqs%2BztIjfoOxmMLg%3D%3D' ,{"waitUntil" : "networkidle0"});

  await Promise.all([
   
    await  page.click('#continue'),
    await   page.waitForNavigation()

     

  ]);
  // await page.waitForSelector('button.mat-focus-indicator.continue-button.mat-flat-button.mat-button-base.mat-primary');
  // await Promise.all([
   
  //   await  page.click('button.mat-focus-indicator.continue-button.mat-flat-button.mat-button-base.mat-primary'),
  //   await   page.waitForNavigation()

     

  // ]);
  await page.waitForTimeout(2000);
  await   page.waitForNavigation();
//   await Promise.all([
   
//     await page.click('a.btn.btn-lg.btn-primary'), //NEXT
//     await   page.waitForSelector('a.btn.btn-lg.btn-primary')

//     // await page.click('a.btn.btn-lg.btn-primary');
//     // await   page.waitForNavigation()
     
   

//   ]);




//   //form input

  var first_name=process.env.first_name;
  const firstName= await page.$('#firstName');
  await firstName.type(first_name);
  

  var last_name=process.env.last_name;
  const lastName= await page.$('#lastName');
  await lastName.type(last_name);

  var mobile_number=process.env.mobile_number;
  const mobileNumber= await page.$('#mobilePhoneNumber');
  await mobileNumber.type(mobile_number);

  var email_id=process.env.email_id;
  const emailId= await page.$('#emailAddress');
  await emailId.type(email_id);

  await Promise.all([
    await page.click('#submitbtn'),
    await   page.waitForNavigation()
  ]);

  // next page
  await page.waitForTimeout(50000);//50 seconds to enter the otp and press verify
  await Promise.all([
    await page.click('#submitbtn'),
    await   page.waitForNavigation()
  ]);
  //after mobile otp verification

  var street_address=process.env.street_address;
  const streetAddress= await page.$('#homeAddress');
  await streetAddress.type(street_address);

  var zip_code=process.env.zip_code;
  const zipCode= await page.$('#zipCode');
  await zipCode.type(zip_code);

  // var apt_number=process.env.apt_number;
  // const aptNumber= await page.$('#apartment/suite');
  // await aptNumber.type(apt_number);


  var rent_or_own=process.env.rent_or_own;
  if(rent_or_own=="rent"){
    // const rent= await page.$('#apartment/suite');
    await page.click('#rentbtn');

  }
  else if(rent_or_own=="own"){
    // const own= await page.$('#apartment/suite');
    await page.click('#ownbtn');

  }


  var years_lived_in_address=process.env.years_lived_in_address;
  if(years_lived_in_address=="0")// for less than  1 years
  {
    // const rent= await page.$('#apartment/suite');
    await page.click('#lessthanonebtn');

  }
  else if(years_lived_in_address>="1"&&years_lived_in_address<"3")//greater than =1 and less than 3
  {
    // const own= await page.$('#apartment/suite');
    await page.click('#onetothreebtn');

  }

  else if(years_lived_in_address>="3"&&years_lived_in_address<"5")//greater than =3 and less than 5
  {
    // const own= await page.$('#apartment/suite');
    await page.click('#threetofivebtn');

  }
  else if(years_lived_in_address>="5")//greater than =5
  {
    // const own= await page.$('#apartment/suite');
    await page.click('#fiveormorebtn');

  }
  await page.waitForTimeout(5000);
  await Promise.all([
    await page.click('#submitbtn'),
    await   page.waitForNavigation()
  ]);

  

   
  // next page - identity
  var dob_dob = process.env.dob;
  const dobDob = await page.$('#dateOfBirth');
  await dobDob.type(dob_dob);


  

  var driver_license_number = process.env.driver_license_number;
  const driverLicenseNumber = await page.$('#driverLicenseNumber');
  await driverLicenseNumber.type(driver_license_number);



  var ssn_itin=process.env.ssn_itin;
  const ssnItin= await page.$('#socialSecurityNumberOrItin');
  await ssnItin.type(ssn_itin);

  await page.waitForTimeout(5000);


  await Promise.all([
    await page.click('#submitbtn'),
    await   page.waitForNavigation()
  ]);



  // next page - banking

  var bank_routing_number=process.env.bank_routing_number;
  const bankRoutingNumber= await page.$('#bankRoutingNumber');
  await bankRoutingNumber.type(bank_routing_number);


  var bank_account_number=process.env.bank_account_number;
  const bankAccountNumber= await page.$('#checkingAccountNumber');
  await bankAccountNumber.type(bank_account_number);


  var payment_method=process.env.payment_method;
  if(payment_method=="direct_deposit"){
    await page.click('#directdeposityesbtn');
  }
  else{
    await page.click('#directdepositnobtn');

  }

  await page.waitForTimeout(5000);
  await Promise.all([
    await page.click('#submitbtn'),
    await   page.waitForNavigation()
  ]);
  


  // next page income

  var income_type=process.env.income_type;
  if(income_type=="1"){
    await page.click('#fulltimebtn');
  }
  else if(income_type=="2"){
    await page.click('#parttimebtn');

  }else if(income_type=="3"){
    await page.click('#selfemployedbtn');
    

  }else if(income_type=="4"){
    await page.click('#benefitsbtn');

  }else if(income_type=="5"){
    await page.click('#otherbtn');

  }

  if(income_type=="1"||income_type=="2"||income_type=="3")
  {
    var company_name=process.env.company_name;
    const companyName= await page.$('#companyName');
    await companyName.type(company_name);
  
    
  
    var job_title=process.env.job_title;
    const jobTitle= await page.$('#jobTitle');
    await jobTitle.type(job_title);
  
  }



  var years_worked=process.env.years_worked;
  if(years_worked=="0")// for less than  1 years
  {
    // const rent= await page.$('#apartment/suite');
    await page.click('#incomelessthanone');

  }
  else if(years_worked>="1"&&years_worked<"3")//greater than =1 and less than 3
  {
    // const own= await page.$('#apartment/suite');
    await page.click('#incomeonetothree');

  }

  else if(years_worked>="3"&&years_worked<"5")//greater than =3 and less than 5
  {
    // const own= await page.$('#apartment/suite');
    await page.click('#incomethreetofive');

  }
  else if(years_worked>="5")//greater than =5
  {
    // const own= await page.$('#apartment/suite');
    await page.click('#incomefiveormore');

  }


  // var monthly_income=process.env.monthly_income;
  // const monthlyIncome= await page.$('input.mat-input-element.mat-form-field-autofill-control.ng-tns-c24-17.cdk-text-field-autofill-monitored.ng-dirty.ng-valid.ng-touched');
  // await monthlyIncome.type(monthly_income);



  await page.waitForTimeout(15000);
  await Promise.all([
    await page.click('#submitbtn'),
    await   page.waitForNavigation()
  ]);
  
  
  



  // await Promise.all([
   
  //   await page.click("#mat-checkbox-1-input", {clickCount:1}), //first checkbox
  //   await   page.waitForSelector('#mat-checkbox-2-input')

  // ]);
  
  // await page.click("#mat-checkbox-2-input", {clickCount:1});
  




 




//   var city_name=process.env.city_name;
//   const cityName= await page.$('#contract_applications_forms_contract_application_form_applicant_information_attributes_city');
//   await cityName.type(city_name);

//   var state_code=process.env.state_code;
//   const stateCode= await page.$('#contract_applications_forms_contract_application_form_applicant_information_attributes_state_code');
//   await stateCode.type(state_code);





//   var dob_month=process.env.dob_month;
//   const dobMonth= await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_date_of_birth_month');
//   await dobMonth.type(dob_month);

//   var dob_day=process.env.dob_day;
//   const dobDay= await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_date_of_birth_day');
//   await dobDay.type(dob_day);


//   var dob_year=process.env.dob_year;
//   const dobYear= await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_date_of_birth_year');
//   await dobYear.type(dob_year);


  

//   var id_type=process.env.id_type;
//   const idType= await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_card_type');
//   await idType.type(id_type);

//   var id_number=process.env.id_number;
//   const idNumber= await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_card_number');
//   await idNumber.type(id_number);

  

//   var id_state=process.env.id_state;
//   const idState= await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_card_state_code');
//   await idState.type(id_state);
  



  

//   // var bank_name=process.env.bank_name;
//   // const bankName= await page.$('#contract_applications_forms_contract_application_form_banking_attributes_bank_name');
//   // await bankName.type(bank_name);

//   // await page.waitForTimeout(4000);
//   //selection
//   var income_source=process.env.income_source;
//   const incomeSource= await page.$('#contract_applications_forms_contract_application_form_applicant_primary_income_attributes_income_source');
//   await incomeSource.type(income_source);
//   // await page.select("select#first", income_source)






//   // var often_paid=process.env.often_paid;
//   // const oftenPaid= await page.$('#contract_applications_forms_contract_application_form_applicant_primary_income_attributes_schedule_frequency_twice_a_month');
//   // await oftenPaid.click();
  
//   await Promise.all([
   
//     await page.click("#remember", {clickCount:1}), //first checkbox
//     await   page.waitForSelector('#contract_applications_forms_contract_application_form_contract_details_attributes_consent_to_automated_communications')

//     // await page.click('a.btn.btn-lg.btn-primary');
//     // await   page.waitForNavigation()
     
   

//   ]);
  
//   await page.click("#contract_applications_forms_contract_application_form_contract_details_attributes_consent_to_automated_communications", {clickCount:1});
  
  await page.screenshot({ path: 'example.png' });
  // await browser.close();
})();