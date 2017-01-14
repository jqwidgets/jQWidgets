 
import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from '../../../../../jqwidgets-ts/angular_jqxgrid';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    template: 
        `<jqxGrid #gridReference
            [width]='850' [source]='dataAdapter' [showfilterrow]='true'
            [filterable]='true' [selectionmode]='"multiplecellsextended"' [columns]='columns'>
        </jqxGrid>
        <br />

        <jqxButton (onClick)="clearFiltering()"
            [width]='120' [height]='30'>
        Remove Filter
        </jqxButton>`
})

export class AppComponent
{
    @ViewChild('gridReference') myGrid: jqxGridComponent;

    clearFiltering(): void
    {
        this.myGrid.clearfilters();
    }

    data: any = generatedata(500);

    source: any =
    {
        localdata: this.data,
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

    dataAdapter: any = new $.jqx.dataAdapter(this.source);

    columns: any[] =
    [
        {
            text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215
        },
        {
            text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220
        },
        {
            text: 'Available', datafield: 'available', columntype: 'checkbox', filtertype: 'bool', width: 67
        },
        {
            text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd'
        },
        {
            text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right'
        }
    ];    
}