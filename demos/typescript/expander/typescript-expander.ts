/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createExpander(selector)
{   
    // initialization options - validated in typescript
    // jqwidgets.BarGaugeOptions has generated TS definition
    let options: jqwidgets.ExpanderOptions =
    {
         width: '350px'
    };

    // creates an instance
    let myExpander: jqwidgets.jqxExpander = jqwidgets.createInstance(selector, 'jqxExpander', options);   
}