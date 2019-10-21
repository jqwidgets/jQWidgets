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
            { name: 'Date' },
            { name: 'Open' },
            { name: 'High' },
            { name: 'Low' },
            { name: 'Close' },
            { name: 'Volume' },
            { name: 'AdjClose' }
        ],
        url: './../../../sampledata/TSLA_stockprice.csv'
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    padding: any = { left: 15, top: 5, right: 30, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        type: 'date',
        baseUnit: 'month',
        minValue: new Date(2013, 5, 1),
        maxValue: new Date(2014, 2, 1),
        valuesOnTicks: true,
        dataField: 'Date',
        labels:
        {
            formatFunction: (value: any): string => {
                return this.months[value.getUTCMonth()] + '-' + value.getFullYear();
            },
            angle: 0,
            horizontalAlignment: 'right'
        },
        toolTipFormatFunction: (value: any): string => {
            return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
        },
        tickMarks: { visilbe: true }
    };

    seriesGroups: any[] =
    [
        {
            type: 'stepline',
            valueAxis:
            {
                flip: false,
                title: { text: 'Price per share [USD]<br>' },
                labels: { horizontalAlignment: 'right' }
            },
            series: [
                { dataField: 'Close', displayText: 'Close Price', lineWidth: 1, symbolSize: 6 }
            ]
        }
    ];
}