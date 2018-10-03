import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    sampleData: any[] = [
        { Country: 'Switzerland', Inflation2012: -0.95, Inflation2011: -0.72 },
        { Country: 'USA', Inflation2012: 2.35, Inflation2011: 2.96 },
        { Country: 'Germany', Inflation2012: 2.03, Inflation2011: 2.10 },
        { Country: 'India', Inflation2012: 8.38, Inflation2011: 6.49 },
        { Country: 'China', Inflation2012: 3.34, Inflation2011: 4.06 },
        { Country: 'Canada', Inflation2012: 2.05, Inflation2011: 2.30 }];

    padding: any = { left: 20, top: 5, right: 20, bottom: 5 };

    titlePadding: any = { left: 10, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        dataField: 'Country',
        gridLines: {
            visible: true,
            dashStyle: '2,2',
            color: 'grey'
        },
        tickMarks: {
            dashStyle: '2,2',
            color: 'grey'
        }
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
            type: 'column',
            orientation: 'horizontal',
            columnsGapPercent: 50,
            valueAxis:
            {
                visible: true,
                minValue: -5,
                maxValue: 10,
                unitInterval: 1,
                labels: {
                    formatSettings: { sufix: '%' }
                },
                gridLines: {
                    dashStyle: '2,2',
                    color: 'grey'
                },
                tickMarks:
                {
                    dashStyle: '2,2',
                    color: 'grey'
                }
            },
            toolTipFormatSettings: { sufix: '%' },
            series: [
                { dataField: 'Inflation2012', displayText: 'Inflation 2012' },
                { dataField: 'Inflation2011', displayText: 'Inflation 2011' }
            ]
        }
    ];
}