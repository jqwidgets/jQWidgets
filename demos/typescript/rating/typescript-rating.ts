/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createRating(selector, secondSelector) {
    // initialization options - validated in typescript
    // jqwidgets.RatingOptions has generated TS definition
    var options: jqwidgets.RatingOptions = {
        width: 350,
        height: 35
    };

    // creates an instance
    var myRating: jqwidgets.jqxRating = jqwidgets.createInstance(selector, 'jqxRating', options);

    myRating.addEventHandler('change', function (event) {
        document.getElementById(secondSelector).innerHTML = '<span>' + event.value + '</span>';
    });
}