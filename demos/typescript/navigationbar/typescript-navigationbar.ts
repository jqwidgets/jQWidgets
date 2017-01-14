/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createNavigationBar(selector) {
    // initialization options - validated in typescript
    // jqwidgets.LoaderOptions has generated TS definition
    let options: jqwidgets.NavigationBarOptions = {
        width: 400,
        height: 460
    };

    // creates an instance
    let myNavigationBar: jqwidgets.jqxNavigationBar = jqwidgets.createInstance(selector, 'jqxNavigationBar', options);
}