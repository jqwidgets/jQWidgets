import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        datatype: 'csv',
        datafields: [
            { name: 'Quarter' },
            { name: 'Change' }
        ],
        url: './../../../sampledata/us_gdp_2008-2013.csv'
    };
    dataAdapter = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    padding = { left: 5, top: 5, right: 10, bottom: 5 };

    titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    categoryAxis =
    {
        dataField: 'Quarter',
        unitInterval: 1,
        textRotationAngle: -75,
        formatFunction: (value: any) => {
            return value;
        },
        valuesOnTicks: false
    };

    seriesGroups =
    [
        {
            type: 'line',
            valueAxis:
            {
                description: 'Percentage Change',
                formatFunction: (value: any) => {
                    return value + '%';
                }
            },
            series:
            [
                {
                    dataField: 'Change',
                    displayText: 'Change',
                    // Modify this function to return desired colors.
                    // jqxChart will call the function for each data point.
                    // Sequential points that have the same color will be
                    // grouped automatically in a line segment
                    colorFunction: (value: any) => {
                        return (value < 0) ? '#FF0000' : '#00FF00';
                    }
                }
            ]
        }
    ];
}