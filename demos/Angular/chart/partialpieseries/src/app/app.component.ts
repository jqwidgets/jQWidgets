import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    dataStatCounter: any =
    [
        { Browser: 'Chrome', Share: 45.6 },
        { Browser: 'IE', Share: 24.6 },
        { Browser: 'Firefox', Share: 20.4 },
        { Browser: 'Safari', Share: 5.1 },
        { Browser: 'Opera', Share: 1.3 },
        { Browser: 'Other', Share: 3.0 }
    ];
    dataW3CCounter: any =
    [
        { Browser: 'Chrome', Share: 34.1 },
        { Browser: 'IE', Share: 20.3 },
        { Browser: 'Firefox', Share: 18.3 },
        { Browser: 'Safari', Share: 17.8 },
        { Browser: 'Opera', Share: 2.7 },
        { Browser: 'Other', Share: 6.8 }
    ];
    dataWikimedia: any =
    [
        { Browser: 'Chrome', Share: 42.7 },
        { Browser: 'IE', Share: 18.0 },
        { Browser: 'Firefox', Share: 15.3 },
        { Browser: 'Safari', Share: 6.1 },
        { Browser: 'Opera', Share: 2.4 },
        { Browser: 'Other', Share: 15.6 }
    ];
    dataNetApplications: any =
    [
        { Browser: 'Chrome', Share: 16.4 },
        { Browser: 'IE', Share: 55.2 },
        { Browser: 'Firefox', Share: 18.0 },
        { Browser: 'Safari', Share: 5.8 },
        { Browser: 'Opera', Share: 1.3 },
        { Browser: 'Other', Share: 3.4 }
    ];
    charts: any[] = [
        { title: 'Stat counter', label: 'Stat', dataSource: this.dataStatCounter },
        { title: 'W3C counter', label: 'W3C', dataSource: this.dataW3CCounter },
        { title: 'Wikimedia', label: 'Wikimedia', dataSource: this.dataWikimedia },
        { title: 'Net Applications', label: 'NetApp', dataSource: this.dataNetApplications }
    ];

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
            showLegend: true,
            enableSeriesToggle: true,
            series:
            [
                {
                    dataField: 'Share',
                    displayText: 'Browser',
                    showLabels: true,
                    labelRadius: 160,
                    labelLinesEnabled: true,
                    labelLinesAngles: true,
                    labelsAutoRotate: false,
                    initialAngle: 0,
                    radius: 125,
                    minAngle: 0,
                    maxAngle: 180,
                    centerOffset: 0,
                    offsetY: 170,
                    formatFunction: (value: any, itemIdx: any, serieIndex: any, groupIndex: any) => {
                        if (isNaN(value))
                            return value;
                        return value + '%';
                    }
                }
            ]
        }
    ];
}