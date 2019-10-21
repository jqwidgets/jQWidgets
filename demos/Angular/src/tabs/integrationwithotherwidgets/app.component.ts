import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
 	getWidth() : any {
		if (document.body.offsetWidth < 600) {
			return '90%';
		}
		
		return 600;
	}
	
    initGrid = () => {
        let source =
            {
                datatype: 'csv',
                datafields: [
                    { name: 'Date' },
                    { name: 'S&P 500' },
                    { name: 'NASDAQ' }
                ],
                url: './../../../sampledata/nasdaq_vs_sp500.txt'
            };
        let dataAdapter = new jqx.dataAdapter(source, { async: false, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });
        //let myChart: jqwidgets.jqxChart = jqwidgets.createInstance('#jqxChart', 'jqxChart', settings);
        let myGrid: jqwidgets.jqxGrid = jqwidgets.createInstance('#jqxGrid', 'jqxGrid', {
            width: '100%',
            height: '84%',
            source: dataAdapter,
            columns: [
                { text: 'Date', datafield: 'Date', cellsformat: 'd', width: 250 },
                { text: 'S&P 500', datafield: 'S&P 500', width: 150 },
                { text: 'NASDAQ', datafield: 'NASDAQ' }
            ]
        });
    }

    initChart = () => {
        // prepare the data
        let source =
            {
                datatype: 'csv',
                datafields: [
                    { name: 'Date' },
                    { name: 'S&P 500' },
                    { name: 'NASDAQ' }
                ],
                url: './../../../sampledata/nasdaq_vs_sp500.txt'
            };
        let dataAdapter = new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        // prepare jqxChart settings
        let settings = {
            title: 'U.S. Stock Market Index Performance (2011)',
            description: 'NASDAQ Composite compared to S&P 500',
            enableAnimations: true,
            showLegend: true,
            padding: { left: 10, top: 5, right: 10, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            source: dataAdapter,
            categoryAxis:
            {
                dataField: 'Date',
                formatFunction: (value) => {
                    return months[value.getMonth()];
                },
                toolTipFormatFunction: (value) => {
                    return value.getDate() + '-' + months[value.getMonth()];
                },
                type: 'date',
                baseUnit: 'month',
                showTickMarks: true,
                tickMarksInterval: 1,
                tickMarksColor: '#888888',
                unitInterval: 1,
                showGridLines: true,
                gridLinesInterval: 3,
                gridLinesColor: '#888888',
                valuesOnTicks: false
            },
            colorScheme: 'scheme04',
            seriesGroups:
            [
                {
                    type: 'line',
                    valueAxis:
                    {
                        displayValueAxis: true,
                        description: 'Daily Closing Price',
                        axisSize: 'auto',
                        tickMarksColor: '#888888'
                    },
                    series: [
                        { dataField: 'S&P 500', displayText: 'S&P 500' },
                        { dataField: 'NASDAQ', displayText: 'NASDAQ' }
                    ]
                }
            ]
        };
        // setup the chart
        let myChart: jqwidgets.jqxChart = jqwidgets.createInstance('#jqxChart', 'jqxChart', settings);
    }

    initWidgets = (tab) => {
        switch (tab) {
            case 0:
                this.initGrid();
                break;
            case 1:
                this.initChart();
                break;
        }
    };
}