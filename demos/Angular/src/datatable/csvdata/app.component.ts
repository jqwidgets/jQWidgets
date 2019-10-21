import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        dataType: 'csv',
        dataFields: [
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
        { text: 'Date', dataField: 'Date', cellsFormat: 'D', width: 250 },
        { text: 'S&P 500', dataField: 'S&P 500', width: 300, cellsFormat: 'f' },
        { text: 'NASDAQ', dataField: 'NASDAQ', cellsFormat: 'f' }
    ];

}
