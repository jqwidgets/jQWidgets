import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
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

    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    padding: any = { left: 10, top: 5, right: 10, bottom: 5 };

    titlePadding: any = { left: 50, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'Quarter',
        unitInterval: 1,
        textRotationAngle: -75,
        formatFunction: (value: any) => {
            return value;
        },
        valuesOnTicks: false
    };

    seriesGroups: any[] =
    [
        {
            type: 'column',
            valueAxis:
            {
                description: 'Percentage Change',
                formatFunction: (value: any) => {
                    return value + '%';
                },
                maxValue: 10,
                minValue: -10,
                unitInterval: 2
            },
            series:
            [
                {
                    dataField: 'Change',
                    displayText: 'Change',
                    toolTipFormatFunction: (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any) => {
                        return '<DIV style="text-align:left";><b>Year-Quarter: </b>' + categoryValue
                            + '<br /><b>GDP Change:</b> ' + value + ' %</DIV>'
                    },
                    // Modify this function to return the desired colors.
                    // jqxChart will call the function for each data point.
                    // Sequential points that have the same color will be
                    // grouped automatically in a line segment
                    colorFunction: (value: any, itemIndex: any, serie: any, group): any => {
                        return (value < 0) ? '#CC1133' : '#55CC55';
                    }
                }
            ]
        }
    ];
}