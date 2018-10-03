import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    sampleData: any[] = [
        { Index: '1', SerieA: -30, SerieB: -10, SerieC: -25 },
        { Index: '2', SerieA: -25, SerieB: -25, SerieC: 10 },
        { Index: '3', SerieA: 30, SerieB: 0, SerieC: 25 },
        { Index: '4', SerieA: 35, SerieB: 25, SerieC: 45 },
        { Index: '5', SerieA: 0, SerieB: 20, SerieC: 25 }
    ];

    padding: any = { left: 15, top: 15, right: 15, bottom: 15 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        flip: true,
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
        flip: true,
        labels: { horizontalAlignment: 'right' }
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    seriesGroups: any[] =
    [
        {
            orientation: 'horizontal',
            type: 'stackedcolumn',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            columnsTopWidthPercent: 0,
            columnsBottomWidthPercent: 100,
            series: [
                { dataField: 'SerieA', displayText: 'Serie A' },
                { dataField: 'SerieB', displayText: 'Serie B' },
                { dataField: 'SerieC', displayText: 'Serie C' }
            ]
        }
    ];
}