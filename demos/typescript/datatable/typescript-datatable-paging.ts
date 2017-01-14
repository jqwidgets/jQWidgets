/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDataTablePaging(selector)
{   
    let source =
        {
            localData: generatedata(200),
            dataType: "array",
            datafields:
            [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ]
        };
    let dataAdapter = new $.jqx.dataAdapter(source);

    // initialization options - validated in typescript
    // jqwidgets.DataTableOptions has generated TS definition
    let options: jqwidgets.DataTableOptions =
    {
        width: 850,
        source: dataAdapter,
        pageable: true,
        pagerMode: 'advanced',
        altRows: true,
        columns: [
            { text: 'Name', dataField: 'firstname', width: 150 },
            { text: 'Last Name', dataField: 'lastname', width: 150 },
            { text: 'Product', editable: false, dataField: 'productname', width: 250 },
            { text: 'Quantity', dataField: 'quantity', width: 80, cellsAlign: 'right' },
            { text: 'Unit Price', dataField: 'price', width: 80, cellsAlign: 'right', cellsFormat: 'c2' },
            { text: 'Total', dataField: 'total', cellsAlign: 'right', cellsFormat: 'c2' }
        ]
    };

    // creates an instance
    let myDataTable: jqwidgets.jqxDataTable = jqwidgets.createInstance(selector, 'jqxDataTable', options);   
}