/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createCalendar(selector) {
    // initialization options - validated in typescript
    // jqwidgets.CalendarOptions has generated TS definition
    var options = {
        width: 220, height: 220
    };
    // creates an instance
    var myCalendar = jqwidgets.createInstance(selector, 'jqxCalendar', options);
}
//# sourceMappingURL=typescript-calendar.js.map