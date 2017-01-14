/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createScrollView(gallerySelector, startBtnSelector, stopButtonSelector) {
    // initialization options - validated in typescript
    // jqwidgets.ScrollViewOptions has generated TS definition
    let optionsScrollView: jqwidgets.ScrollViewOptions = {
        width: 600,
        height: 450,
        buttonsOffset: [0, 0],
        slideShow: false
    };
    // creates instances
    let myScrollView: jqwidgets.jqxScrollView = jqwidgets.createInstance(gallerySelector, 'jqxScrollView', optionsScrollView);
    let optionsButtons = {
        //theme: theme 
    };
    let startButton: jqwidgets.jqxButton = jqwidgets.createInstance(startBtnSelector, 'jqxButton', optionsButtons);
    startButton.addEventHandler('click', function () {
        myScrollView.setOptions({ slideShow: true });
    });
    let stopButton: jqwidgets.jqxButton = jqwidgets.createInstance(stopButtonSelector, 'jqxButton', optionsButtons);
    stopButton.addEventHandler('click', function () {
        myScrollView.setOptions({ slideShow: false });
    });
}
