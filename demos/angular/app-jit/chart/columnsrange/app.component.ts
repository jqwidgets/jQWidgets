import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    sampleData: any[] = [
        { a: 0.35,  b: 14.5,  c: 0.35,  d: 0.1 },
        { a: 1,     b: 2.5,   c: 1,     d: 0.2 },
        { a: 10,    b: 0.5,   c: 10,    d: 50 },
        { a: 100,   b: 205,   c: 100,   d: 40 },
        { a: 1,     b: 100,   c: 1,     d: 200 },
        { a: 5.11,  b: 10.13, c: 5.11,  d: 0.2 },
        { a: 20.13, b: 10.13, c: 20.13, d: 4 }
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
        gridLines: { dashStyle: '2,2' },
        tickMarks: { dashStyle: '1,2' }
    };

    valueAxis: any =
    {
        logarithmicScale: true,
        logarithmicScaleBase: 2,
        unitInterval: 1,
        title: { text: 'Value' },
        labels: {
            formatSettings: { decimalPlaces: 3 },
            horizontalAlignment: 'right'
        },
        gridLines: { dashStyle: '2,2' },
        tickMarks: { dashStyle: '1,2' }
    };

    seriesGroups: any =
    [
        {
            type: 'rangecolumn',
            series: [
                { dataFieldFrom: 'a', dataFieldTo: 'b', displayText: 'from A to B' },
                { dataFieldFrom: 'c', dataFieldTo: 'd', displayText: 'from C to D' }
            ]
        }
    ];
}