/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createNavigationBar(selector) {
    // initialization options - validated in typescript
    // jqwidgets.LoaderOptions has generated TS definition
    var options = {
        width: 400,
        height: 460
    };
    // creates an instance
    var myNavigationBar = jqwidgets.createInstance(selector, 'jqxNavigationBar', options);
}
//# sourceMappingURL=typescript-navigationbar.js.map