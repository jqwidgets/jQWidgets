/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createNavbars(selector, secondSelector, thirdSelector, fourthSelector) {
    // initialization options - validated in typescript
    // jqwidgets.NavBarOptions has generated TS definition
    let options: jqwidgets.NavBarOptions = {
        height: 40,
        selectedItem: 0
    };

    // creates an instances
    let firstNavbar: jqwidgets.jqxNavBar = jqwidgets.createInstance(selector, 'jqxNavBar', options);
    let secondNavbar: jqwidgets.jqxNavBar = jqwidgets.createInstance(secondSelector, 'jqxNavBar', options);
    let thirdNavbar: jqwidgets.jqxNavBar = jqwidgets.createInstance(thirdSelector, 'jqxNavBar', options);
    let fourthNavbar: jqwidgets.jqxNavBar = jqwidgets.createInstance(fourthSelector, 'jqxNavBar', options);
}

function createNavbarsWithMoreItems(selector, secondSelector, thirdSelector) {
    let options: jqwidgets.NavBarOptions = {
        height: 160,
        selectedItem: 0
    };
    
    let myNavbar: jqwidgets.jqxNavBar = jqwidgets.createInstance(selector, 'jqxNavBar', options);
}

function createNavbarsArray(selector, secondSelector, thirdSelector) {
    let options: jqwidgets.NavBarOptions = {
        height: 40,
        columns: ['30%', '50%', '20%'],
        selectedItem: 0
    };

    let myNavbar: jqwidgets.jqxNavBar = jqwidgets.createInstance(selector, 'jqxNavBar', options);
}