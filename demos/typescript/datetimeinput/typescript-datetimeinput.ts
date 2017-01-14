/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDateTimeInput(DateInputSelector, TimeInputSelector, DateTimeInputSelector)
{   
    // initialization options - validated in typescript
    // jqwidgets.BarGaugeOptions has generated TS definition
    let DateInputOptions: jqwidgets.DateTimeInputOptions =
    {
         width: '300px', height: '25px'
    };
    let TimeInputOptions: jqwidgets.DateTimeInputOptions =
    {
        formatString: "T", showTimeButton: true, showCalendarButton: false, width: '300px', height: '25px'
    };
    let DateTimeInputOptions: jqwidgets.DateTimeInputOptions =
    {
        formatString: "F", showTimeButton: true, width: '300px', height: '25px'
    };

    // creates an instance
    let myDateInput: jqwidgets.jqxDateTimeInput = jqwidgets.createInstance(DateInputSelector, 'jqxDateTimeInput', DateInputOptions);   
    let myTimeInput: jqwidgets.jqxDateTimeInput = jqwidgets.createInstance(TimeInputSelector, 'jqxDateTimeInput', TimeInputOptions);
    let myDateTimeInput: jqwidgets.jqxDateTimeInput = jqwidgets.createInstance(DateTimeInputSelector, 'jqxDateTimeInput', DateTimeInputOptions);
}