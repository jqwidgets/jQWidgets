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

    recordsArray: any[];

	getWidth() : any {
		if (document.body.offsetWidth < 700) {
			return '90%';
		}
		
		return 700;
	}
	
    dataAdapter: any = new jqx.dataAdapter(this.source,
    {
        async: false, autoBind: true,
        loadComplete: (data: any, status: any, xhr: any, records: any[]): void => {
            this.recordsArray = records;
        },
        loadError: (xhr: any, status: any, error: any) => {
            alert('Error loading "' + this.source.url + '" : ' + error);
        }
    });


    padding: any = { left: 5, top: 0, right: 0, bottom: 0 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 0 };

    xAxis: any =
    {
        text: 'Category Axis',
        textRotationAngle: 0,
        dataField: 'month',
        showTickMarks: false,
        showLabels: false,
        tickMarksInterval: 1,
        tickMarksColor: '#888888',
        valuesOnTicks: true,
        unitInterval: 1,
        visible: false,
        showGridLines: false,
        gridLinesInterval: 3,
        gridLinesColor: '#888888',
        axisSize: 'auto'
    };

    seriesGroups: any[] =
    [
        {
            type: 'line',
            showLabels: false,
            valueAxis:
            {
                unitInterval: 5,
                visible: false,
                description: 'Temperature [C]',
                axisSize: 'auto',
                tickMarksColor: '#888888'
            },
            series: [
                { dataField: 'max', lineColor: 'green', displayText: 'Max Temperature' },
                { dataField: 'min', lineColor: 'red', displayText: 'Min Temperature' }
            ]
        }
    ];

    labelsFormatFunction = (data: any): string => {
        if (this.recordsArray[data]) {
            return "1 " + this.recordsArray[data].month;
        }
        else return "31 " + this.recordsArray[data - 1].month;
    }

    markersFormatFunction = (data: any): string => {
        if (this.recordsArray[data]) {
            return "1 " + this.recordsArray[data].month;
        }
        else return "31 " + this.recordsArray[data - 1].month;
    }
}