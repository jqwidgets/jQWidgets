/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function numericInput(selector) {
    // initialization options - validated in typescript
    // jqwidgets.NumberInputOptions has generated TS definition
    var options = {
        width: '250px',
        height: '25px',
        spinButtons: true
    };
    var myNumericInput = jqwidgets.createInstance(selector, 'jqxNumberInput', options);
    myNumericInput.setOptions(options);
}
function percentageInput(selector) {
    var options = {
        width: '250px',
        height: '25px',
        digits: 3,
        symbolPosition: 'right',
        symbol: '%',
        spinButtons: true
    };
    var myPercentageInput = jqwidgets.createInstance(selector, 'jqxNumberInput', options);
    myPercentageInput.setOptions(options);
}
function currencyInput(selector) {
    var options = {
        width: '250px',
        height: '25px',
        symbol: '$',
        spinButtons: true
    };
    var myCurrencyInput = jqwidgets.createInstance(selector, 'jqxNumberInput', options);
    myCurrencyInput.setOptions(options);
}
function disabledInput(selector) {
    var options = {
        width: 250,
        height: 25,
        disabled: true,
        spinButtons: true
    };
    var myDisabledInput = jqwidgets.createInstance(selector, 'jqxNumberInput', options);
    myDisabledInput.setOptions(options);
}
//# sourceMappingURL=typescript-numberinput.js.map