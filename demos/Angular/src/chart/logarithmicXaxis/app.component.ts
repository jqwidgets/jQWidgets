import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    sampleData: any[] = [
        { a: 0.1535, b: 0.5 },
        { a: 0.48, b: 20.5 },
        { a: 10, b: 60 },
        { a: 100, b: 80 },
        { a: 200, b: 90 },
        { a: 245.11, b: 100.13 },
        { a: 300.13, b: 150.13 },
        { a: 340, b: 200 }
    ];

    padding: any = { left: 15, top: 5, right: 15, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'a',
        logarithmicScale: true,
        logarithmicScaleBase: 2
    };

    valueAxis: any =
    {
        logarithmicScale: false,
        logarithmicScaleBase: 2,
        title: { text: 'Value' },
        labels: {
            horizontalAlignment: 'right'
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'line',
            series: [
                { dataField: 'a', displayText: 'A', symbolType: 'square', symbolSize: 6, dashStyle: '4,4', lineWidth: 1 },
                { dataField: 'b', displayText: 'B', symbolType: 'circle', symbolSize: 6, lineWidth: 1 }
            ]
        }
    ];
}