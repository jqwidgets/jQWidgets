/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function numericInput(selector) {
    // initialization options - validated in typescript
    // jqwidgets.NumberInputOptions has generated TS definition
    let options: jqwidgets.NumberInputOptions = {
        width: '250px',
        height: '25px',
        spinButtons: true
    };

    let myNumericInput: jqwidgets.jqxNumberInput = jqwidgets.createInstance(selector, 'jqxNumberInput', options);
    myNumericInput.setOptions(options);
}

function percentageInput(selector) {
    let options: jqwidgets.NumberInputOptions = {
        width: '250px',
        height: '25px',
        digits: 3,
        symbolPosition: 'right',
        symbol: '%',
        spinButtons: true
    };

    let myPercentageInput: jqwidgets.jqxNumberInput = jqwidgets.createInstance(selector, 'jqxNumberInput', options);
    myPercentageInput.setOptions(options);
}

function currencyInput(selector) {
    let options: jqwidgets.NumberInputOptions = {
        width: '250px',
        height: '25px',
        symbol: '$',
        spinButtons: true
    };

    let myCurrencyInput: jqwidgets.jqxNumberInput = jqwidgets.createInstance(selector, 'jqxNumberInput', options);
    myCurrencyInput.setOptions(options);
}

function disabledInput(selector) {
    let options: jqwidgets.NumberInputOptions = {
        width: 250,
        height: 25,
        disabled: true,
        spinButtons: true
    };

    let myDisabledInput: jqwidgets.jqxNumberInput = jqwidgets.createInstance(selector, 'jqxNumberInput', options);
    myDisabledInput.setOptions(options);
}