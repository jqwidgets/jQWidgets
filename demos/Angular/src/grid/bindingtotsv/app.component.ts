import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        datatype: 'tab',
        datafields: [
            { name: 'Year', type: 'int' },
            { name: 'HPI', type: 'float' },
            { name: 'BuildCost', type: 'float' },
            { name: 'Population', type: 'float' },
            { name: 'Rate', type: 'float' }
        ],
        url: './../../../sampledata/homeprices.txt'
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
        { text: 'Year', datafield: 'Year', width: 200 },
        { text: 'HPI', datafield: 'HPI', cellsformat: 'f2', width: 200 },
        { text: 'Build Cost', datafield: 'BuildCost', cellsformat: 'f2', width: 180 },
        { text: 'Population', datafield: 'Population', cellsformat: 'f2', width: 100 },
        { text: 'Rate', datafield: 'Rate', cellsformat: 'f5', minwidth: 100 }
    ];
}