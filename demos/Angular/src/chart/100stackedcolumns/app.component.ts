import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    sampleData: any[] = [
        { Day: 'Monday', Running: 30, Swimming: 5, Cycling: 25, Riding: 10 },
        { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0, Riding: 15 },
        { Day: 'Wednesday', Running: 30, Swimming: 5, Cycling: 25, Riding: 25 },
        { Day: 'Thursday', Running: 35, Swimming: 25, Cycling: 45, Riding: 15 },
        { Day: 'Friday', Running: 5, Swimming: 20, Cycling: 25, Riding: 5 },
        { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30, Riding: 30 },
        { Day: 'Sunday', Running: 60, Swimming: 45, Cycling: 5, Riding: 20 }
    ];

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        dataField: 'Day',
        tickMarks: {
            visible: true,
            interval: 1,
            color: '#BCBCBC'
        },
        gridLines: {
            visible: true,
            interval: 1,
            color: '#BCBCBC'
        },
        axisSize: 'auto'
    };

    valueAxis: any =
    {
        unitInterval: 10,
        title: { text: 'Time in minutes' },
        tickMarks: { color: '#BCBCBC' },
        gridLines: { color: '#BCBCBC' },
        labels: {
            horizontalAlignment: 'right',
            formatSettings: { sufix: '%' }
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'stackedcolumn100',
            columnsGapPercent: 100,
            seriesGapPercent: 5,
            series: [
                { dataField: 'Running', displayText: 'Running' },
                { dataField: 'Swimming', displayText: 'Swimming' },
                { dataField: 'Cycling', displayText: 'Cycling' }
            ]
        }
    ];
}
