/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createScrollBar(horizontalScrollBarSelector, horizontalScrollBarLog, verticalScrollBarSelector, verticalScrollBarLog) {
    // initialization options - validated in typescript
    // jqwidgets.NavBarOptions has generated TS definition
    var optionsHorizontalScrollBar = {
        width: 280,
        height: 18,
        min: 0,
        max: 1000
    };
    var optionsVerticalScrollBar = {
        width: 18,
        height: 280,
        min: 0,
        max: 1000,
        vertical: true
    };
    // creates instances
    var horizontalScrollBar = jqwidgets.createInstance(horizontalScrollBarSelector, 'jqxScrollBar', optionsHorizontalScrollBar);
    horizontalScrollBar.addEventHandler('valueChanged', function (event) {
        var horizontalLog = document.getElementById(horizontalScrollBarLog);
        horizontalLog.innerText = 'Horizontal (' + parseInt(event.currentValue) + ')';
    });
    var verticalScrollBar = jqwidgets.createInstance(verticalScrollBarSelector, 'jqxScrollBar', optionsVerticalScrollBar);
    verticalScrollBar.addEventHandler('valueChanged', function (event) {
        var verticalLog = document.getElementById(verticalScrollBarLog);
        verticalLog.innerHTML = 'Vertical (' + parseInt(event.currentValue) + ')';
    });
}
//# sourceMappingURL=typescript-scrollbar.js.map