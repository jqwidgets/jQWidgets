import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    sampleData: any[] = [
        { Hour: 1, Sales: 135 },
        { Hour: 3, Sales: 145 },
        { Hour: 5, Sales: 90 },
        { Hour: 15, Sales: 66 },
        { Hour: 17, Sales: 43 },
        { Hour: 18, Sales: 122 },
        { Hour: 22, Sales: 59 },
        { Hour: 23, Sales: 70 }
    ];

    padding: any = { left: 5, top: 5, right: 10, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'Hour',
        minValue: 0,
        maxValue: 23,
        unitInterval: 1,
        valuesOnTicks: false,
        labels: {
            angle: 0,
            formatFunction: (value: any) => {
                return value.toString();
            }
        },
        tickMarks: {
            visible: true,
            interval: 1
        },
        gridLines: {
            visible: true,
            interval: 3
        }
    };

    valueAxis: any =
    {
        visible: true,
        minValue: 0,
        maxValue: 200,
        unitInterval: 50,
        title: { text: 'Sales ($)<br>' },
        labels: { horizontalAlignment: 'right' }
    };

    seriesGroups: any =
    [
        {
            type: 'column',
            series: [
                { dataField: 'Sales', displayText: 'Sales', showLabels: true }
            ]
        }
    ];
}
