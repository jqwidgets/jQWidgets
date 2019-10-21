import { Component, ViewChild } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;

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
        tickMarks: {
            visible: true,
            interval: 1,
            color: '#CACACA'
        },
        gridLines: {
            visible: false,
            interval: 1,
            color: '#CACACA'
        }
    };

    valueAxis: any =
    {
        minValue: 0,
        maxValue: 100,
        unitInterval: 10,
        title: { text: 'Time in minutes' },
        tickMarks: { color: '#CACACA' },
        gridLines: { color: '#CACACA' }
    };

    seriesGroups: any[] =
    [
        {
            type: 'splinearea',
            series: [
                { greyScale: true, dataField: 'Goal', displayText: 'Personal Goal', opacity: 0.7 }
            ]
        },
        {
            type: 'stackedcolumn',
            columnsGapPercent: 50,
            seriesGapPercent: 5,
            series: [
                { greyScale: true, dataField: 'Running', displayText: 'Running' },
                { greyScale: true, dataField: 'Swimming', displayText: 'Swimming' },
                { greyScale: false, dataField: 'Cycling', displayText: 'Cycling' }
            ]
        }
    ];

    RunningOnChange(event: any) {
        this.myChart.seriesGroups()[1].series[0].greyScale = !event.args.checked;
        this.myChart.refresh();
    };

    CyclingOnChange(event: any) {
        this.myChart.seriesGroups()[1].series[2].greyScale = !event.args.checked;
        this.myChart.refresh();
    };

    SwimmingOnChange(event: any) {
        this.myChart.seriesGroups()[1].series[1].greyScale = !event.args.checked;
        this.myChart.refresh();
    };
    GoalOnChange(event: any) {
        this.myChart.seriesGroups()[0].series[0].greyScale = !event.args.checked;
        this.myChart.refresh();
    };
}