import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;

    ngAfterViewInit(): void {
        this.myChart.createComponent(this.settings);
    }

    months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    source: any =
    {
        datatype: "csv",
        datafields: [
            { name: 'Date' },
            { name: 'S&P 500' },
            { name: 'NASDAQ' }
        ],
        url: './../../../sampledata/nasdaq_vs_sp500.txt'
    };
    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + this.source.url + '" : ' + error); } });

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    settings: any = {
        title: 'U.S. Stock Market Index Performance',
        description: 'NASDAQ Composite compared to S&P 500',
        enableAnimations: true,
        showLegend: true,
        padding: { left: 10, top: 5, right: 10, bottom: 5 },
        titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
        source: this.dataAdapter,
        xAxis:
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
        },
        valueAxis:
        {
            visible: true,
            title: { text: 'Daily Closing Price<br>' },
            tickMarks: { color: '#BCBCBC' }
        },
        colorScheme: 'scheme04',
        seriesGroups:
        [
            {
                type: 'line',
                series: [
                    { dataField: 'S&P 500', displayText: 'S&P 500' },
                    { dataField: 'NASDAQ', displayText: 'NASDAQ' }
                ]
            }
        ]
    }

}