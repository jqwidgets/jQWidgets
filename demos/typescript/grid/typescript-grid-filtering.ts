/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createGridFiltering(selector, eventLogSelector, clearFilteringButtonSelector, filterBackgroundSelector, filterIconsSelector) {
    let data = generatedata(500);

    let source =
        {
            localdata: data,
            datafields:
            [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'date', type: 'date' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' }
            ],
            datatype: "array"
        };
    let addfilter = function () {
        let filtergroup = new $.jqx.filter();
        let filter_or_operator = 1;
        let filtervalue = 'Beate';
        let filtercondition = 'contains';
        let filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtervalue = 'Andrew';
        filtercondition = 'starts_with';
        let filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);

        filtergroup.addfilter(filter_or_operator, filter1);
        filtergroup.addfilter(filter_or_operator, filter2);
        // add the filters.
        myGrid.addfilter('firstname', filtergroup);        
        // apply the filters.
        myGrid.applyfilters();
    }
    let adapter = new $.jqx.dataAdapter(source);

    // initialization options - validated in typescript
    // jqwidgets.GridOptions has generated TS definition
    let lazyLoading = 0;
    let options: jqwidgets.GridOptions = {
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
    let myGrid: jqwidgets.jqxGrid = jqwidgets.createInstance(selector, 'jqxGrid', options);

    let eventsLogOptions: jqwidgets.GridOptions = { width: 300, height: 80 };
    let eventLog: jqwidgets.jqxPanel = jqwidgets.createInstance(eventLogSelector, 'jqxPanel', eventsLogOptions);

    myGrid.addEventHandler('filter', function (event) {
        eventLog.clearcontent();
        let filterinfo = myGrid.getfilterinformation();
        let eventData = "Triggered 'filter' event";
        for (let i = 0; i < filterinfo.length; i += 1) {
            let eventData = "Filter Column: " + filterinfo[i].filtercolumntext;
            eventLog.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
        }
    });

    let buttonOptions: jqwidgets.ButtonOptions = { height: 25 };
    let buttonClearFiltering: jqwidgets.jqxButton = jqwidgets.createInstance(clearFilteringButtonSelector, 'jqxButton', buttonOptions);
    let filterbackgroundOptions: jqwidgets.CheckBoxOptions = { checked: true, height: 25 };
    let filterbackground: jqwidgets.jqxCheckBox = jqwidgets.createInstance(filterBackgroundSelector, 'jqxCheckBox', filterbackgroundOptions);
    let filtericonsOptions: jqwidgets.CheckBoxOptions = { checked: false, height: 25 };
    let filtericons: jqwidgets.jqxCheckBox = jqwidgets.createInstance(filterIconsSelector, 'jqxCheckBox', filtericonsOptions);

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