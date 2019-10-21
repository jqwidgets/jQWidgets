import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    sampleData: any[] = [
        { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
        { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
        { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
        { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
        { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
        { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
        { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
    ];

    padding: any = { left: 5, top: 5, right: 20, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };
	
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        position: 'top',
        dataField: 'Day',
        labels:
        {
            angle: 55,
            horizontalAlignment: 'right',
            verticalAlignment: 'center',
            rotationPoint: 'right',
            offset: { x: 0, y: -5 }
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'column',
            seriesGapPercent: 15,
            orientation: 'horizontal',
            valueAxis:
            {
                minValue: 0,
                maxValue: 100,
                unitInterval: 10,
                position: 'right'
            },
            series: [
                { dataField: 'Keith', displayText: 'Keith' },
                { dataField: 'Erica', displayText: 'Erica' },
                { dataField: 'George', displayText: 'George' }
            ]
        }
    ];
}