window.onload = function () {
    'use strict';
    
    // initialize validator.
    const rules = [

        { input: '#userInput', message: 'Username is required!', action: 'keyup, blur', type: 'required' },
        { input: '#userInput', message: 'Your username must be between 3 and 12 characters!', action: 'keyup, blur', type: 'stringLength', min: 3, max: 12 },

        { input: '#passwordInput', message: 'Password is required!', action: 'keyup, blur', type: 'required' },
        { input: '#passwordInput', message: 'Your password must be between 4 and 12 characters!', action: 'keyup, blur', type: 'stringLength', min: 4, max: 12 },

        { input: '#passwordConfirmInput', message: 'Confirm Password is required!', action: 'keyup, blur', type: 'required' },
        { input: '#passwordConfirmInput', message: 'Passwords doesn\'t match!', action: 'keyup, focus', type: 'custom',
            validationCallback: function (input) {
                if (input.value === document.querySelector('#passwordInput').value) {
                    return true;
                }
                return false;
            }
        },

        { input: '#realNameInput', message: 'Real Name is required!', action: 'keyup, blur', type: 'required' },
        { input: '#realNameInput', message: 'Your real name must contain only letters!', action: 'keyup', type: 'pattern', pattern: /^[^0-9]+$/ },
        { input: '#realNameInput', message: 'Your real name must be between 3 and 12 characters!', action: 'keyup', type: 'stringLength', min: 3, max: 12 },

        { input: '#birthInput', message: 'Your birth date must be between 1/1/1900 and 1/1/2025.', action: 'change', type: 'custom', validationCallback: function () {
                var date = document.querySelector('#birthInput').value;
                var result = date.year() >= 1900 && date.year() <= 2025;
                return result;
            }
        },

        { input: '#emailInput', message: 'E-mail is required!', action: 'keyup, blur', type: 'required' },
        { input: '#emailInput', message: 'Invalid e-mail!', action: 'keyup', type: 'email' },

        //{ input: '#ssnInput', message: 'Invalid SSN!', action: 'valuechanged, blur', type: 'ssn' },
        { input: '#ssnInput', message: 'Invalid SSN!', action: 'valuechanged, blur', type: 'pattern', pattern: /\d{3}-\d{2}-\d{4}/ },

        { input: '#phoneInput', message: 'Invalid phone number!', action: 'valuechanged, blur', type: 'phone' },
        //{ input: '#phoneInput', message: 'Invalid phone number!', action: 'valuechanged, blur', type: 'pattern', pattern: /^\(\d{3}\)(\d){3}-(\d){4}$/ },

        { input: '#zipInput', message: 'Invalid zip code!', action: 'valuechanged, blur', type: 'zipCode' },
        //{ input: '#zipInput', message: 'Invalid zip code!', action: 'valuechanged, blur', type: 'pattern', pattern: /^(^\d{5}$)|(^\d{5}-\d{4}$)|(\d{3}-\d{2}-\d{4})$/ },

        { input: '.genderRadio', message: 'You must select your gender', action: 'change', type: 'required' },
        { input: '.genderRadio', message: 'Please choose Male or Female', action: 'change', type: 'custom',
            validationCallback: function () {
                //change event
                if (event.target.value) {
                    return event.target.value !== 'alien';
                }

                //form submit
                let checkboxes = document.querySelectorAll('.genderRadio');
                let result = true;

                if ((checkboxes) && (checkboxes.length > 1)) {
                    for (let i = 0; i < checkboxes.length; i++) {
                        let checkbox = checkboxes[i];
                        if (checkbox.checked && (checkbox.value === 'alien')) {
                            result = false;
                        }
                    }
                }
                return result;
            }
        },

        { input: '#terms', message: 'You must agree to the Terms and Conditions', action: 'change', type: 'required' },

    ];

    //SmartValidator
    const validator = new Smart.Utilities.Validator(rules, '#validationsummary');

    document.querySelector('#submitFormButton').addEventListener('click', () => {
        validator.validate();
    });

}
