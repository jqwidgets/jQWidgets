import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    sampleData: any[] = [
        { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25 },
        { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0 },
        { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25 },
        { Day: 'Thursday', Running: 35, Swimming: 25, Cycling: 45 },
        { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25 },
        { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30 },
        { Day: 'Sunday', Running: 60, Swimming: 45, Cycling: 0 }
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
        axisSize: 'auto',
        tickMarks: {
            visible: true,
            interval: 1,
            color: '#BCBCBC'
        },
        gridLines: {
            visible: true,
            interval: 1,
            color: '#BCBCBC'
        }
    };

    valueAxis: any =
    {
        unitInterval: 10,
        minValue: 0,
        maxValue: 120,
        title: { text: 'Time in minutes' },
        labels: { horizontalAlignment: 'right' },
        tickMarks: { color: '#BCBCBC' }
    };

    seriesGroups: any[] =
    [
        {
            type: 'stackedcolumn',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            series: [
                { dataField: 'Running', displayText: 'Running' },
                { dataField: 'Swimming', displayText: 'Swimming' },
                { dataField: 'Cycling', displayText: 'Cycling' }
            ]
        }
    ];
}