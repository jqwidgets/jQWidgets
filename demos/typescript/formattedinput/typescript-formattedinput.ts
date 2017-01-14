/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function formatedInput (selector) {
    // initialization options - validated in typescript
    // jqwidgets.FormatedInputOptions has generated TS definition
    let options: jqwidgets.FormattedInputOptions = {
        width: 250,
        height: 25,
        radix: "decimal",
        value: "15",
        spinButtons: true,
        dropDown: true
    };

    // creates an instance
    let myFormattedInput: jqwidgets.jqxFormattedInput = jqwidgets.createInstance(selector, 'jqxFormattedInput', options);
}