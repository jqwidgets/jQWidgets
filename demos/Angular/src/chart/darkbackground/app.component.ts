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

    toolTipCustomFormatFn = (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any): any => {
        let dataItem = this.dataAdapter.records[itemIndex];
        return '<DIV style="background: #2e3338; text-align:left"><b>Date: </b>' +
            categoryValue.getDate() + '-' + this.months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() + '<br /><br /><b>NASDAQ: </b>' +
            this.dataAdapter.formatNumber(dataItem['NASDAQ'], 'f') + '<br /><b>S&P 500: </b>' +
            this.dataAdapter.formatNumber(dataItem['S&P 500'], 'f') + '</DIV>';
    };

    padding: any = { left: 10, top: 5, right: 10, bottom: 5 };

    titlePadding: any= { left: 50, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        dataField: 'Date',
        formatFunction: (value: any) => {
            return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
        },
        type: 'date',
        baseUnit: 'month',
        valuesOnTicks: true,
        minValue: '01-01-2014',
        maxValue: '01-01-2015',
        tickMarks: {
            visible: true,
            interval: 1,
            color: '#BCBCBC'
        },
        unitInterval: 1,
        gridLines: {
            visible: true,
            interval: 3,
            color: '#BCBCBC'
        },
        labels: {
            angle: -45,
            rotationPoint: 'topright',
            offset: { x: 0, y: -25 }
        }
    };

    valueAxis =
    {
        visible: true,
        title: { text: 'Daily Closing Price<br>' },
        tickMarks: { color: '#BCBCBC' }
    };

    seriesGroups =
    [
        {
            type: 'spline',
            toolTipBackground: '#2e3338',
            toolTipFormatFunction: this.toolTipCustomFormatFn,
            series: [
                { dataField: 'S&P 500', displayText: 'S&P 500' },
                { dataField: 'NASDAQ', displayText: 'NASDAQ' }
            ]
        }
    ];
}