/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDataTableSorting(selector)
{   
    let source =
        {
            localdata: generatedata(85),
            datatype: "array",
            datafields:
            [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            sortcolumn: 'firstname',
            sortdirection: 'asc'
        };
    let dataAdapter = new $.jqx.dataAdapter(source);

    // initialization options - validated in typescript
    // jqwidgets.DataTableOptions has generated TS definition
    let options: jqwidgets.DataTableOptions =
    {
        source: dataAdapter,
        sortable: true,
        pageable: true,
        altRows: true,
        columns: [
            { text: 'Name', dataField: 'firstname', width: 200 },
            { text: 'Last Name', dataField: 'lastname', width: 200 },
            { text: 'Product', editable: false, dataField: 'productname', width: 180 },
            { text: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsAlign: 'right' },
            { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
            { text: 'Total', dataField: 'total', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
        ]
    };

    // creates an instance
    let myDataTable: jqwidgets.jqxDataTable = jqwidgets.createInstance(selector, 'jqxDataTable', options);   
}