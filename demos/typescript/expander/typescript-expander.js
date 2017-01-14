/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createExpander(selector) {
    // initialization options - validated in typescript
    // jqwidgets.BarGaugeOptions has generated TS definition
    var options = {
        width: '350px'
    };
    // creates an instance
    var myExpander = jqwidgets.createInstance(selector, 'jqxExpander', options);
}
//# sourceMappingURL=typescript-expander.js.map