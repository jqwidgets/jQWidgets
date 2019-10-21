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
        url: './../../../sampledata/mobile_browsers_share_dec2011.txt'
    };
    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    legendLayout: any = { left: 700, top: 160, width: 300, height: 200, flow: 'vertical' };

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
            type: 'pie',
            showLabels: true,
            series:
            [
                {
                    dataField: 'Share',
                    displayText: 'Browser',
                    labelRadius: 170,
                    initialAngle: 15,
                    radius: 145,
                    centerOffset: 0,
                    formatFunction: (value: any) => {
                        if (isNaN(value))
                            return value;
                        return parseFloat(value) + '%';
                    },
                }
            ]
        }
    ];
}