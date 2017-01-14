/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDataTable(selector)
{   
    // initialization options - validated in typescript
    // jqwidgets.DataTableOptions has generated TS definition
    let options: jqwidgets.DataTableOptions =
    {
        altRows: true,
        sortable: true,
        editable: true,
        selectionMode: 'singleRow',
        columns: [
            { text: 'First Name', dataField: 'First Name', width: 200 },
            { text: 'Last Name', dataField: 'Last Name', width: 200 },
            { text: 'Product', dataField: 'Product', width: 250 },
            { text: 'Unit Price', dataField: 'Price', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
            { text: 'Quantity', dataField: 'Quantity', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'n' }
        ]
    };

    // creates an instance
    let myDataTable: jqwidgets.jqxDataTable = jqwidgets.createInstance(selector, 'jqxDataTable', options);   
}