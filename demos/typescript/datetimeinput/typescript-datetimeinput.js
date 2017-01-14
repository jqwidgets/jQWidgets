/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDateTimeInput(DateInputSelector, TimeInputSelector, DateTimeInputSelector) {
    // initialization options - validated in typescript
    // jqwidgets.BarGaugeOptions has generated TS definition
    var DateInputOptions = {
        width: '300px', height: '25px'
    };
    var TimeInputOptions = {
        formatString: "T", showTimeButton: true, showCalendarButton: false, width: '300px', height: '25px'
    };
    var DateTimeInputOptions = {
        formatString: "F", showTimeButton: true, width: '300px', height: '25px'
    };
    // creates an instance
    var myDateInput = jqwidgets.createInstance(DateInputSelector, 'jqxDateTimeInput', DateInputOptions);
    var myTimeInput = jqwidgets.createInstance(TimeInputSelector, 'jqxDateTimeInput', TimeInputOptions);
    var myDateTimeInput = jqwidgets.createInstance(DateTimeInputSelector, 'jqxDateTimeInput', DateTimeInputOptions);
}
//# sourceMappingURL=typescript-datetimeinput.js.map