import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'
import { jqxDropDownButtonComponent } from 'jqwidgets-ng/jqxdropdownbutton';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
    @ViewChild('myDropDownButton', { static: false }) myDropDownButton: jqxDropDownButtonComponent;

    source: any =
    {
        localdata: generatedata(100, false),
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ],
        datatype: 'array'
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
        { text: 'First Name', columntype: 'textbox', datafield: 'firstname' },
        { text: 'Last Name', datafield: 'lastname', columntype: 'textbox' },
        { text: 'Product', columntype: 'dropdownlist', datafield: 'productname' },
        { text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right' },
        { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ];  

    ready = (): void => {
        this.myGrid.selectrow(0);
    }

    myGridOnRowSelect(event: any): void {
        let args = event.args;
        let row = this.myGrid.getrowdata(args.rowindex);
        let dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + row['firstname'] + ' ' + row['lastname'] + '</div>';
        this.myDropDownButton.setContent(dropDownContent);
    }
}