/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createScrollView(gallerySelector, startBtnSelector, stopButtonSelector) {
    // initialization options - validated in typescript
    // jqwidgets.ScrollViewOptions has generated TS definition
    var optionsScrollView = {
        width: 600,
        height: 450,
        buttonsOffset: [0, 0],
        slideShow: false
    };
    // creates instances
    var myScrollView = jqwidgets.createInstance(gallerySelector, 'jqxScrollView', optionsScrollView);
    var optionsButtons = {};
    var startButton = jqwidgets.createInstance(startBtnSelector, 'jqxButton', optionsButtons);
    startButton.addEventHandler('click', function () {
        myScrollView.setOptions({ slideShow: true });
    });
    var stopButton = jqwidgets.createInstance(stopButtonSelector, 'jqxButton', optionsButtons);
    stopButton.addEventHandler('click', function () {
        myScrollView.setOptions({ slideShow: false });
    });
}
//# sourceMappingURL=typescript-scrollview.js.map