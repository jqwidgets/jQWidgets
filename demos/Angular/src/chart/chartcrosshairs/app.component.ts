import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        datatype: 'csv',
        datafields: [
            { name: 'Date' },
            { name: 'S&P 500' },
            { name: 'NASDAQ' }
        ],
        url: './../../../sampledata/nasdaq_vs_sp500.txt'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    padding: any = { left: 10, top: 5, right: 30, bottom: 5 };

    titlePadding: any = { left: 10, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'Date',
        formatFunction: (value: any): string => {
            return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
        },
        type: 'date',
        baseUnit: 'month',
        minValue: '01-01-2014',
        maxValue: '01-01-2015',
        unitInterval: 1,
        valuesOnTicks: true,
        gridLines: { interval: 3 },
        labels: {
            angle: -45,
            rotationPoint: 'topright',
            offset: { x: 0, y: -25 }
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'line',
            valueAxis:
            { title: { text: 'Daily Closing Price<br><br>' } },
            series: [
                { dataField: 'S&P 500', displayText: 'S&P 500' },
                { dataField: 'NASDAQ', displayText: 'NASDAQ' }
            ]
        }
    ];
}
