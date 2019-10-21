import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    sampleData: any[] = [
        { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25, Goal: 40 },
        { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0, Goal: 50 },
        { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25, Goal: 60 },
        { Day: 'Thursday', Running: 20, Swimming: 20, Cycling: 25, Goal: 40 },
        { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25, Goal: 50 },
        { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30, Goal: 60 },
        { Day: 'Sunday', Running: 20, Swimming: 40, Cycling: 0, Goal: 90 }
    ];

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
        dataField: 'Day',
        unitInterval: 1,
        tickMarks:
        {
            visible: true,
            interval: 1,
            color: '#888888'
        },
        gridLines: {
            visible: false,
            interval: 1,
            color: '#888888'
        },
        axisSize: 'auto'
    };

    valueAxis: any =
    {
        visible: true,
        unitInterval: 10,
        minValue: 0,
        maxValue: 100,
        title: { text: 'Time in minutes' },
        tickMarks: { color: '#888888' },
        gridLines: { color: '#888888' },
        axisSize: 'auto'
    };

    seriesGroups: any[] =
    [
        {
            type: 'splinearea',
            series: [
                { dataField: 'Goal', displayText: 'Personal Goal', opacity: 0.7 }
            ]
        },
        {
            type: 'stackedcolumn',
            columnsGapPercent: 50,
            seriesGapPercent: 5,
            series: [
                { dataField: 'Running', displayText: 'Running' },
                { dataField: 'Swimming', displayText: 'Swimming' },
                { dataField: 'Cycling', displayText: 'Cycling' }
            ]
        }
    ];
}