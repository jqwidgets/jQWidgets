/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createComplexInput(ComplexInputSelector, GetRealButtonSelector, GetImaginaryButtonSelector)
{   
    // initialization options - validated in typescript
    // jqwidgets.ComplexInputOptions has generated TS definition
    let ComplexInputOptions: jqwidgets.ComplexInputOptions =
    {
        width: 250, height: 25, value: "15 + 7.2i"
        };
    let ButtonOptions: jqwidgets.ButtonOptions =
    {
            width: 150
    };

    // creates an instance
    let myComplexInput: jqwidgets.jqxComplexInput = jqwidgets.createInstance(ComplexInputSelector, 'jqxComplexInput', ComplexInputOptions);   
    let myGetRealButton: jqwidgets.jqxButton = jqwidgets.createInstance(GetRealButtonSelector, 'jqxButton', ButtonOptions);   
    let myGetImaginaryButton: jqwidgets.jqxButton = jqwidgets.createInstance(GetImaginaryButtonSelector, 'jqxButton', ButtonOptions);   

    myGetRealButton.addEventHandler('click', function ()
    {
        let realPart = myComplexInput.getReal();
        alert("Real part is " + realPart);
    });

    myGetImaginaryButton.addEventHandler('click', function ()
    {
        let imaginaryPart = myComplexInput.getImaginary();
        alert("Imaginary  part is " + imaginaryPart);
    });
}