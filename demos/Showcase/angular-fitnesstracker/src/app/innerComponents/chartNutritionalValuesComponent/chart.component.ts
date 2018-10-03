import { Component, ViewChild } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';

@Component({
	selector: 'chartNutritionalValues',
	templateUrl: './chart.component.html'
})

export class ChartNutritionalValuesComponent {
	@ViewChild('referenceChart') chart: jqxChartComponent;

	public setDataAdapter(dataAdapter: any): void {
		this.chart.source(dataAdapter);
	};
	
	months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	nutritionalAdapter: any;
	
	valueAxis: any = {
		dataField: '',
		description: '',
		showGridLines: true,
		showTickMarks: true
	};
	
	seriesGroups: any[] = [
		{
			useGradient: false,
            type: 'column',
            xAxis: {
                dataField: 'Date',
                type: 'date',
                baseUnit: 'day',
                labels: { angle: -45, offset: { x: -17, y: 0 } }
            },
            valueAxis: {
                description: 'Calories',
                logarithmicScale: true,
                logarithmicScaleBase: 2,
                unitInterval: 1,
                gridLinesInterval: 1
            },
            series: [{
                dataField: 'fat',
                displayText: 'Fat'
            }, {
                dataField: 'protein',
                displayText: 'Protein'
            }, {
                dataField: 'carb',
                displayText: 'Carbohydrate'
            }]
		}
	];
}