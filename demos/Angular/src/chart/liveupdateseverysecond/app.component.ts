import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;

    ngOnInit() {
        this.generateChartData();
    }

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
            if (data.length >= 60)
                data.splice(0, 1);
            let timestamp = new Date();
            timestamp.setSeconds(timestamp.getSeconds());
            timestamp.setMilliseconds(0);
            data.push({ timestamp: timestamp, value: Math.max(100, (Math.random() * 1000) % max) });
            this.myChart.update();
        }, 1000);
    }

    data: any[] = [];

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        dataField: 'timestamp',
        type: 'date',
        baseUnit: 'second',
        unitInterval: 5,
        formatFunction: (value: any) => {
            return jqx.dataFormat.formatdate(value, 'hh:mm:ss', 'en-us');
        },
        gridLines: { step: 2 },
        valuesOnTicks: true,
        labels: { angle: -45, offset: { x: -17, y: 0 } }
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
            type: 'line',
            columnsGapPercent: 50,
            alignEndPointsWithIntervals: true,
            valueAxis:
            {
                minValue: 0,
                maxValue: 1000,
                title: { text: 'Index Value' }
            },
            series: [
                { dataField: 'value', displayText: 'value', opacity: 1, lineWidth: 2, symbolType: 'circle', fillColorSymbolSelected: 'white', symbolSize: 4 }
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
            this.myChart.seriesGroups()[0].type = value;
            this.myChart.update();
        }
    }

    generateChartData = () => {
        let max = 800;
        let timestamp = new Date();
        for (let i = 0; i < 60; i++) {
            timestamp.setMilliseconds(0);
            timestamp.setSeconds(timestamp.getSeconds() - 1);
            this.data.push({ timestamp: new Date(timestamp.valueOf()), value: Math.max(100, (Math.random() * 1000) % max) });
        }
        this.data = this.data.reverse();
    }

}