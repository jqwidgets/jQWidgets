import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    sampleData: any[] = [
        { a: 3, b: 9 },
        { a: 5, b: 7 },
        { a: 2, b: 9 },
        { a: 10, b: 15 },
        { a: 9, b: 7 },
        { a: 15, b: 10 },
        { a: 7, b: 5 },
        { total: true }
    ];

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        gridLines: { visible: true },
        tickMarks: { visible: true }
    };

    valueAxis: any =
    {
        logarithmicScale: true,
        logarithmicScaleBase: 2,
        title: { text: 'Value<br>' },
        labels:
        {
            formatSettings: { decimalPlaces: 2 },
            horizontalAlignment: 'right'
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'waterfall',
            columnsMaxWidth: 50,
            series:
            [
                { dataField: 'a', displayText: 'A' },
                { dataField: 'b', displayText: 'B', summary: 'total' }
            ]
        }
    ];
}