/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createLoader(selector, secondSelector, thirdSelector) {
    // initialization options - validated in typescript
    // jqwidgets.LoaderOptions has generated TS definition
    var options = {
        width: 100,
        height: 60,
        imagePosition: 'top'
    };
    // creates an instance
    var myLoader = jqwidgets.createInstance(selector, 'jqxLoader', options);
    // initialize 'open' button
    var buttonOpenOptions = {
        width: 150
    };
    var buttonOpen = jqwidgets.createInstance(secondSelector, 'jqxButton', buttonOpenOptions);
    buttonOpen.addEventHandler('click', function (event) {
        myLoader.open();
    });
    // initialize 'close' button
    var buttonCloseOptions = {
        width: 100
    };
    var buttonClose = jqwidgets.createInstance(thirdSelector, 'jqxButton', buttonCloseOptions);
    buttonClose.addEventHandler('click', function (event) {
        myLoader.close();
    });
}
//# sourceMappingURL=typescript-loader.js.map