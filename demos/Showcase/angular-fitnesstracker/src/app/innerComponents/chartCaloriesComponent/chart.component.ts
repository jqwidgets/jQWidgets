import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';

@Component({
	selector: 'chartCalories',
	templateUrl: './chart.component.html'
})

export class ChartCaloriesComponent {
	@ViewChild('referenceChart') chart: jqxChartComponent;
	@Output() customButtonClickEvent = new EventEmitter();
	
	@Input() values: number[];	
		
	public setDataAdapter(dataAdapter: any): void {
		this.chart.source(dataAdapter);
	};
	
	months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	
	caloriesAdapter: any;
	
	xAxis: any = {
		dataField: 'date',
		displayText: 'Date',
		type: 'date',
		baseUnit: 'day',
		minValue: new Date(2016, 1, 1),
		maxValue: new Date(2016, 1, 17),
		flip: false,
		valuesOnTicks: true,
		labels:
		{
			angle: -90, offset: { x: 0, y: 0 },
			formatFunction: (value) => 
			{
				return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
			}
		}
	};	
	
	seriesGroups: any[] = [
		{
			type: 'line',
			valueAxis:
			{
				flip: false,
				title: { text: 'Calories<br><br>' }
			},
			series: [
				{
					dataField: 'intake',
					displayText: 'Intake',
					lineWidth: 3,
					lineWidthSelected: 1
				},
				{
					dataField: 'burn',
					displayText: 'Burn',
					lineWidth: 3,
					lineWidthSelected: 1
				}
			]
		}
    ];

	public updateChart(): void {
		this.chart.update();
	};
}