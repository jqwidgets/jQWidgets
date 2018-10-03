import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    sampleData: any[]= [
        { Index: '1', SerieA: -30, SerieB: -10, SerieC: -25 },
        { Index: '2', SerieA: -25, SerieB: -25, SerieC: 10 },
        { Index: '3', SerieA: 30, SerieB: 15, SerieC: 25 },
        { Index: '4', SerieA: 35, SerieB: 25, SerieC: 45 },
        { Index: '5', SerieA: 20, SerieB: 15, SerieC: 25 }
    ];

    padding: any = { left: 15, top: 15, right: 15, bottom: 15 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'Index',
        tickMarks: {
            visible: true,
            interval: 1
        },
        gridLines: {
            visible: true,
            interval: 1
        }
    };

    valueAxis: any =
    {
        labels: { horizontalAlignment: 'right' }
    };

    seriesGroups: any[] =
    [
        {
            type: 'column',
            columnsGapPercent: 20,
            seriesGapPercent: 20,
            columnsTopWidthPercent: 100,
            columnsBottomWidthPercent: 30,
            series: [
                { dataField: 'SerieA', displayText: 'Serie A', labels: { visible: true } },
                { dataField: 'SerieB', displayText: 'Serie B', labels: { visible: true } },
                { dataField: 'SerieC', displayText: 'Serie C', labels: { visible: true } }
            ]
        }
    ];
}