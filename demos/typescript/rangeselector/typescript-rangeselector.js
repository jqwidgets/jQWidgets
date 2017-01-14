/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createRangeSelector(selector, setButton, getButton) {
    // initialization options - validated in typescript
    // jqwidgets.RangeSelectorOptions has generated TS definition
    var options = {
        width: 750,
        height: 100,
        min: 0, max: 200,
        range: { from: 10, to: 50 },
        majorTicksInterval: 10,
        minorTicksInterval: 1
    };
    // creates an instance
    var myRangeSelector = jqwidgets.createInstance(selector, 'jqxRangeSelector', options);
    var buttonsOptions = {};
    var buttonSet = jqwidgets.createInstance(setButton, 'jqxButton', buttonsOptions);
    buttonSet.addEventHandler('click', function (event) {
        // Set Range.
        myRangeSelector.setRange(30, 70);
    });
    var buttonGet = jqwidgets.createInstance(getButton, 'jqxButton', buttonsOptions);
    buttonGet.addEventHandler('click', function (event) {
        // Get Range.
        var range = myRangeSelector.getRange();
        alert("The selected range is from " + range.from + " to " + range.to);
    });
}
//# sourceMappingURL=typescript-rangeselector.js.map