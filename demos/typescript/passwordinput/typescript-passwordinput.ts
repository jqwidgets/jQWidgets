/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createForm(createAccount, firstName, lastName, userName, password, passwordConfirm, birthday, gender, submit, form) {
    // Create jqxExpander.
    let expanderOptions: jqwidgets.ExpanderOptions = { toggleMode: 'none', width: '350px', showArrow: false };
    let expander: jqwidgets.jqxExpander = jqwidgets.createInstance(createAccount, 'jqxExpander', expanderOptions);
    // Create jqxInput.
    let inputsOptions: jqwidgets.InputOptions = { width: '300px', height: '20px' };
    let firstNameInput: jqwidgets.jqxInput = jqwidgets.createInstance(firstName, 'jqxInput', inputsOptions);
    let lastNameInput: jqwidgets.jqxInput = jqwidgets.createInstance(lastName, 'jqxInput', inputsOptions);
    let userNameInput: jqwidgets.jqxInput = jqwidgets.createInstance(userName, 'jqxInput', inputsOptions);

    // Initialization options - validated in typescript
    // jqwidgets.PasswordInputOptions has generated TS definition
    let options: jqwidgets.PasswordInputOptions = {
        width: '300px',
        height: '20px',
        showStrength: true,
        showStrengthPosition: "right"
    };

    // Creates an instance of the password input
    let passwordInstance: jqwidgets.jqxPasswordInput = jqwidgets.createInstance(password, 'jqxPasswordInput', options);

    let optionsPasswordConfirm: jqwidgets.PasswordInputOptions = {
        width: '300px',
        height: '20px'
    };
    let passwordConfirmInstance: jqwidgets.jqxPasswordInput = jqwidgets.createInstance(passwordConfirm, 'jqxPasswordInput', optionsPasswordConfirm);

    // Create jqxDateTimeInpput.
    let optionsDateTimeInput: jqwidgets.DateTimeInputOptions = { width: '300px', height: '20px' };
    let dateTimeInput: jqwidgets.jqxDateTimeInput = jqwidgets.createInstance(birthday, 'jqxDateTimeInput', optionsDateTimeInput);

    // Create jqxDropDownList.
    let genders = ["male", "female"];
    let optionsDropDownList: jqwidgets.DropDownListOptions = {
        source: genders,
        selectedIndex: -1,
        width: '300px',
        height: '20px',
        placeHolder: "I am...",
        dropDownHeight: "50px"
    };
    let genderDropDownList: jqwidgets.jqxDropDownList = jqwidgets.createInstance(gender, 'jqxDropDownList', optionsDropDownList);

    // Create jqxButton.
    let buttonOptions: jqwidgets.ButtonOptions = {
        //theme: theme
    };
    let submitButton: jqwidgets.jqxButton = jqwidgets.createInstance(submit, 'jqxButton', buttonOptions);

    // Create jqxValidator.
    let validationOptions: jqwidgets.ValidatorOptions = {
        rules: [
            {
                input: firstName, message: "First name is required!", action: 'keyup, blur', rule: function (input, commit) {
                    return input.val() != "" && input.val() != "First";
                }
            },
            {
                input: lastName, message: "Last name is required!", action: 'keyup, blur', rule: function (input, commit) {
                    return input.val() != "" && input.val() != "Last";
                }
            },
            { input: userName, message: "Username is required!", action: 'keyup, blur', rule: 'required' },
            { input: password, message: "Password is required!", action: 'keyup, blur', rule: 'required' },
            { input: passwordConfirm, message: "Password is required!", action: 'keyup, blur', rule: 'required' },
            {
                input: passwordConfirm, message: "Passwords should match!", action: 'keyup, blur', rule: function (input, commit) {
                    let firstPassword = passwordInstance.val;
                    let secondPassword = passwordConfirmInstance.val;
                    return firstPassword == secondPassword;
                }
            },
            {
                input: gender,
                message: "Gender is required!",
                action: 'blur',
                rule: function (input, commit) {
                    let index = genderDropDownList.getSelectedIndex();
                    return index != -1;
                }
            }
        ],
        hintType: "label"
    };
    let validationInstance: jqwidgets.jqxValidator = jqwidgets.createInstance(submit, 'jqxValidator', validationOptions);

    // Validate the Form.
    submitButton.addEventHandler('click', function (event) {
        validationInstance.validate();
    });

    // Update the jqxExpander's content if the validation is successful.
    validationInstance.addEventHandler('validationSuccess', function (event) {
        expander.setContent('<span style="margin: 10px;">Account created.</span>');
    });
}