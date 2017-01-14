 
import { Component } from '@angular/core';

import { jqxDataTableComponent } from '../../../../../jqwidgets-ts/angular_jqxdatatable';

@Component({
    selector: 'my-app',
    template: 
        `<jqxDataTable
            [width]='850' [source]='dataAdapter' [columns]='columns'
            [pageable]='true' [altRows]='true' [pagerMode]='"advanced"'>
        </jqxDataTable>`
})

export class AppComponent
{
    source: any =
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

    dataAdapter: any = new $.jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'Name', dataField: 'firstname', width: 150 },
        { text: 'Last Name', dataField: 'lastname', width: 150 },
        { text: 'Product', editable: false, dataField: 'productname', width: 250 },
        { text: 'Quantity', dataField: 'quantity', width: 80, cellsAlign: 'right' },
        { text: 'Unit Price', dataField: 'price', width: 80, cellsAlign: 'right', cellsFormat: 'c2' },
        { text: 'Total', dataField: 'total', cellsAlign: 'right', cellsFormat: 'c2' }
    ];
    
}
