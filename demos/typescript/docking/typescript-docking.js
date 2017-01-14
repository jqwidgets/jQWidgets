/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDocking(DockingSelector, CalendarSelector, NewsTbsSelector, ListBoxSelector, ZodiakSelector) {
    var source = [
        'JavaScript Certification - Welcome to our network',
        'Business Challenges via Web take a part',
        'jQWidgets better web, less time. Take a tour',
        'Facebook - you have 7 new notifications',
        'Twitter - John Doe is following you. Look at his profile',
        'New videos, take a look at YouTube.com'
    ];
    // initialization options - validated in typescript
    // jqwidgets.DockingOptions has generated TS definition
    var DockingOptions = {
        orientation: 'horizontal', width: 800, mode: 'docked'
    };
    var CalendarOptions = {
        width: 180, height: 180
    };
    var NewsTbsOptions = {
        width: 375, height: 181, selectedItem: 1
    };
    var ListBoxOptions = {
        source: source, width: 375, height: 181
    };
    var ZodiakOptions = {
        width: 375, height: 180
    };
    // creates an instance
    var myDocking = jqwidgets.createInstance(DockingSelector, 'jqxDocking', DockingOptions);
    var myCalendar = jqwidgets.createInstance(CalendarSelector, 'jqxCalendar', CalendarOptions);
    var myNewsTbs = jqwidgets.createInstance(NewsTbsSelector, 'jqxTabs', NewsTbsOptions);
    var myListBox = jqwidgets.createInstance(ListBoxSelector, 'jqxListBox', ListBoxOptions);
    var myZodiak = jqwidgets.createInstance(ZodiakSelector, 'jqxPanel', ZodiakOptions);
    myDocking.disableWindowResize('window1');
    myDocking.disableWindowResize('window2');
    myDocking.disableWindowResize('window3');
    myDocking.disableWindowResize('window4');
}
//# sourceMappingURL=typescript-docking.js.map