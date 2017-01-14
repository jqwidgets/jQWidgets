/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createNavbars(selector, secondSelector, thirdSelector, fourthSelector) {
    // initialization options - validated in typescript
    // jqwidgets.NavBarOptions has generated TS definition
    var options = {
        height: 40,
        selectedItem: 0
    };
    // creates an instances
    var firstNavbar = jqwidgets.createInstance(selector, 'jqxNavBar', options);
    var secondNavbar = jqwidgets.createInstance(secondSelector, 'jqxNavBar', options);
    var thirdNavbar = jqwidgets.createInstance(thirdSelector, 'jqxNavBar', options);
    var fourthNavbar = jqwidgets.createInstance(fourthSelector, 'jqxNavBar', options);
}
function createNavbarsWithMoreItems(selector, secondSelector, thirdSelector) {
    var options = {
        height: 160,
        selectedItem: 0
    };
    var myNavbar = jqwidgets.createInstance(selector, 'jqxNavBar', options);
}
function createNavbarsArray(selector, secondSelector, thirdSelector) {
    var options = {
        height: 40,
        columns: ['30%', '50%', '20%'],
        selectedItem: 0
    };
    var myNavbar = jqwidgets.createInstance(selector, 'jqxNavBar', options);
}
//# sourceMappingURL=typescript-navbar.js.map