import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        datatype: 'json',
        datafields: [
            { name: 'name', type: 'string' },
            { name: 'type', type: 'string' },
            { name: 'calories', type: 'int' },
            { name: 'totalfat', type: 'string' },
            { name: 'protein', type: 'string' },
        ],
        id: 'id',
        url: './../../../sampledata/beverages.txt'
    }

    dataAdapter: any = new jqx.dataAdapter(this.source);

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    columns: any[] =
    [
        { text: 'Name', datafield: 'name', width: '30%' },
        { text: 'Beverage Type', datafield: 'type', width: '25%' },
        { text: 'Calories', datafield: 'calories', width: '15%' },
        { text: 'Total Fat', datafield: 'totalfat', width: '15%' },
        { text: 'Protein', datafield: 'protein', width: '15%' }
    ];
}