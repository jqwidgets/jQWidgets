/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createMaskedInput(numeric, zipCode, ssn, phone, regex, disabled, button) {
    // initialization options - validated in typescript
    // jqwidgets.MaskedInputOptions has generated TS definition
    var numericOptions = {
        width: '250px',
        height: '25px'
    };
    // creates an instance
    var numericMaskedInput = jqwidgets.createInstance(numeric, 'jqxMaskedInput', numericOptions);
    var zipCodeOptions = {
        width: 250,
        height: 25,
        mask: '#####-####'
    };
    var zipCodeMaskedInput = jqwidgets.createInstance(zipCode, 'jqxMaskedInput', zipCodeOptions);
    var ssnOptions = {
        width: 250,
        height: 25,
        mask: '###-##-####'
    };
    var ssnMaskedInput = jqwidgets.createInstance(ssn, 'jqxMaskedInput', ssnOptions);
    var phoneOptions = {
        width: 250,
        height: 25,
        mask: '(###)###-####'
    };
    var phoneMaskedInput = jqwidgets.createInstance(phone, 'jqxMaskedInput', phoneOptions);
    var regexOptions = {
        width: 250,
        height: 25,
        mask: '[0-2][0-5][0-5].[0-2][0-5][0-5].[0-2][0-5][0-5].[0-2][0-5][0-5]'
    };
    var regexMaskedInput = jqwidgets.createInstance(regex, 'jqxMaskedInput', regexOptions);
    var disabledOptions = {
        width: 250,
        height: 25,
        disabled: true
    };
    var disabledMaskedInput = jqwidgets.createInstance(disabled, 'jqxMaskedInput', disabledOptions);
    var options = {};
    var clearButton = jqwidgets.createInstance(button, 'jqxButton', options);
    clearButton.addEventHandler('click', function () {
        numericMaskedInput.clear();
        zipCodeMaskedInput.clear();
        ssnMaskedInput.clear();
        phoneMaskedInput.clear();
        regexMaskedInput.clear();
        disabledMaskedInput.clear();
    });
}
//# sourceMappingURL=typescript-maskedinput.js.map