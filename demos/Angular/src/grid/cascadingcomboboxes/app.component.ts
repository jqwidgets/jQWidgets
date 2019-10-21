import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;

    data: string = '[{ "Country": "Belgium", "City": "Brussels"}, {"Country": "France", "City": "Paris"}, {"Country": "USA", "City": "Washington" }]';

    source: any =
    {
        datatype: 'json',
        datafields: [
            { name: 'Country', type: 'string' },
            { name: 'City', type: 'string' }
        ],
        localdata: this.data
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    columns: any[] =
    [
        {
            text: 'Country', datafield: 'Country', width: 150, columntype: 'combobox',
            cellvaluechanging: (row: number, datafield: string, columntype: any, oldvalue: any, newvalue: any): void => {
                if (newvalue != oldvalue) {
                    this.myGrid.setcellvalue(row, 'City', 'Select a city...');
                };
            }
        },
        {
            text: 'City', datafield: 'City', width: 150, columntype: 'combobox',
            initeditor: (row: number, cellvalue: any, editor: any, celltext: any, cellwidth: any, cellheight: any) => {
                let country = this.myGrid.getcellvalue(row, 'Country');
                let city = editor.val();
                let cities = new Array();
                switch (country) {
                    case 'Belgium':
                        cities = ['Bruges', 'Brussels', 'Ghent'];
                        break;
                    case 'France':
                        cities = ['Bordeaux', 'Lille', 'Paris'];
                        break;
                    case 'USA':
                        cities = ['Los Angeles', 'Minneapolis', 'Washington'];
                        break;
                };
                editor.jqxComboBox({ autoDropDownHeight: true, source: cities });
                if (city != 'Select a city...') {
                    let index = cities.indexOf(city);
                    editor.jqxComboBox('selectIndex', index);
                }
            }
        }
    ];
}