window.onload = function () {
    'use strict';

    let maxDate = new Date();
    maxDate.setYear(maxDate.getYear() - 21);

    const rules = [

        //Email
        { input: '#email-validation', message: 'E-mail is required', action: 'keyup, blur', type: 'required' },
        { input: '#email-validation', message: 'Email is invalid', action: 'keyup', type: 'email' },

        //Password
        { input: '#password-validation', message: 'Password is required!', action: 'keyup, blur', type: 'required' },

        //Confirm password
        { input: '#confirm-password-validation', message: 'Confirm Password is required!', action: 'keyup, blur', type: 'required' },
        { input: '#confirm-password-validation', message: '\'Password\' and \'Confirm Password\' do not match.', action: 'keyup, blur', type: 'compare',
            comparisonTarget: function () {
                let password = document.querySelector('#password-validation');
                if (password) {
                    return password.value;
                }
            },
        },

        //Name
        { input: '#name-validation', message: 'Name is required!', action: 'keyup, blur', type: 'required' },
        { input: '#name-validation', message: 'Do not use digits in the Name.', action: 'keyup, blur', type: 'pattern', pattern: /^[^0-9]+$/ },
        { input: '#name-validation', message: 'Name must have at least 2 symbols', action: 'keyup, blur', type: 'stringLength', min: 2 },
        
        //Date
        //{ input: '#date-validation', message: 'Date of birth is required', action: 'change', type: 'required' },
        { input: '#date-validation', message: 'You must be at least 21 years old', action: 'change', type: 'range', max: maxDate, },
        
        //Country
        { input: '#country-validation', message: 'Country is required', action: 'change', type: 'required' },

        //City
        { input: '#city-validation', message: 'City is required', action: 'keyup, blur', type: 'required' },
        { input: '#city-validation', message: 'Do not use digits in the City name.', action: 'keyup, blur', type: 'pattern', pattern: /^[^0-9]+$/ },
        { input: '#city-validation', message: 'City must have at least 2 symbols', action: 'keyup, blur', type: 'stringLength', min: 2 },

        //Address
        { input: '#address-validation', message: 'Address is required', action: 'keyup, blur', type: 'required' },

        //Phone
        { input: '#phone-validation', message: 'The phone must have a correct USA phone format', action: 'valuechanged, blur', type: 'pattern', pattern: /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/ },

        //Post  code
        { input: '#post-code-validation', message: 'The post code must contains only digits', action: 'change', type: 'numeric' },
        { input: '#post-code-validation', message: 'The post code must have at least 4 symbols', action: 'change', type: 'stringLength', min: 4 },

        //Terms
        { input: '#termsInput', message: 'You must agree to the Terms and Conditions', action: 'change', type: 'required', },

    ];

    //SmartValidator
    const validator = new Smart.Utilities.Validator(rules, '#validationsummary');

    document.querySelector('#register').addEventListener('click', () => {
        validator.validate();
    });
    
};
