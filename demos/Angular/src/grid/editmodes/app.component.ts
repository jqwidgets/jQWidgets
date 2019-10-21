import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;

    source: any =
    {
        localdata: generatedata(200, false),
        datatype: 'array',
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ]
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 90 },
        { text: 'Last Name', datafield: 'lastname', width: 90 },
        { text: 'Product', datafield: 'productname' },
        { text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right' },
        { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 }
    ];

    myDropDownListOnSelect(event: any): void {
        let index = event.args.index;
        let editMode = index == 0 ? 'click' : index == 1 ? 'dblclick' : 'selectedcell';
        this.myGrid.editmode(editMode);
    };

    firstnameOnChange(event: any): void {
        this.myGrid.setcolumnproperty('firstname', 'editable', event.args.checked);
    };

    lastnameOnChange(event: any): void {
        this.myGrid.setcolumnproperty('lastname', 'editable', event.args.checked);
    };

    quantityOnChange(event: any): void {
        this.myGrid.setcolumnproperty('quantity', 'editable', event.args.checked);
    };

    productnameOnChange(event: any): void {
        this.myGrid.setcolumnproperty('productname', 'editable', event.args.checked);
    };

    availableOnChange(event: any): void {
        this.myGrid.setcolumnproperty('available', 'editable', event.args.checked);
    };
}