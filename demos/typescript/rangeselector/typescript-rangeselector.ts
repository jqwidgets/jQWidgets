/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createRangeSelector(selector, setButton, getButton) {
    // initialization options - validated in typescript
    // jqwidgets.RangeSelectorOptions has generated TS definition
    let options: jqwidgets.RangeSelectorOptions = {
        width: 750,
        height: 100,
        min: 0, max: 200,
        range: { from: 10, to: 50 },
        majorTicksInterval: 10,
        minorTicksInterval: 1
    };

    // creates an instance
    let myRangeSelector: jqwidgets.jqxRangeSelector = jqwidgets.createInstance(selector, 'jqxRangeSelector', options);

    let buttonsOptions: jqwidgets.ButtonOptions = {};
    let buttonSet: jqwidgets.jqxButton = jqwidgets.createInstance(setButton, 'jqxButton', buttonsOptions);
    buttonSet.addEventHandler('click', function (event) {
        // Set Range.
        myRangeSelector.setRange(30, 70);
    });

    let buttonGet: jqwidgets.jqxButton = jqwidgets.createInstance(getButton, 'jqxButton', buttonsOptions);
    buttonGet.addEventHandler('click', function (event) {
        // Get Range.
        var range = myRangeSelector.getRange();
        alert("The selected range is from " + range.from + " to " + range.to);
    });
}