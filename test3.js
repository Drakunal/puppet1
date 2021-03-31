require('dotenv').config()
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    await page.goto('http://wstcrk.com/r4GfD', {
        "waitUntil": "networkidle0"
    });

    await Promise.all([

        await page.click('#submitNew'),
        await page.waitForNavigation()



    ]);
    //   await Promise.all([

    //     await page.click('a.btn.btn-lg.btn-primary'), //NEXT
    //     await   page.waitForSelector('a.btn.btn-lg.btn-primary')

    //     // await page.click('a.btn.btn-lg.btn-primary');
    //     // await   page.waitForNavigation()



    //   ]);

    //   await Promise.all([
    //   await page.click('a.btn.btn-lg.btn-primary'),
    //   await   page.waitForNavigation()
    // ]);


    //   //form input
    

    var first_name = process.env.first_name;
    const firstName = await page.$('#FirstName');
    await firstName.type(first_name);

    var middle_name = process.env.middle_name;
    const middleName = await page.$('#MiddleName');
    await middleName.type(middle_name);

    var last_name = process.env.last_name;
    const lastName = await page.$('#LastName');
    await lastName.type(last_name);

    // await waitForSelector('#IdNumber');

    var ssn_itin = process.env.ssn_itin;
    const ssnItin = await page.$('#IndividualNumberMasked');
    await ssnItin.click({
        clickCount: 3
    })
    await ssnItin.type(ssn_itin);
    

    var dob_dob = process.env.dob;
    const dobDob = await page.$('#BirthDate');
    await dobDob.click({
        clickCount: 3
    })
    await dobDob.type(dob_dob);
    
    
    // var id_type=process.env.id_type;
    // const idType= await page.$('#IdType');
    // await idType.type(id_type);







    var id_number=process.env.id_number;
    const idNumber= await page.$('#IdNumberMasked');
    await idNumber.type(id_number);

    
    // await page.click("#Agreement", {clickCount:1});
    await page.evaluate(()=>document.querySelector('#Agreement').click())

    

    await Promise.all([
   
        await page.click("#submit-button", {clickCount:1}), //first checkbox
        await   page.waitForNavigation()
    
        // await page.click('a.btn.btn-lg.btn-primary');
        // await   page.waitForNavigation()
         
       
    
      ]);

      

      // !next page
      
      var street_address=process.env.street_address;
      const streetAddress= await page.$('#StreetAddress');
      await streetAddress.type(street_address);

      var apt_number=process.env.apt_number;
      const aptNumber= await page.$('#AddressLineTwo');
      await aptNumber.type(apt_number);


      var zip_code=process.env.zip_code;
      const zipCode= await page.$('#ZipCode');
      await zipCode.type(zip_code);

      var city_name=process.env.city_name;
      const cityName= await page.$('#City');
      await cityName.type(city_name);


      //process.env.residence_type_id

      var residence_type_id="1";
      const residenceTypeId= await page.$('#ResidenceTypeId');
      await residenceTypeId.select(residence_type_id);



    //   var confirm_ssn=process.env.confirm_ssn;
    //   const confirmSsn= await page.$('#identification_number_confirmation');
    //   await confirmSsn.type(ssn_itin);

      var mobile_number=process.env.mobile_number;
      const mobileNumber= await page.$('#CellPhone');
      await mobileNumber.type(mobile_number);
      

    //   var mobile_number=process.env.mobile_number;
      const homePhoneNumber= await page.$('#HomePhone');
      await homePhoneNumber.type(mobile_number);

      var email_id=process.env.email_id;
      const emailId= await page.$('#Email');
      await emailId.type(email_id);

      const confirmEmailId= await page.$('#ConfirmEmail');
      await confirmEmailId.type(email_id);



      await Promise.all([
   
        await page.click("#submit-button", {clickCount:1}), //first checkbox
        await   page.waitForNavigation()
    
        // await page.click('a.btn.btn-lg.btn-primary');
        // await   page.waitForNavigation()
         
       
    
      ]);


      // !next page

      
      //income details step 3 of 5



      var income_type=process.env.income_type;
      const incomeType= await page.$('#IncomeTypeId');
    //   await incomeType.type(income_type);
      await incomeType.select(income_type);
      
      
