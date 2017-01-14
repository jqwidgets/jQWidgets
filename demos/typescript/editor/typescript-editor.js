/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createEditor(selector) {
    // initialization options - validated in typescript
    // jqwidgets.EditorOptions has generated TS definition
    var options = {
        height: "400px", width: '800px'
    };
    // creates an instance
    var myEditor = jqwidgets.createInstance(selector, 'jqxEditor', options);
}
//# sourceMappingURL=typescript-editor.js.map