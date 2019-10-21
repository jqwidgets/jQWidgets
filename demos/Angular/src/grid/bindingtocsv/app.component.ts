import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        datatype: "csv",
        datafields: [
            { name: 'Date', type: 'date' },
            { name: 'S&P 500', type: 'float' },
            { name: 'NASDAQ', type: 'float' }
        ],
        url: './../../../sampledata/nasdaq_vs_sp500.txt'
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
        { text: 'Date', datafield: 'Date', cellsformat: 'D', width: 250 },
        { text: 'S&P 500', datafield: 'S&P 500', width: 300, cellsformat: 'f' },
        { text: 'NASDAQ', datafield: 'NASDAQ', cellsformat: 'f' }
    ];
}
