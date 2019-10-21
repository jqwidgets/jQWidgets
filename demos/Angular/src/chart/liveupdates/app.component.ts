import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    ngAfterViewInit(): void {
        let data = this.myChart.source();
        let timer = setInterval(() => {
            let max = 800;
            for (let i = 0; i < data.length; i++) {
                data[i].a = Math.max(100, (Math.random() * 1000) % max);
                data[i].b = Math.max(100, (Math.random() * 1000) % max);
            }
            this.myChart.update();
        }, 3000);
    }

    data: any[] = [
        { a: 100, b: 200, c: 1 },
        { a: 120, b: 140, c: 2 },
        { a: 100, b: 110, c: 3 },
        { a: 90, b: 135, c: 4 },
        { a: 70, b: 210, c: 5 },
        { a: 170, b: 210, c: 5 },
        { a: 270, b: 350, c: 5 },
        { a: 710, b: 410, c: 5 },
        { a: 230, b: 305, c: 5 }
    ];

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        unitInterval: 1,
        gridLines: { interval: 2 },
        valuesOnTicks: false
    };

    valueAxis: any =
    {
        minValue: 0,
        maxValue: 1000,
        title: { text: 'Index Value' },
        labels: { horizontalAlignment: 'right' }
    };

    seriesGroups: any[] =
    [
        {
            type: 'column',
            columnsGapPercent: 50,
            alignEndPointsWithIntervals: true,
            series: [
                { dataField: 'a', displayText: 'a', opacity: 1, lineWidth: 1, symbolType: 'circle', fillColorSymbolSelected: 'white', radius: 15 },
                { dataField: 'b', displayText: 'b', opacity: 1, lineWidth: 1, symbolType: 'circle', fillColorSymbolSelected: 'white', radius: 15 }
            ]
        }
    ];

    colorsSchemesList: string[] = ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'];

    seriesList: string[] = ['splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline'];

    colorsOnChange(event: any): void {
        let value = event.args.item.value;
        this.myChart.colorScheme(value);
        this.myChart.update();
    }

    seriesOnChange(event: any): void {
        let args = event.args;
        if (args) {
            let value = args.item.value;
            let isLine = value.indexOf('line') != -1;
            let isArea = value.indexOf('area') != -1;
            let group = this.myChart.seriesGroups()[0];
            group.series[0].opacity = group.series[1].opacity = isArea ? 0.7 : 1;
            group.series[0].lineWidth = group.series[1].lineWidth = isLine ? 2 : 1;
            group.type = value;
            this.myChart.update();
        }
    }
    
}