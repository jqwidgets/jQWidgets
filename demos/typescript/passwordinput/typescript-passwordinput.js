/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createForm(createAccount, firstName, lastName, userName, password, passwordConfirm, birthday, gender, submit, form) {
    // Create jqxExpander.
    var expanderOptions = { toggleMode: 'none', width: '350px', showArrow: false };
    var expander = jqwidgets.createInstance(createAccount, 'jqxExpander', expanderOptions);
    // Create jqxInput.
    var inputsOptions = { width: '300px', height: '20px' };
    var firstNameInput = jqwidgets.createInstance(firstName, 'jqxInput', inputsOptions);
    var lastNameInput = jqwidgets.createInstance(lastName, 'jqxInput', inputsOptions);
    var userNameInput = jqwidgets.createInstance(userName, 'jqxInput', inputsOptions);
    // Initialization options - validated in typescript
    // jqwidgets.PasswordInputOptions has generated TS definition
    var options = {
        width: '300px',
        height: '20px',
        showStrength: true,
        showStrengthPosition: "right"
    };
    // Creates an instance of the password input
    var passwordInstance = jqwidgets.createInstance(password, 'jqxPasswordInput', options);
    var optionsPasswordConfirm = {
        width: '300px',
        height: '20px'
    };
    var passwordConfirmInstance = jqwidgets.createInstance(passwordConfirm, 'jqxPasswordInput', optionsPasswordConfirm);
    // Create jqxDateTimeInpput.
    var optionsDateTimeInput = { width: '300px', height: '20px' };
    var dateTimeInput = jqwidgets.createInstance(birthday, 'jqxDateTimeInput', optionsDateTimeInput);
    // Create jqxDropDownList.
    var genders = ["male", "female"];
    var optionsDropDownList = {
        source: genders,
        selectedIndex: -1,
        width: '300px',
        height: '20px',
        placeHolder: "I am...",
        dropDownHeight: "50px"
    };
    var genderDropDownList = jqwidgets.createInstance(gender, 'jqxDropDownList', optionsDropDownList);
    // Create jqxButton.
    var buttonOptions = {};
    var submitButton = jqwidgets.createInstance(submit, 'jqxButton', buttonOptions);
    // Create jqxValidator.
    var validationOptions = {
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
                    var firstPassword = passwordInstance.val;
                    var secondPassword = passwordConfirmInstance.val;
                    return firstPassword == secondPassword;
                }
            },
            {
                input: gender,
                message: "Gender is required!",
                action: 'blur',
                rule: function (input, commit) {
                    var index = genderDropDownList.getSelectedIndex();
                    return index != -1;
                }
            }
        ],
        hintType: "label"
    };
    var validationInstance = jqwidgets.createInstance(submit, 'jqxValidator', validationOptions);
    // Validate the Form.
    submitButton.addEventHandler('click', function (event) {
        validationInstance.validate();
    });
    // Update the jqxExpander's content if the validation is successful.
    validationInstance.addEventHandler('validationSuccess', function (event) {
        expander.setContent('<span style="margin: 10px;">Account created.</span>');
    });
}
//# sourceMappingURL=typescript-passwordinput.js.map