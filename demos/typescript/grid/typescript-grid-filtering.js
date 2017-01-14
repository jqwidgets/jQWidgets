/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createGridFiltering(selector, eventLogSelector, clearFilteringButtonSelector, filterBackgroundSelector, filterIconsSelector) {
    var data = generatedata(500);
    var source = {
        localdata: data,
        datafields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ],
        datatype: "array"
    };
    var addfilter = function () {
        var filtergroup = new $.jqx.filter();
        var filter_or_operator = 1;
        var filtervalue = 'Beate';
        var filtercondition = 'contains';
        var filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtervalue = 'Andrew';
        filtercondition = 'starts_with';
        var filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filter_or_operator, filter1);
        filtergroup.addfilter(filter_or_operator, filter2);
        // add the filters.
        myGrid.addfilter('firstname', filtergroup);
        // apply the filters.
        myGrid.applyfilters();
    };
    var adapter = new $.jqx.dataAdapter(source);
    // initialization options - validated in typescript
    // jqwidgets.GridOptions has generated TS definition
    var lazyLoading = 0;
    var options = {
        width: 850,
        source: adapter,
        filterable: true,
        sortable: true,
        ready: function () {
            //addfilter();
            if (lazyLoading != 0) {
                addfilter();
            }
            lazyLoading += 1;
        },
        autoshowfiltericon: true,
        columns: [
            { text: 'First Name', datafield: 'firstname', width: 160 },
            { text: 'Last Name', datafield: 'lastname', width: 160 },
            { text: 'Product', datafield: 'productname', width: 170 },
            { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
            { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
            { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
        ]
    };
    // creates an instance
    var myGrid = jqwidgets.createInstance(selector, 'jqxGrid', options);
    var eventsLogOptions = { width: 300, height: 80 };
    var eventLog = jqwidgets.createInstance(eventLogSelector, 'jqxPanel', eventsLogOptions);
    myGrid.addEventHandler('filter', function (event) {
        eventLog.clearcontent();
        var filterinfo = myGrid.getfilterinformation();
        var eventData = "Triggered 'filter' event";
        for (var i = 0; i < filterinfo.length; i += 1) {
            var eventData_1 = "Filter Column: " + filterinfo[i].filtercolumntext;
            eventLog.prepend('<div style="margin-top: 5px;">' + eventData_1 + '</div>');
        }
    });
    var buttonOptions = { height: 25 };
    var buttonClearFiltering = jqwidgets.createInstance(clearFilteringButtonSelector, 'jqxButton', buttonOptions);
    var filterbackgroundOptions = { checked: true, height: 25 };
    var filterbackground = jqwidgets.createInstance(filterBackgroundSelector, 'jqxCheckBox', filterbackgroundOptions);
    var filtericonsOptions = { checked: false, height: 25 };
    var filtericons = jqwidgets.createInstance(filterIconsSelector, 'jqxCheckBox', filtericonsOptions);
    // clear the filtering.
    buttonClearFiltering.addEventHandler('click', function (event) {
        myGrid.clearfilters();
    });
    // show/hide filter background
    filterbackground.addEventHandler('change', function (event) {
        myGrid.showfiltercolumnbackground = event.args.checked;
        myGrid.refresh();
    });
    // show/hide filter icons
    filtericons.addEventHandler('change', function (event) {
        options.autoshowfiltericon = !event.args.checked;
        myGrid.setOptions(options);
    });
}
//# sourceMappingURL=typescript-grid-filtering.js.map