import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source =
    {
        datatype: 'csv',
        datafields: [
            { name: 'Date' },
            { name: 'S&P 500' },
            { name: 'NASDAQ' }
        ],
        url: './../../../sampledata/nasdaq_vs_sp500.txt'
    };

    dataAdapter = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    padding: any = { left: 10, top: 5, right: 10, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        dataField: 'Date',
        type: 'date',
        baseUnit: 'month',
        minValue: new Date(2014, 0, 1),
        maxValue: new Date(2014, 11, 1),
        valuesOnTicks: true,
        labels: {
            angle: -45,
            rotationPoint: 'topright',
            offset: { x: 0, y: -15 },
            formatFunction: (value: any) => {
                return this.months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
            },
        },
        toolTipFormatFunction: (value: any) => {
            return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
        }
    };

    valueAxis: any =
    {
        title: { text: 'Daily Closing Price<br>' }
    };

    seriesGroups: any[] =
    [
        {
            type: 'area',
            alignEndPointsWithIntervals: true,
            series: [
                { dataField: 'NASDAQ', displayText: 'NASDAQ', opacity: 0.7 },
                { dataField: 'S&P 500', displayText: 'S&P 500', opacity: 0.8 }
            ]
        }
    ];
}
