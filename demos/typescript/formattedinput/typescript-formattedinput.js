/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function formatedInput(selector) {
    // initialization options - validated in typescript
    // jqwidgets.FormatedInputOptions has generated TS definition
    var options = {
        width: 250,
        height: 25,
        radix: "decimal",
        value: "15",
        spinButtons: true,
        dropDown: true
    };
    // creates an instance
    var myFormattedInput = jqwidgets.createInstance(selector, 'jqxFormattedInput', options);
}
//# sourceMappingURL=typescript-formattedinput.js.map