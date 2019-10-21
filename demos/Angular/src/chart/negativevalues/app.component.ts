import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        datatype: 'json',
        datafields: [
            { name: 'month' },
            { name: 'min' },
            { name: 'max' },
        ],
        url: './../../../sampledata/weather_geneva.txt'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'month',
        displayText: 'Month',
        unitInterval: 1,
        gridLines: { interval: 3 }
    };

    valueAxis: any =
    {
        unitInterval: 5,
        title: {
            visible: true,
            text: 'Temperature [C]<br>'
        },
        labels: {
            formatSettings: {
                decimalPlaces: 1,
                negativeWithBrackets: false
            },
            horizontalAlignment: 'right'
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'column',
            series: [
                { dataField: 'max', displayText: 'Max Temperature' },
                { dataField: 'min', displayText: 'Min Temperature' }
            ]
        }
    ];
}