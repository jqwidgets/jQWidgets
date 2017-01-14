/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createLoader(selector, secondSelector, thirdSelector) {
    // initialization options - validated in typescript
    // jqwidgets.LoaderOptions has generated TS definition
    let options: jqwidgets.LoaderOptions = {
        width: 100,
        height: 60,
        imagePosition: 'top'
    };

    // creates an instance
    let myLoader: jqwidgets.jqxLoader = jqwidgets.createInstance(selector, 'jqxLoader', options);

    // initialize 'open' button
    let buttonOpenOptions: jqwidgets.ButtonOptions = {
        width: 150
    };
    let buttonOpen: jqwidgets.jqxButton = jqwidgets.createInstance(secondSelector, 'jqxButton', buttonOpenOptions);
    buttonOpen.addEventHandler('click', function (event) {
        myLoader.open();
    });

    // initialize 'close' button
    let buttonCloseOptions: jqwidgets.ButtonOptions = {
        width: 100
    };
    let buttonClose: jqwidgets.jqxButton = jqwidgets.createInstance(thirdSelector, 'jqxButton', buttonCloseOptions);
    buttonClose.addEventHandler('click', function (event) {
        myLoader.close();
    });
}