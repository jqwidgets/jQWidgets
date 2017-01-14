/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createCalendar(selector)
{   
    // initialization options - validated in typescript
    // jqwidgets.CalendarOptions has generated TS definition
    let options: jqwidgets.BarGaugeOptions =
    {
        width: 220, height: 220
    };

    // creates an instance
    let myCalendar: jqwidgets.jqxCalendar = jqwidgets.createInstance(selector, 'jqxCalendar', options);   
}