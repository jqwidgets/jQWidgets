/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createValidatorFields(registerSelector, sendButtonSelector, acceptSelector, ssnInputSelector, phoneInputSelector, zipInputSelector, birthInputSelector, testFormSelector, userInputSelector, passwordInputSelector, passwordConfirmInputSelector, realNameInputSelector, emailInputSelector, acceptInputSelector) {
    //defining Options
    var registerOptions = {
        toggleMode: 'none',
        width: '300px',
        height: '385px',
        showArrow: false
    };
    //creating an instance
    var registerInstance = jqwidgets.createInstance(registerSelector, 'jqxExpander', registerOptions);
    //defining Options
    var sendButtonOptions = {
        width: 60,
        height: 25
    };
    //creating an instance
    var sendButtonInstance = jqwidgets.createInstance(sendButtonSelector, 'jqxButton', sendButtonOptions);
    //defining Options
    var acceptInputOptions = {
        width: 130
    };
    //creating an instance
    var acceptInputInstance = jqwidgets.createInstance(acceptSelector, 'jqxCheckBox', acceptInputOptions);
    sendButtonInstance.addEventHandler('click', function () {
        validatorInstance.validate;
    });
    //defining Options
    var maskedInputOptions = {
        mask: '###-##-####',
        width: 150,
        height: 22
    };
    var inputOptions = { width: 150, height: 22 };
    var passwordInputOptions = { width: 144, height: 22 };
    //creating an instance
    var ssnInput = jqwidgets.createInstance(ssnInputSelector, 'jqxMaskedInput', maskedInputOptions);
    maskedInputOptions.mask = '(###)###-####';
    var phoneInputInstance = jqwidgets.createInstance(phoneInputSelector, 'jqxMaskedInput', maskedInputOptions);
    maskedInputOptions.mask = '#####-####';
    var zipInputInstance = jqwidgets.createInstance(zipInputSelector, 'jqxMaskedInput', maskedInputOptions);
    var userInputInstance = jqwidgets.createInstance(userInputSelector, 'jqxInput', inputOptions);
    var passwordInputInstance = jqwidgets.createInstance(passwordInputSelector, 'jqxPasswordInput', passwordInputOptions);
    var passwordConfirmInstance = jqwidgets.createInstance(passwordConfirmInputSelector, 'jqxPasswordInput', passwordInputOptions);
    var realNameInstance = jqwidgets.createInstance(realNameInputSelector, 'jqxInput', inputOptions);
    var emailInputInstance = jqwidgets.createInstance(emailInputSelector, 'jqxInput', inputOptions);
    //defining Options
    var dateTimeInputOptions = {
        width: 150,
        height: 22
    };
    //creating an instance
    var dateTimeInputInstance = jqwidgets.createInstance(birthInputSelector, 'jqxDateTimeInput', dateTimeInputOptions);
    //defining Options
    var validatorOptions = {
        rules: [
            {
                input: userInputSelector,
                message: 'Username is required!',
                action: 'keyup, blur',
                rule: 'required'
            },
            {
                input: userInputSelector,
                message: 'Your username must be between 3 and 12 characters!',
                action: 'keyup, blur',
                rule: 'length=3,12'
            },
            {
                input: realNameInputSelector,
                message: 'Real Name is required!',
                action: 'keyup, blur',
                rule: 'required'
            },
            {
                input: realNameInputSelector,
                message: 'Your real name must contain only letters!',
                action: 'keyup',
                rule: 'notNumber'
            },
            {
                input: realNameInputSelector,
                message: 'Your real name must be between 3 and 12 characters!',
                action: 'keyup',
                rule: 'length=3,12'
            },
            {
                input: birthInputSelector,
                message: 'Your birth date must be between 1/1/1900 and 1/1/2014.',
                action: 'valueChanged',
                rule: function (input, commit) {
                    var date = dateTimeInputInstance.getDate();
                    var startDate = new Date('1/1/1900 00:00:00');
                    var endDate = new Date('1/1/2014 00:00:00');
                    var result = date > startDate && date < endDate;
                    // call commit with false, when you are doing server validation and you want to display a validation error on this field. 
                    return result;
                }
            },
            {
                input: passwordInputSelector,
                message: 'Password is required!',
                action: 'keyup, blur',
                rule: 'required'
            },
            {
                input: passwordInputSelector,
                message: 'Your password must be between 4 and 12 characters!',
                action: 'keyup, blur',
                rule: 'length=4,12'
            },
            {
                input: passwordConfirmInputSelector,
                message: 'Password is required!',
                action: 'keyup, blur',
                rule: 'required'
            },
            {
                input: passwordConfirmInputSelector,
                message: 'Passwords doesn\'t match!',
                action: 'keyup, focus',
                rule: function (input, commit) {
                    // call commit with false, when you are doing server validation and you want to display a validation error on this field. 
                    if (input.val() === passwordInputInstance.val()) {
                        return true;
                    }
                    return false;
                }
            },
            {
                input: emailInputSelector,
                message: 'E-mail is required!',
                action: 'keyup, blur',
                rule: 'required'
            },
            {
                input: emailInputSelector,
                message: 'Invalid e-mail!',
                action: 'keyup',
                rule: 'email'
            },
            {
                input: ssnInputSelector,
                message: 'Invalid SSN!',
                action: 'valuechanged, blur',
                rule: 'ssn'
            },
            {
                input: phoneInputSelector,
                message: 'Invalid phone number!',
                action: 'valuechanged, blur',
                rule: 'phone'
            },
            {
                input: zipInputSelector,
                message: 'Invalid zip code!',
                action: 'valuechanged, blur',
                rule: 'zipCode'
            },
            {
                input: acceptInputSelector,
                message: 'You have to accept the terms',
                action: 'change',
                rule: 'required',
                position: 'right:0,0'
            }]
    };
    var validatorInstance = jqwidgets.createInstance(testFormSelector, 'jqxValidator', validatorOptions);
}
//# sourceMappingURL=typescript-validator.js.map