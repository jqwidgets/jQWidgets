import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        datatype: "tab",
        datafields: [
            { name: 'Year' },
            { name: 'HPI' },
            { name: 'BuildCost' },
            { name: 'Population' },
            { name: 'Rate' }
        ],
        url: './../../../sampledata/homeprices.txt'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    padding: any = { left: 5, top: 5, right: 25, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

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
            interval: 1
        },
        gridLines: {
            visible: true,
            interval: 5
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'line',
            valueAxis:
            {
                unitInterval: 10,
                padding: { left: 10 },
                title: { text: 'U.S. Population (millions)<br>' },
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
                unitInterval: 1,
                visible: false
            },
            series: [
                { dataField: 'Rate', displayText: 'Interest Rate' }
            ]
        },
        {
            type: 'spline',
            valueAxis:
            {
                unitInterval: 20,
                title: { text: 'Index Value<br>' },
                labels: {
                    horizontalAlignment: 'right',
                    formatSettings: { decimalPlaces: 0 }
                }
            },
            series: [
                { dataField: 'HPI', displayText: 'Real Home Price Index' },
                { dataField: 'BuildCost', displayText: 'Building Cost Index' }
            ]
        }

    ];
}