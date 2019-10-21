import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source =
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

    padding: any = { left: 15, top: 5, right: 20, bottom: 5 };

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
        minValue: 1950,
        maxValue: 2010,
        unitInterval: 5,
        valuesOnTicks: true
    };

    seriesGroups: any[] =
    [
        {
            alignEndPointsWithIntervals: false,
            type: 'splinearea',
            valueAxis:
            {
                visible: true,
                unitInterval: 20,
                title: { text: 'Index Value' },
                labels: {
                    horizontalAlignment: 'right',
                    formatSettings: { decimalPlaces: 0 }
                }
            },
            series: [
                { dataField: 'HPI', displayText: 'Real Home Price Index', opacity: 0.7 },
                { dataField: 'BuildCost', displayText: 'Building Cost Index', opacity: 0.9 }
            ]
        },
        {
            type: 'spline',
            alignEndPointsWithIntervals: false,
            valueAxis:
            {
                title: { text: 'Interest Rate' },
                position: 'right',
                unitInterval: 0.01,
                maxValue: 0.2,
                labels: { formatSettings: { decimalPlaces: 2 } },
                tickMarks: {
                    visible: true,
                    interval: 0.005,
                },
                gridLines: {
                    visible: false,
                    interval: 0.01
                }
            },
            series: [
                { dataField: 'Rate', displayText: 'Interest Rate', opacity: 1.0, lineWidth: 4, dashStyle: '4,4' }
            ]
        }
    ];
}
