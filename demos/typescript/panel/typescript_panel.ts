/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createPanel(selector) {
    // initialization options - validated in typescript
    // jqwidgets.PanelOptions has generated TS definition
    let options: jqwidgets.PanelOptions = {
        width: 350,
        height: 350
    };

    // creates an instance
    let myPanel: jqwidgets.jqxPanel = jqwidgets.createInstance(selector, 'jqxPanel', options);
}