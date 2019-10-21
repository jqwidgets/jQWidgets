import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    sampleData: any[] = [
        { a: 0.35,  b: 14.5 },
        { a: 1,     b: 2.5 },
        { a: 10,    b: 0.2 },
        { a: 100,   b: 205 },
        { a: 1,     b: 100 },
        { a: 5.11,  b: 10.13 },
        { a: 20.13, b: 10.13 },
        { a: 600,   b: 300 }];

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
        dataField: '',
        title: { visible: false, text: '' },
        gridLines: { visible: true },
        tickMarks: { visible: true }
    };

    valueAxis: any =
    {
        logarithmicScale: true,
        logarithmicScaleBase: 10,
        baselineValue: 1,
        unitInterval: 1,
        title: { text: 'Value' },
        tickMarks: { interval: 1 },
        gridLines: { interval: 1 },
        labels: {
            formatSettings: { decimalPlaces: 1 },
            horizontalAlignment: 'right'
        }
    };

    seriesGroups: any =
    [
        {
            type: 'column',
            series: [
                { dataField: 'a', displayText: 'A' },
                { dataField: 'b', displayText: 'B' }
            ]
        }
    ];
}