if(income_type=="1"||income_type=="2"){ // if employeed full time or part time
     var employer_name=process.env.employer_name;
      const incomeType= await page.$('#employer');
      await incomeType.type(employer_name);


}



        var employment_start_date=process.env.employment_start_date;
        const employmentStartDate= await page.$('#EmploymentStartDate');
        await employmentStartDate.click({
            clickCount: 3
        })
        await employmentStartDate.type(employment_start_date);



      var monthly_income=process.env.monthly_income;
      const monthlyIncome= await page.$('#MonthlyIncome');
      await monthlyIncome.type(monthly_income);

      
      

      var often_paid=process.env.often_paid;
      const oftenPaid= await page.$('#PaymentFrequencyId');
    //   await incomeType.type(income_type);
      await oftenPaid.select(often_paid);
      

      var last_pay_date=process.env.last_pay_date;
      const lastPayDate= await page.$('#LastPaydate');
      await lastPayDate.click({
        clickCount: 3
    })
      await lastPayDate.type(last_pay_date);

      await page.waitForTimeout(20000);
      await Promise.all([
   
        await page.click("#submit-button", {clickCount:1}), //first checkbox
        await   page.waitForNavigation()
    
        // await page.click('a.btn.btn-lg.btn-primary');
        // await   page.waitForNavigation()
         
       
    
      ]); // when  next is clicked manually


      //! next page 4


      
      var bank_routing_number=process.env.bank_routing_number;
      const bankRoutingNumber= await page.$('#RoutingNumber');
      await bankRoutingNumber.type(bank_routing_number);


      
      var bank_account_number=process.env.bank_account_number;
      const bankAccountNumber= await page.$('#AccountNumber');
      await bankAccountNumber.type(bank_account_number);


      var bank_name=process.env.bank_name;
      const bankName= await page.$('#BankingInstitution');
      await bankName.type(bank_name);


      


      var account_open_date=process.env.account_open_date;
      const accountOpenDate= await page.$('#AccountOpenDate');
      await accountOpenDate.click({
        clickCount: 3
    })
      await accountOpenDate.type(account_open_date);


      await page.waitForTimeout(15000); // 15 seconds for entering all details
      await Promise.all([
   
        await page.click("#submit-button", {clickCount:1}), //first checkbox
        await   page.waitForNavigation()
    
        // await page.click('a.btn.btn-lg.btn-primary');
        // await   page.waitForNavigation()
         
       
    
      ]);
      //getting error


      //! next page, page 5


      var card_number=process.env.card_number;
      const cardNumber= await page.$('#CardNumber');
      await cardNumber.type(card_number);
      
      

      var expiration_date=process.env.expiration_date;
      const expirationDate= await page.$('#ExpirationDate');
      await expirationDate.click({
        clickCount: 3
    })
      await expirationDate.type(expiration_date);


      await Promise.all([
   
        await page.click("#submit-button", {clickCount:1}), //first checkbox
        await   page.waitForNavigation()
    
        // await page.click('a.btn.btn-lg.btn-primary');
        // await   page.waitForNavigation()
         
       
    
      ]);

    //   await incomeType.select(income_type);

    //   await Promise.all([
   
        // await page.click("#IsSameAsCellPhone", {clickCount:1}), //first checkbox
        // await   page.waitForNavigation()
    
        // await page.click('a.btn.btn-lg.btn-primary');
        // await   page.waitForNavigation()
         
       
    
    //   ]);


    

    
    

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





    



    //   var id_state=process.env.id_state;
    //   const idState= await page.$('#contract_applications_forms_contract_application_form_applicant_identity_attributes_card_state_code');
    //   await idState.type(id_state);





      

    //   // await page.waitForTimeout(4000);
    //   //selection
    //   var income_source=process.env.income_source;
    //   const incomeSource= await page.$('#contract_applications_forms_contract_application_form_applicant_primary_income_attributes_income_source');
    //   await incomeSource.type(income_source);
    //   // await page.select("select#first", income_source)

    //   var payment_method=process.env.payment_method;
    //   const paymentMethod= await page.$('#contract_applications_forms_contract_application_form_applicant_primary_income_attributes_payment_method');
    //   await paymentMethod.type(payment_method);

   


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

    await page.screenshot({
        path: 'example.png'
    });
    // await browser.close();
})();