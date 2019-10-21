import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        dataType: 'json',
        dataFields: [
            { name: 'name', type: 'string' },
            { name: 'type', type: 'string' },
            { name: 'calories', type: 'int' },
            { name: 'totalfat', type: 'string' },
            { name: 'protein', type: 'string' }
        ],
        id: 'id',
        url: './../../../sampledata/beverages.txt'
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
        { text: 'Name', dataField: 'name', width: 300 },
        { text: 'Beverage Type', dataField: 'type', width: 300 },
        { text: 'Calories', dataField: 'calories', width: 180 },
        { text: 'Total Fat', dataField: 'totalfat', width: 120 },
        { text: 'Protein', dataField: 'protein' }
    ];

}

