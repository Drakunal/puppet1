require('dotenv').config()
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    await page.goto('https://apply.kornerstonecredit.com/new?r=14814', {
        "waitUntil": "networkidle0"
    });

    // await Promise.all([

    //     await page.click('a.btn.btn-primary'),
    //     await page.waitForNavigation()



    // ]);
    // await Promise.all([

    //     await page.click('a.btn.btn-lg.btn-primary'), //NEXT
    //     await page.waitForSelector('a.btn.btn-lg.btn-primary')

    //     // await page.click('a.btn.btn-lg.btn-primary');
    //     // await   page.waitForNavigation()



    // ]);

    // await Promise.all([
    //     await page.click('a.btn.btn-lg.btn-primary'),
    //     await page.waitForNavigation()
    // ]);


    // //form input

    var first_name = process.env.first_name;
    const firstName = await page.$('#firstName');
    await firstName.type(first_name);


    var last_name = process.env.last_name;
    const lastName = await page.$('#lastName');
    await lastName.type(last_name);

    var street_address = process.env.street_address;
    const streetAddress = await page.$('#address1');
    await streetAddress.type(street_address);

    var apt_number = process.env.apt_number;
    const aptNumber = await page.$('#address2');
    await aptNumber.type(apt_number);

    var zip_code = process.env.zip_code;
    const zipCode = await page.$('#zipCode');
    await zipCode.type(zip_code);

    var city_name = process.env.city_name;
    const cityName = await page.$('#city');
    await cityName.type(city_name);

    
    var dob_dob = process.env.dob;
    const dobDob = await page.$('#dateOfBirth');
    await dobDob.click({clickCount:3})
    await dobDob.type(dob_dob);
    
    var ssn_itin = process.env.ssn_itin;
    const ssnItin = await page.$('#ssn');
    await ssnItin.type(ssn_itin);

    var id_number = process.env.id_number;
    const idNumber = await page.$('#idNumber');
    await idNumber.type(id_number);

    // var id_state = process.env.id_state;
    // const idState = await page.$('#idState');
    // await idState.type(id_state);

    // await   page.waitForSelector('state')


    // var state_code = process.env.state_code;
    // const stateCode = await page.$('#state');
    // await stateCode.type(state_code);
    // await page.select("#state", state_code)


    var mobile_number = process.env.mobile_number;
    const mobileNumber = await page.$('#phoneNumber');
    await mobileNumber.type(mobile_number);

    var email_id = process.env.email_id;
    const emailId = await page.$('#email');
    await emailId.type(email_id);
    


    
    const confirmemailId = await page.$('#confirmEmail');
    await confirmemailId.type(email_id);


    var employer_name = process.env.employer_name;
    const employerName = await page.$('#employerName');
    await employerName.type(employer_name);


    var employer_phone_number = process.env.employer_phone_number;
    const employerPhoneNumber = await page.$('#employerPhoneNumber');
    await employerPhoneNumber.type(employer_phone_number);
    
    

    var next_pay_date = process.env.next_pay_date;
    const nextPayDate = await page.$('#paidOnDate');
    await nextPayDate.type(next_pay_date);


    var last_paid_amount = process.env.last_paid_amount;
    const lastPaidAmount = await page.$('#paidAmount');
    await lastPaidAmount.type(last_paid_amount);
    
  
    
  
    var bank_routing_number = process.env.bank_routing_number;
    const bankRoutingNumber = await page.$('#routingNumber');
    await bankRoutingNumber.type(bank_routing_number);

    
    var bank_account_number = process.env.bank_account_number;
    const bankAccountNumber = await page.$('#accountNumber');
    await bankAccountNumber.type(bank_account_number);

    
    const confirmBankAccountNumber = await page.$('#confirmAccountNumber');
    await confirmBankAccountNumber.type(bank_account_number);
    



    var reference_name = process.env.reference_name;
    const referenceName = await page.$('#referenceName');
    await referenceName.type(reference_name);
   
    var reference_phone_number = process.env.reference_phone_number;
    const referencePhoneNumber = await page.$('#referencePhoneNumber');
    await referencePhoneNumber.type(reference_phone_number);


    var e_signature = process.env.e_signature;
    const eSignature = await page.$('#eSignature');
    await eSignature.type(e_signature);

    
    
  

    // var dob_day = process.env.dob_day;
    // const dobDay = await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_date_of_birth_day');
    // await dobDay.type(dob_day);


    // var dob_year = process.env.dob_year;
    // const dobYear = await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_date_of_birth_year');
    // await dobYear.type(dob_year);




    // var id_type = process.env.id_type;
    // const idType = await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_card_type');
    // await idType.type(id_type);

    


    




    

    // // var bank_name=process.env.bank_name;
    // // const bankName= await page.$('#contract_applications_forms_contract_application_form_banking_attributes_bank_name');
    // // await bankName.type(bank_name);

    // // await page.waitForTimeout(4000);
    // //selection
    // var income_source = process.env.income_source;
    // const incomeSource = await page.$('#contract_applications_forms_contract_application_form_applicant_primary_income_attributes_income_source');
    // await incomeSource.type(income_source);
    // // await page.select("select#first", income_source)

    // var payment_method = process.env.payment_method;
    // const paymentMethod = await page.$('#contract_applications_forms_contract_application_form_applicant_primary_income_attributes_payment_method');
    // await paymentMethod.type(payment_method);

    // var monthly_income = process.env.monthly_income;
    // const monthlyIncome = await page.$('#contract_applications_forms_contract_application_form_applicant_primary_income_attributes_monthly_net');
    // await monthlyIncome.type(monthly_income);


    // // var often_paid=process.env.often_paid;
    // // const oftenPaid= await page.$('#contract_applications_forms_contract_application_form_applicant_primary_income_attributes_schedule_frequency_twice_a_month');
    // // await oftenPaid.click();

    // await Promise.all([

    //     await page.click("#remember", {
    //         clickCount: 1
    //     }), //first checkbox
    //     await page.waitForSelector('#contract_applications_forms_contract_application_form_contract_details_attributes_consent_to_automated_communications')

    //     // await page.click('a.btn.btn-lg.btn-primary');
    //     // await   page.waitForNavigation()



    // ]);

    // await page.click("#contract_applications_forms_contract_application_form_contract_details_attributes_consent_to_automated_communications", {
    //     clickCount: 1
    // });

    await page.screenshot({
        path: 'example1.png'
    });
    // await browser.close();
})();