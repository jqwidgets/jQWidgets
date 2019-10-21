import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    source: any =
    {
        localdata: generatedata(10, false),
        datafields:
        [
            { name: 'name', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' }
        ],
        datatype: 'array'
    }

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        {
            text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215,
            validateEverPresentRowWidgetValue: this.validateFunc
        },
        {
            text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220,
            validateEverPresentRowWidgetValue: this.validateFunc
        },
        {
            text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd',
            validateEverPresentRowWidgetValue: this.validateFunc
        },
        {
            text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right',
            validateEverPresentRowWidgetValue: this.validateFunc
        }
    ];

    validateFunc(datafield, value) {
        switch (datafield) {
            case 'name':
                if (value.length < 5) {
                    return { message: 'Entered value should be more than 5 characters', result: false };
                }
                return true;
            case 'productname':
                if (value.length == 0) {
                    return { message: 'Entered field should be more than 0 characters', result: false };
                }
                return true;
            case 'quantity':
                if (value < 0) {
                    return { message: 'Entered quantity should be positive number', result: false };
                }
                return true;
            case 'date':
                if ((new Date(value).toString()) == 'Invalid Date') {
                    return { message: 'Entered date should be valid', result: false };
                }
                return true;
        }
        return true;
    }

    topBtnOnChecked(): void {
        this.myGrid.everpresentrowactions('add reset');
    };

    bottomBtnOnChecked(): void {
        this.myGrid.everpresentrowactions('addBottom reset');
    };
}