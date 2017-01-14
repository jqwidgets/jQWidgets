/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createListmenu(selector) {
    // initialization options - validated in typescript
    // jqwidgets.ListMenuOptions has generated TS definition
    var options = {
        autoSeparators: true,
        enableScrolling: false,
        showHeader: true,
        width: '600px',
        placeHolder: 'Find contact...'
    };
    // creates an instance
    var myKnob = jqwidgets.createInstance(selector, 'jqxListMenu', options);
}
//# sourceMappingURL=typescript-listmenu.js.map