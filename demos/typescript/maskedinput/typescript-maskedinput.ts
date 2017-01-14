/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createMaskedInput(numeric, zipCode, ssn, phone, regex, disabled, button) {
    // initialization options - validated in typescript
    // jqwidgets.MaskedInputOptions has generated TS definition
    let numericOptions: jqwidgets.MaskedInputOptions = {
        width: '250px',
        height: '25px'
    };

    // creates an instance
    let numericMaskedInput: jqwidgets.jqxMaskedInput = jqwidgets.createInstance(numeric, 'jqxMaskedInput', numericOptions);    

    let zipCodeOptions: jqwidgets.MaskedInputOptions = {
        width: 250,
        height: 25,
        mask: '#####-####'
    };    
    let zipCodeMaskedInput: jqwidgets.jqxMaskedInput = jqwidgets.createInstance(zipCode, 'jqxMaskedInput', zipCodeOptions);

    let ssnOptions: jqwidgets.MaskedInputOptions = {
        width: 250,
        height: 25,
        mask: '###-##-####'
    };
    let ssnMaskedInput: jqwidgets.jqxMaskedInput = jqwidgets.createInstance(ssn, 'jqxMaskedInput', ssnOptions);

    let phoneOptions: jqwidgets.MaskedInputOptions = {
        width: 250,
        height: 25,
        mask: '(###)###-####'
    };
    let phoneMaskedInput: jqwidgets.jqxMaskedInput = jqwidgets.createInstance(phone, 'jqxMaskedInput', phoneOptions);

    let regexOptions: jqwidgets.MaskedInputOptions = {
        width: 250,
        height: 25,
        mask: '[0-2][0-5][0-5].[0-2][0-5][0-5].[0-2][0-5][0-5].[0-2][0-5][0-5]'
    };
    let regexMaskedInput: jqwidgets.jqxMaskedInput = jqwidgets.createInstance(regex, 'jqxMaskedInput', regexOptions);

    let disabledOptions: jqwidgets.MaskedInputOptions = {
        width: 250,
        height: 25,
        disabled: true
    };
    let disabledMaskedInput: jqwidgets.jqxMaskedInput = jqwidgets.createInstance(disabled, 'jqxMaskedInput', disabledOptions);

    let options: jqwidgets.ButtonOptions = {};
    let clearButton: jqwidgets.jqxButton = jqwidgets.createInstance(button, 'jqxButton', options);
    clearButton.addEventHandler('click', function () {
        numericMaskedInput.clear();
        zipCodeMaskedInput.clear();
        ssnMaskedInput.clear();
        phoneMaskedInput.clear();
        regexMaskedInput.clear();
        disabledMaskedInput.clear();
    });
}