import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        datatype: 'tab',
        datafields: [
            { name: 'Year' },
            { name: 'HPI' },
            { name: 'BuildCost' },
            { name: 'Population' },
            { name: 'Rate' }
        ],
        url: './../../../sampledata/homeprices.txt'
    };

    dataAdapter = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    padding: any = { left: 20, top: 5, right: 20, bottom: 5 };

    titlePadding: any = { left: 10, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'Year',
        minValue: 1947,
        maxValue: 2012,
        unitInterval: 5,
        tickMarks: {
            visible: true,
            interval: 1,
            dashStyle: '1,2'
        },
        gridLines: {
            visible: true,
            interval: 5,
            dashStyle: '1,3'
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'line',
            valueAxis:
            {
                unitInterval: 20,
                maxValue: 400,
                title: { text: 'U.S. Population (millions)' },
                gridLines: { visible: false }
            },
            series: [
                { dataField: 'Population', displayText: 'Population' }
            ]
        },
        {
            type: 'spline',
            valueAxis:
            {
                title: { text: 'Interest rate' },
                position: 'right',
                unitInterval: 0.01,
                maxValue: 0.2,
                visible: true,
                gridLines: { visible: false },
                labels: {
                    horizontalAlignment: 'left'
                }
            },
            series: [
                { dataField: 'Rate', displayText: 'Interest Rate' }
            ]
        },
        {
            type: 'spline',
            valueAxis:
            {
                title: { text: 'Index Value' },
                position: 'right',
                unitInterval: 20,
                maxValue: 200,
                gridLines: { visible: false },
                labels: {
                    formatSettings:
                    {
                        decimalPlaces: 0
                    },
                    horizontalAlignment: 'left'
                }
            },
            series: [
                { dataField: 'HPI', displayText: 'Real Home Price Index' },
                { dataField: 'BuildCost', displayText: 'Building Cost Index' }
            ]
        }
    ];
}
