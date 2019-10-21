import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
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

    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });
 
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    toolTipCustomFormatFn = (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any): string => {
        let dataItem = this.dataAdapter.records[itemIndex];
        return '<DIV style="text-align:left"><b>Date: </b>' +
            categoryValue.getDate() + '-' + this.months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() + '<br /><br /><b>NASDAQ: </b>' +
            this.dataAdapter.formatNumber(dataItem['NASDAQ'], 'f') + '<br /><b>S&P 500: </b>' +
            this.dataAdapter.formatNumber(dataItem['S&P 500'], 'f') + '</DIV>';
    };

    padding: any = { left: 10, top: 5, right: 30, bottom: 5 };

    titlePadding: any = { left: 10, top: 0, right: 30, bottom: 10 };

    xAxis: any =
    {
        type: 'date',
        baseUnit: 'month',
        minValue: '01-01-2014',
        maxValue: '01-01-2015',
        dataField: 'Date',
        valuesOnTicks: true,
        formatFunction: (value: any): string => {
            return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
        },
        gridLines: {
            visible: true,
            interval: 3,
        },
        labels:
        {
            angle: -45,
            offset: { x: -20, y: 0 }
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'spline',
            toolTipFormatFunction: this.toolTipCustomFormatFn,
            valueAxis:
            {
                title: { text: 'Daily Closing Price<br>' }
            },
            series: [
                { dataField: 'S&P 500', displayText: 'S&P 500' },
                { dataField: 'NASDAQ', displayText: 'NASDAQ' }
            ]
        }
    ];
}