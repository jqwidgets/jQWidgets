/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createEditor(selector)
{   
    // initialization options - validated in typescript
    // jqwidgets.EditorOptions has generated TS definition
    let options: jqwidgets.EditorOptions =
    {
        height: "400px", width: '800px'  
    };

    // creates an instance
    let myEditor: jqwidgets.jqxEditor = jqwidgets.createInstance(selector, 'jqxEditor', options);   
}