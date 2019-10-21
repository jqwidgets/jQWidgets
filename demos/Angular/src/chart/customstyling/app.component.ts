import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    padding: any = { left: 10, top: 5, right: 30, bottom: 5 };

    titlePadding: any = { left: 10, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        dataField: 'Date',
        type: 'date',
        baseUnit: 'month',
        unitInterval: 1,
        minValue: '01-01-2014',
        maxValue: '01-01-2015',
        tickMarks: {
            visible: true,
            interval: 1,
            color: '#FFFFFF',
            dashStyle: '2,1'
        },
        gridLines: {
            visible: true,
            interval: 1,
            color: '#FFFFFF',
            dashStyle: '2,1'
        },
        labels:
        {
            angle: -45,
            rotationPoint: 'topright',
            offset: { x: 0, y: -25 },
            formatFunction: (value: any) => {
                return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
            }
        }
    };

    valueAxis: any =
    {
        displayValueAxis: true,
        title: { text: 'Daily Closing Price<br>' },
        gridLines: {
            dashStyle: '2,1',
            color: '#FFFFFF'
        },
        tickMarks: {
            dashStyle: '2,1',
            color: '#FFFFFF'
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'line',
            series: [
                { dataField: 'S&P 500', displayText: 'S&P 500', lineColor: '#FFFFFF', lineColorSelected: '#DDDDDD', fillColor: '#FFFFFF' },
                { dataField: 'NASDAQ', displayText: 'NASDAQ', lineColor: '#0FF0FF', lineColorSelected: '#2EE2EE', fillColor: '#0FF0FF' }
            ]
        }
    ];
}