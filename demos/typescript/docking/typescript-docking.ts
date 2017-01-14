/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDocking(DockingSelector, CalendarSelector, NewsTbsSelector, ListBoxSelector, ZodiakSelector)
{   
    let source = [
        'JavaScript Certification - Welcome to our network',
        'Business Challenges via Web take a part',
        'jQWidgets better web, less time. Take a tour',
        'Facebook - you have 7 new notifications',
        'Twitter - John Doe is following you. Look at his profile',
        'New videos, take a look at YouTube.com'
    ];

    // initialization options - validated in typescript
    // jqwidgets.DockingOptions has generated TS definition
    let DockingOptions: jqwidgets.DockingOptions =
    {
        orientation: 'horizontal', width: 800, mode: 'docked'
        };
    let CalendarOptions: jqwidgets.CalendarOptions =
    {
        width: 180, height: 180
    };
    let NewsTbsOptions: jqwidgets.TabsOptions =
    {
        width: 375, height: 181, selectedItem: 1
        };
    let ListBoxOptions: jqwidgets.ListBoxOptions =
    {
        source: source, width: 375, height: 181
        };
    let ZodiakOptions: jqwidgets.PanelOptions =
    {
        width: 375, height: 180
    };

    // creates an instance
    let myDocking: jqwidgets.jqxDocking = jqwidgets.createInstance(DockingSelector, 'jqxDocking', DockingOptions);
    let myCalendar: jqwidgets.jqxCalendar = jqwidgets.createInstance(CalendarSelector, 'jqxCalendar', CalendarOptions);
    let myNewsTbs: jqwidgets.jqxTabs = jqwidgets.createInstance(NewsTbsSelector, 'jqxTabs', NewsTbsOptions);
    let myListBox: jqwidgets.jqxListBox = jqwidgets.createInstance(ListBoxSelector, 'jqxListBox', ListBoxOptions);
    let myZodiak: jqwidgets.jqxPanel = jqwidgets.createInstance(ZodiakSelector, 'jqxPanel', ZodiakOptions);

    myDocking.disableWindowResize('window1');
    myDocking.disableWindowResize('window2');
    myDocking.disableWindowResize('window3');
    myDocking.disableWindowResize('window4');
}