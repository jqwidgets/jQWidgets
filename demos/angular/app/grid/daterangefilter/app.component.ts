import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from '../../../jqwidgets-ts/angular_jqxgrid'

import { generatedata } from '../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid') myGrid: jqxGridComponent;

    source: any =
    {
        localdata: generatedata(500, false),
        datafields:
        [
            { name: 'name', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'date', type: 'date' },
            { name: 'range', map: 'date', type: 'date' },
            { name: 'quantity', type: 'number' }
        ],
        datatype: 'array'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'Name', columntype: 'textbox', filtercondition: 'starts_with', datafield: 'name', width: '30%' },
        { text: 'Range', datafield: 'range', filtertype: 'range', cellsalign: 'right', width: '35%', cellsformat: 'd' },
        { text: 'Date', datafield: 'date', filtertype: 'date', cellsalign: 'right', width: '35%', cellsformat: 'd' }
    ];

    btnOnClick() {
        this.myGrid.clearfilters();
    };
}