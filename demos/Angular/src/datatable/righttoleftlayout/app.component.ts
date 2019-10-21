import { Component } from '@angular/core';

import { generatedata } from './../../../sampledata/generatedata';

  @Component({     selector: 'app-root',     templateUrl: './app.component.html'
 })  export class AppComponent {  

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

   source: any =     {         localData: generatedata(200, false),
        dataType: 'array',
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ]     };      dataAdapter: any = new jqx.dataAdapter(this.source);      columns: any[] =     [         { text: 'Name', dataField: 'firstname', align: 'right', cellsAlign: 'right', width: 150 },
        { text: 'Last Name', dataField: 'lastname', align: 'right', cellsAlign: 'right', width: 150 },
        { text: 'Product', editable: false, dataField: 'productname', align: 'right', cellsAlign: 'right', width: 180 },
        { text: 'Quantity', dataField: 'quantity', width: 180, cellsAlign: 'left', align: 'left' },
        { text: 'Unit Price', dataField: 'price', width: 180, cellsAlign: 'left', align: 'left' },
        { text: 'Total', dataField: 'total', width: 180, cellsAlign: 'left', align: 'left', cellsformat: 'c2' }     ];
 }