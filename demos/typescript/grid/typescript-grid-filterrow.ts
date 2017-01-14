/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createGridFilterRow(selector, secondSelector) {
    let data = generatedata(500);
    let source =
        {
            localdata: data,
            datafields:
            [
                { name: 'name', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'date', type: 'date' },
                { name: 'quantity', type: 'number' }
            ],
            datatype: "array"
        };
    let dataAdapter = new $.jqx.dataAdapter(source);

    // initialization options - validated in typescript
    // jqwidgets.LoaderOptions has generated TS definition
    let options: jqwidgets.GridOptions = {
        width: 850,
        source: dataAdapter,
        showfilterrow: true,
        filterable: true,
        selectionmode: 'multiplecellsextended',
        columns: [
            { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
            {
                text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220
            },
            { text: 'Available', datafield: 'available', columntype: 'checkbox', filtertype: 'bool', width: 67 },
            { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
            { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
        ]
    };

    // creates an instance
    let myGrid: jqwidgets.jqxGrid = jqwidgets.createInstance(selector, 'jqxGrid', options);

    // initialize 'open' button
    let buttonOpenOptions: jqwidgets.ButtonOptions = { height: 25 };
    let buttonOpen: jqwidgets.jqxButton = jqwidgets.createInstance(secondSelector, 'jqxButton', buttonOpenOptions);
    buttonOpen.addEventHandler('click', function (event) {
        myGrid.clearfilters();
    });
}