import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    data_source_mobile: any =
    {
        datatype: 'csv',
        datafields: [
            { name: 'Browser' },
            { name: 'Share' }
        ],
        url: './../../../sampledata/mobile_browsers_share_dec2011.txt'
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    dataAdapter_mobile: any = new jqx.dataAdapter(this.data_source_mobile, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.data_source_mobile.url + '" : ' + error); } });

    data_source_desktop: any =
    {
        datatype: 'csv',
        datafields: [
            { name: 'Browser' },
            { name: 'Share' }
        ],
        url: './../../../sampledata/desktop_browsers_share_dec2011.txt'
    };

    dataAdapter_desktop: any = new jqx.dataAdapter(this.data_source_desktop, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.data_source_desktop.url + '" : ' + error); } });

    legendLayout: any = { left: 520, top: 170, width: 300, height: 200, flow: 'vertical' };

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

    seriesGroups: any[] =
    [
        {
            type: 'donut',
            offsetX: 250,
            source: this.dataAdapter_mobile,
            xAxis:
            {
                formatSettings: { prefix: 'Mobile ' }
            },
            series:
            [
                {
                    dataField: 'Share',
                    displayText: 'Browser',
                    labelRadius: 120,
                    initialAngle: 10,
                    radius: 130,
                    innerRadius: 90,
                    centerOffset: 0,
                    formatSettings: { sufix: '%', decimalPlaces: 1 }
                }
            ]
        },
        {
            type: 'donut',
            offsetX: 250,
            source: this.dataAdapter_desktop,
            colorScheme: 'scheme02',
            xAxis:
            {
                formatSettings: { prefix: 'Desktop ' }
            },
            series:
            [
                {
                    dataField: 'Share',
                    displayText: 'Browser',
                    labelRadius: 120,
                    initialAngle: 10,
                    radius: 70,
                    innerRadius: 30,
                    centerOffset: 0,
                    formatSettings: { sufix: '%', decimalPlaces: 1 }
                }
            ]
        }
    ];
}