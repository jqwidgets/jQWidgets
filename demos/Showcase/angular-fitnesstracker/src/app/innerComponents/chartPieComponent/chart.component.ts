import { Component, ViewChild, Input, Directive, AfterViewInit } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';

@Component({
	selector: 'pieChart',
	templateUrl: './chart.component.html'
})

export class PieChartComponent implements AfterViewInit {
	@ViewChild('referenceChart') chart: jqxChartComponent;

	@Input() initialValues: any;
	
	ngAfterViewInit() {
		this.intakeBurnSource.localdata = this.initialValues;
		this.intakeBurnAdapter.dataBind();
		this.chart.update();
	}
	
	intakeBurnSource: any = {
        datatype: "array",
        datafields: [
            { name: 'calories' },
            { name: 'type' }
        ],
        localdata: []
	}
		
	intakeBurnAdapter: any = new jqx.dataAdapter(this.intakeBurnSource);
	
	seriesGroups: any[] = [{
		type: 'pie',
		showLabels: true,
		useGradient: false,
		series: [{
			dataField: 'calories', displayText: 'type',
			labelRadius: 30,
			initialAngle: 90,
			radius: '80%',
			centerOffset: 3,
			formatSettings: { sufix: '', decimalPlaces: 0 }
		}]
	}];
    	
	public updateData(data: any): void {
		this.chart.source(data);
	};
		
	public enableAnimations(value: boolean): void {
		this.chart.enableAnimations(value);
	};
}