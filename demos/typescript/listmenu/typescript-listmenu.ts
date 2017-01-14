/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createListmenu(selector) {
    // initialization options - validated in typescript
    // jqwidgets.ListMenuOptions has generated TS definition
    let options: jqwidgets.ListMenuOptions = {
        autoSeparators: true,
        enableScrolling: false,
        showHeader: true,
        width: '600px',
        placeHolder: 'Find contact...'
    };

    // creates an instance
    let myKnob: jqwidgets.jqxListMenu = jqwidgets.createInstance(selector, 'jqxListMenu', options);
}