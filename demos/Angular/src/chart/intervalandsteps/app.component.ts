import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;

    chartInstance;

    ngAfterViewInit(): void {
        this.chartInstance = this.myChart.getInstance();
    }

    data: number[] = [12, 3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 12, 3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 5, 12, 11];

    padding: any = { left: 10, top: 5, right: 10, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        unitInterval: 1,
        gridLines: { step: 1 },
        tickMarks: { step: 1 },
        labels: { step: 2 }
    };

    valueAxis: any =
    {
        title: { text: 'Value<br>' },
        unitInterval: 5,
        gridLines: { step: 1 },
        tickMarks: { step: 1 },
        labels: { step: 1 },
        minValue: 0
    };

    seriesGroups: any =
    [
        {
            type: 'line',
            series:
            [
                { displayText: 'value', opacity: 0.7 }
            ]
        }
    ];

    inputxAxisLabelsStepOnValueChange(event: any) {
        let value = event.args.value;
        this.chartInstance.xAxis.labels.step = parseInt(value);
        this.chartInstance.refresh();
    };

    inputxAxisGridLinesStepOnValueChange(event: any) {
        let value = event.args.value;
        this.chartInstance.xAxis.gridLines.step = parseInt(value);
        this.chartInstance.refresh();
    };

    inputxAxisTickMarksStepOnValueChange(event: any) {
        let value = event.args.value;
        this.chartInstance.xAxis.tickMarks.step = parseInt(value);
        this.chartInstance.refresh();
    };

    inputxAxisUnitIntervalOnValueChange(event: any) {
        let value = event.args.value;
        this.chartInstance.xAxis.unitInterval = parseInt(value);
        this.chartInstance.refresh();
    };

    inputvalueAxisLabelsStepOnValueChange(event: any) {
        let value = event.args.value;
        this.chartInstance.valueAxis.labels.step = parseInt(value);
        this.chartInstance.refresh();
    };

    inputvalueAxisGridLinesStepOnValueChange(event: any) {
        let value = event.args.value;
        this.chartInstance.valueAxis.gridLines.step = parseInt(value);
        this.chartInstance.refresh();
    };

    inputvalueAxisTickMarksStepOnValueChange(event: any) {
        let value = event.args.value;
        this.chartInstance.valueAxis.tickMarks.step = parseInt(value);
        this.chartInstance.refresh();
    };

    inputvalueAxisUnitIntervalOnValueChange(event: any) {
        let value = event.args.value;
        this.chartInstance.valueAxis.unitInterval = parseInt(value);
        this.chartInstance.refresh();
    };

    btnValuesBetweenTicksOnChange(event: any) {
        this.chartInstance.xAxis.valuesOnTicks = !event.args.checked;
        this.chartInstance.refresh();
    };

    btnvalueAxisValuesBetweenTicksOnChange(event: any) {
        this.chartInstance.valueAxis.valuesOnTicks = !event.args.checked;
        this.chartInstance.refresh();
    };
}