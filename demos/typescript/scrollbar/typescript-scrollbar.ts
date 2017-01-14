/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createScrollBar(horizontalScrollBarSelector, horizontalScrollBarLog, verticalScrollBarSelector, verticalScrollBarLog) {
    // initialization options - validated in typescript
    // jqwidgets.NavBarOptions has generated TS definition
    let optionsHorizontalScrollBar: jqwidgets.ScrollBarOptions = {
        width: 280,
        height: 18,
        min: 0,
        max: 1000
    };

    let optionsVerticalScrollBar: jqwidgets.ScrollBarOptions = {
        width: 18,
        height: 280,
        min: 0,
        max: 1000,
        vertical: true
    };

    // creates instances
    let horizontalScrollBar: jqwidgets.jqxScrollBar = jqwidgets.createInstance(horizontalScrollBarSelector, 'jqxScrollBar', optionsHorizontalScrollBar);
    horizontalScrollBar.addEventHandler('valueChanged', function (event) {
        let horizontalLog = document.getElementById(horizontalScrollBarLog);
        horizontalLog.innerText = 'Horizontal (' + parseInt(event.currentValue) + ')';
    });
    let verticalScrollBar: jqwidgets.jqxScrollBar = jqwidgets.createInstance(verticalScrollBarSelector, 'jqxScrollBar', optionsVerticalScrollBar);
    verticalScrollBar.addEventHandler('valueChanged', function (event) {
        let verticalLog = document.getElementById(verticalScrollBarLog);
        verticalLog.innerHTML = 'Vertical (' + parseInt(event.currentValue) + ')';
    });
}