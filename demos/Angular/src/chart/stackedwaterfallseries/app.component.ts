import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    sampleData: any[] = [
        { a: 35, b: 40 },
        { a: 10, b: 25 },
        { a: 20, b: 20 },
        { a: 30, b: 25 },
        { a: 40, b: 17 },
        { a: 45, b: 20 },
        { a: 20, b: 30 }
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
            formatSettings: { decimalPlaces: 0 },
            horizontalAlignment: 'right'
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'stackedwaterfall',
            columnsMaxWidth: 50,
            series: [
                { dataField: 'a', displayText: 'A' },
                { dataField: 'b', displayText: 'B', summary: 'c' }
            ]
        }
    ];
}