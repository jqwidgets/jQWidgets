/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createComplexInput(ComplexInputSelector, GetRealButtonSelector, GetImaginaryButtonSelector) {
    // initialization options - validated in typescript
    // jqwidgets.ComplexInputOptions has generated TS definition
    var ComplexInputOptions = {
        width: 250, height: 25, value: "15 + 7.2i"
    };
    var ButtonOptions = {
        width: 150
    };
    // creates an instance
    var myComplexInput = jqwidgets.createInstance(ComplexInputSelector, 'jqxComplexInput', ComplexInputOptions);
    var myGetRealButton = jqwidgets.createInstance(GetRealButtonSelector, 'jqxButton', ButtonOptions);
    var myGetImaginaryButton = jqwidgets.createInstance(GetImaginaryButtonSelector, 'jqxButton', ButtonOptions);
    myGetRealButton.addEventHandler('click', function () {
        var realPart = myComplexInput.getReal();
        alert("Real part is " + realPart);
    });
    myGetImaginaryButton.addEventHandler('click', function () {
        var imaginaryPart = myComplexInput.getImaginary();
        alert("Imaginary  part is " + imaginaryPart);
    });
}
//# sourceMappingURL=typescript-complexinput.js.map