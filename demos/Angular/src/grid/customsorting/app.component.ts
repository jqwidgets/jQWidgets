import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;

    data: any = generatedata(100, false);

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    customsortfunc = (column: any, direction: string | boolean): void => {
        let sortdata = new Array();
        if (direction == 'ascending') direction = true;
        if (direction == 'descending') direction = false;
        if (direction != null) {
            for (let i = 0; i < this.data.length; i++) {
                sortdata.push(this.data[i]);
            }
        }
        else sortdata = this.data;
        let tmpToString = Object.prototype.toString;
        Object.prototype.toString = (typeof column == 'function') ? column : () => { return this[column] };
        if (direction != null) {
            sortdata.sort(this.compare);
            if (!direction) {
                sortdata.reverse();
            }
        }
        this.source.localdata = sortdata;
        this.myGrid.updatebounddata('sort');
        Object.prototype.toString = tmpToString;
    }

    compare = (value1: any, value2: any): any => {
        value1 = String(value1).toLowerCase();
        value2 = String(value2).toLowerCase();
        try {
            let tmpvalue1 = parseFloat(value1);
            if (isNaN(tmpvalue1)) {
                if (value1 < value2) { return -1; }
                if (value1 > value2) { return 1; }
            }
            else {
                let tmpvalue2 = parseFloat(value2);
                if (tmpvalue1 < tmpvalue2) { return -1; }
                if (tmpvalue1 > tmpvalue2) { return 1; }
            }
        }
        catch (error) {
            let er = error;
        }
        return 0;
    };

    source: any =
    {
        localdata: this.data,
        sort: this.customsortfunc,
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        datatype: 'array'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'First Name', datafield: 'firstname', width: 200 },
        { text: 'Last Name', datafield: 'lastname', width: 200 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
    ];

    ready = (): void => {
        this.myGrid.sortby('firstname', 'asc');
    }
}