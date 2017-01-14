/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />

function createValidatorFields(registerSelector, sendButtonSelector, acceptSelector, ssnInputSelector, phoneInputSelector, zipInputSelector, birthInputSelector, testFormSelector, 
    userInputSelector, passwordInputSelector, passwordConfirmInputSelector, realNameInputSelector, emailInputSelector, acceptInputSelector)
{
    //defining Options
    let registerOptions: jqwidgets.ExpanderOptions = {
        toggleMode: 'none',
        width: '300px',
        height: '385px',
        showArrow: false
    };
    //creating an instance
    let registerInstance: jqwidgets.jqxExpander = jqwidgets.createInstance(registerSelector, 'jqxExpander', registerOptions);

    //defining Options
    let sendButtonOptions: jqwidgets.ButtonOptions = {
        width: 60,
        height: 25 
    };
    //creating an instance
    let sendButtonInstance: jqwidgets.jqxButton = jqwidgets.createInstance(sendButtonSelector, 'jqxButton', sendButtonOptions);

    //defining Options
    let acceptInputOptions: jqwidgets.CheckBoxOptions = {
        width: 130
    };
    //creating an instance
    let acceptInputInstance: jqwidgets.jqxCheckBox = jqwidgets.createInstance(acceptSelector, 'jqxCheckBox', acceptInputOptions);
    sendButtonInstance.addEventHandler('click', function () {
        validatorInstance.validate;
    });

    //defining Options
    let maskedInputOptions: jqwidgets.MaskedInputOptions = {
        mask: '###-##-####',
        width: 150,
        height: 22 
    };

    let inputOptions = { width: 150, height: 22 };
    let passwordInputOptions = { width: 144, height: 22 };
    //creating an instance
    let ssnInput: jqwidgets.jqxMaskedInput = jqwidgets.createInstance(ssnInputSelector, 'jqxMaskedInput', maskedInputOptions);

    maskedInputOptions.mask = '(###)###-####';
    let phoneInputInstance: jqwidgets.jqxMaskedInput = jqwidgets.createInstance(phoneInputSelector, 'jqxMaskedInput', maskedInputOptions);

    maskedInputOptions.mask = '#####-####';
    let zipInputInstance: jqwidgets.jqxMaskedInput = jqwidgets.createInstance(zipInputSelector, 'jqxMaskedInput', maskedInputOptions);

    let userInputInstance: jqwidgets.jqxInput = jqwidgets.createInstance(userInputSelector, 'jqxInput', inputOptions);
    let passwordInputInstance: jqwidgets.jqxPasswordInput = jqwidgets.createInstance(passwordInputSelector, 'jqxPasswordInput', passwordInputOptions);
    let passwordConfirmInstance: jqwidgets.jqxPasswordInput = jqwidgets.createInstance(passwordConfirmInputSelector, 'jqxPasswordInput', passwordInputOptions);
    let realNameInstance: jqwidgets.jqxInput = jqwidgets.createInstance(realNameInputSelector, 'jqxInput', inputOptions);
    let emailInputInstance: jqwidgets.jqxInput = jqwidgets.createInstance(emailInputSelector, 'jqxInput', inputOptions);

    //defining Options
    let dateTimeInputOptions: jqwidgets.DateTimeInputOptions = {
        width: 150,
        height: 22
   };
    //creating an instance
    let dateTimeInputInstance: jqwidgets.jqxDateTimeInput = jqwidgets.createInstance(birthInputSelector, 'jqxDateTimeInput', dateTimeInputOptions);

    //defining Options
    let validatorOptions: jqwidgets.ValidatorOptions = {
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
                rule: function (input, commit)
                {
                    let date = dateTimeInputInstance.getDate();
                    let startDate = new Date('1/1/1900 00:00:00');
                    let endDate = new Date('1/1/2014 00:00:00');
                    let result = date > startDate && date < endDate;
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
                rule: function (input, commit)
                {
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
    let validatorInstance: jqwidgets.jqxValidator = jqwidgets.createInstance(testFormSelector, 'jqxValidator', validatorOptions);  
}
