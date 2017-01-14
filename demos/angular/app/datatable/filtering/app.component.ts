 
import { Component } from '@angular/core';

import { jqxDataTableComponent } from '../../../../../jqwidgets-ts/angular_jqxdatatable';

@Component({
    selector: 'my-app',
    template:
        `<jqxDataTable
            [width]='850' [source]='dataAdapter' [columns]='columns'
            [pageable]='true' [altRows]='true' [filterable]='true'>
        </jqxDataTable>`
}) 

export class AppComponent
{ 
    source: any =
    {
        dataType: "xml",
        dataFields: [
            { name: 'SupplierName', type: 'string' },
            { name: 'Quantity', type: 'number' },
            { name: 'OrderDate', type: 'date' },
            { name: 'OrderAddress', type: 'string' },
            { name: 'Freight', type: 'number' },
            { name: 'Price', type: 'number' },
            { name: 'City', type: 'string' },
            { name: 'ProductName', type: 'string' },
            { name: 'Address', type: 'string' }
        ],
        url: '../sampledata/orderdetailsextended.xml',
        root: 'DATA',
        record: 'ROW'
    };

    dataAdapter: any = new $.jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'Supplier Name', cellsAlign: 'center', align: 'center', dataField: 'SupplierName', width: 250 },
        { text: 'Name', cellsAlign: 'center', align: 'center', dataField: 'ProductName', width: 250 },
        { text: 'Quantity', dataField: 'Quantity', cellsFormat: 'd', cellsAlign: 'center', align: 'center', width: 120 },
        { text: 'Price', dataField: 'Price', cellsFormat: 'c2', align: 'center', cellsAlign: 'center', width: 120 },
        { text: 'City', cellsAlign: 'center', align: 'center', dataField: 'City' }
    ];
      
}
