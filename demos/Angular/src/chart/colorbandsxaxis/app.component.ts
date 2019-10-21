import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    source =
    {
        datatype: 'tsv',
        datafields: [
            { name: 'Year' },
            { name: 'Northeast' },
            { name: 'South' },
            { name: 'Midwest' },
            { name: 'West' },
            { name: 'UnitedStates' }
        ],
        url: './../../../sampledata/us_homeownership_rate.csv'
    };

    dataAdapter = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    padding: any = { left: 5, top: 5, right: 10, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    bands() {
        let recessions =
            [
                { from: 1969.91, to: 1970.83 },
                { from: 1973.83, to: 1975.25 },
                { from: 1980, to: 1980.58 },
                { from: 1981.58, to: 1982.83 },
                { from: 1990.58, to: 1991.25 },
                { from: 2001.25, to: 2001.83 },
                { from: 2007.91, to: 2009.5 }
            ];

        let bands = [];

        for (let i = 0; i < recessions.length; i++) {
            bands.push({ minValue: recessions[i].from, maxValue: recessions[i].to, fillColor: 'red', opacity: 0.2 });
        }

        return bands;
    }

    xAxis: any =
    {
        dataField: 'Year',
        tickMarks: {
            visible: true,
            interval: 1,
            color: '#BCBCBC'
        },
        labels: { angle: -90 },
        unitInterval: 1,
        flip: false,
        bands: this.bands() // attach the color bands to the xAxis
    };

    valueAxis =
    {
        title: { text: 'Homeownership rate<br>' },
        labels: {
            formatSettings: { sufix: '%' }
        },
        bands: [
            //  { minValue: 60, maxValue: 63 }
        ],
        flip: false
    };

    seriesGroups: any[] =
    [
        {
            type: 'line',
            series: [
                { dataField: 'Northeast', displayText: 'NorthEast' },
                { dataField: 'South' },
                { dataField: 'Midwest', displayText: 'MidWest' },
                { dataField: 'West' },
                { dataField: 'UnitedStates', displayText: 'United States' },
            ]
        }
    ];
}
