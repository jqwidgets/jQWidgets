import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;

    source: any =
    {
        localdata: generatedata(100, false),
        datatype: 'array',
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'date', type: 'date' },
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
	  { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 120 },
	  { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 120 },
	  { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
	  { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
	  {
		  text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, align: 'right', cellsalign: 'right', cellsformat: 'd',
	  validation: function (cell, value) {
			  if (value == "")
				 return true;
			  var year = value.getFullYear();
			  if (year >= 2020) {
				  return { result: false, message: "Ship Date should be before 1/1/2020" };
			  }
			  return true;
		  }
	  },
	  {
		  text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right', columntype: 'progressbar'
	  },
	  { text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
		  validation: function (cell, value) {
			  if (value < 0 || value > 15) {
				  return { result: false, message: "Price should be in the 0-15 interval" };
			  }
			  return true;
		  },
		  createeditor: function (row, cellvalue, editor) {
			  editor.jqxNumberInput({ digits: 3 });
		  }
	  }
	 ]
}