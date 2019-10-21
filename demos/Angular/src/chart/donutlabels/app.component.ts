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
            { name: 'Browser' },
            { name: 'Share' }
        ],
        url: './../../../sampledata/desktop_browsers_share_dec2011.txt'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    legendPosition: any = { left: 520, top: 140, width: 100, height: 100 };

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    seriesGroups: any[] =
    [
        {
            type: 'donut',
            showLabels: true,
            series:
            [
                {
                    dataField: 'Share',
                    displayText: 'Browser',
                    labelRadius: 120,
                    initialAngle: 15,
                    radius: 170,
                    innerRadius: 70,
                    centerOffset: 0,
                    formatSettings: { sufix: '%', decimalPlaces: 1 }
                }
            ]
        }
    ];
}