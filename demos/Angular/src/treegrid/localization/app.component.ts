import { Component, ViewChild } from '@angular/core';

import { jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';

import { getLocalization } from './../../../scripts/localization';
import { generateordersdata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTreeGrid', { static: false }) myTreeGrid: jqxTreeGridComponent;

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    source: any =
    {
        dataType: 'array',
        dataFields: [
            { name: 'name', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'id', type: 'number' },
            { name: 'parentid', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'date', type: 'date' },
            { name: 'customer', type: 'string' }
        ],
        hierarchy:
        {
            keyDataField: { name: 'id' },
            parentDataField: { name: 'parentid' }
        },
        id: 'id',
        localData: generateordersdata(10)
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns =
    [
        { text: 'Bestellung Name', dataField: 'name', align: 'center', width: 250 },
        { text: 'Auftraggeber', dataField: 'customer', align: 'center', width: 250 },
        { text: 'Preis', dataField: 'price', cellsFormat: 'c2', align: 'center', cellsAlign: 'right', width: 180 },
        {
          text: 'Bestellung Datum', dataField: 'date', align: 'center', cellsFormat: 'dd-MMMM-yyyy hh:mm',
              cellsRenderer: (rowKey: any, column: any, cellValue: any, rowData: any, cellText: any): any => {
                  if (rowData.level === 0) {
                      return this.dataAdapter.formatDate(cellValue, 'dd-MMMM-yyyy');
                  }
                  return cellText;
              }
        }
    ];

    localization: any = getLocalization('de'); 

    ready = (): void => {
        this.myTreeGrid.expandRow(2);
    };
}