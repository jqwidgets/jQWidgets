import { Component, ViewChild } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';

@Component({
	selector: 'donutChart',
	templateUrl: './donut.component.html'
})

export class DonutComponent {
	@ViewChild('referenceChart') chart: jqxChartComponent;

	seriesGroups: any[] = [{
		type: 'donut',
		showLabels: true,
		colorScheme: 'scheme04',
		useGradient: false,
		series: [{
			dataField: 'value',
			displayText: 'name',
			labelRadius: '100%',
			initialAngle: 30,
			radius: '80%',
			innerRadius: '45%',
			centerOffset: 0,
			formatSettings: { sufix: ' (g)', decimalPlaces: 0 }
		}]
	}];
	
	// Create initial data. Prevent visualization
	dataDonut: any[] = [
        { "name": "Fat", "value": 0.1 },
        { "name": "Protein", "value": 0.1 },
        { "name": "Carb", "value": 0.1 }
    ];
	
	sourceDonut: any = {
        datatype: "array",
        datafields: [
			{ name: 'name' },
			{ name: 'value' }
        ],
        localdata: this.dataDonut
    };
	
	dataAdapterDonut: any = new jqx.dataAdapter(this.sourceDonut);
	
	public updateData(data: any[]): void {
		this.sourceDonut.localdata = data;
		this.dataAdapterDonut.dataBind();
		this.chart.update();
	};	
}