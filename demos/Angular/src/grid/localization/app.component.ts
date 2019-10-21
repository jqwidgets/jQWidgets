import { Component } from '@angular/core';

import { getLocalization } from './../../../scripts/localization';
import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {

    source: any =
    {
        localdata: generatedata(250, false),
        datafields:
        [
            { name: 'name', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ],
        datatype: 'array'
    }

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'Name', columntype: 'textbox', filtertype: 'textbox', datafield: 'name', width: 180 },
        { text: 'Produkt', filtertype: 'textbox', datafield: 'productname', width: 220 },
        { text: 'Datum', datafield: 'date', columntype: 'datetimeinput', filtertype: 'date', width: 210, cellsalign: 'right', cellsformat: 'd' },
        { text: 'Qt.', datafield: 'quantity', columntype: 'numberinput', filtertype: 'textbox', cellsalign: 'right', width: 60 },
        { text: 'Preis', datafield: 'price', columntype: 'numberinput', filtertype: 'textbox', cellsformat: 'c2', cellsalign: 'right' }
    ];

    localization: any = getLocalization('de'); 
}