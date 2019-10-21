import { Component } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    days: any[] = [
        { Day: 'Monday' },
        { Day: 'Tuesday' },
        { Day: 'Wednesday' },
        { Day: 'Thursday' },
        { Day: 'Friday' },
        { Day: 'Saturday' },
        { Day: 'Sunday' }
    ];

    Keith: any[] = [
        { Minutes: 30 },
        { Minutes: 25 },
        { Minutes: 30 },
        { Minutes: 35 },
        { Minutes: 20 },
        { Minutes: 30 },
        { Minutes: 60 }
    ];

    Erica: any[] = [
        { Minutes: 15 },
        { Minutes: 25 },
        { Minutes: 20 },
        { Minutes: 25 },
        { Minutes: 20 },
        { Minutes: 20 },
        { Minutes: 45 }
    ];

    George: any[] = [
        { Minutes: 25 },
        { Minutes: 30 },
        { Minutes: 25 },
        { Minutes: 45 },
        { Minutes: 25 },
        { Minutes: 30 },
        { Minutes: 90 }
    ];

    padding: any = { left: 5, top: 5, right: 40, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'Day',
        gridLines: { visible: true }
    };

    valueAxis: any =
    {
        visible: true,
        title: { text: 'Time in minutes' }
    };

    seriesGroups: any[] =
    [
        {
            type: 'stackedline',
            source: this.Keith,
            series: [
                { dataField: 'Minutes', displayText: 'Keith' }
            ]
        },
        {
            type: 'stackedline',
            source: this.Erica,
            series: [
                { dataField: 'Minutes', displayText: 'Erica' }
            ]
        },
        {
            type: 'stackedline',
            source: this.George,
            series: [
                { dataField: 'Minutes', displayText: 'George' }
            ]
        }
    ];
}