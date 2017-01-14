/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createPanel(selector) {
    // initialization options - validated in typescript
    // jqwidgets.PanelOptions has generated TS definition
    var options = {
        width: 350,
        height: 350
    };
    // creates an instance
    var myPanel = jqwidgets.createInstance(selector, 'jqxPanel', options);
}
//# sourceMappingURL=typescript_panel.js.map