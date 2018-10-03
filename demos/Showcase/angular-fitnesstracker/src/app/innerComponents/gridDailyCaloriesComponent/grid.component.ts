import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';

@Component({
	selector: 'gridDailyCalories',
	templateUrl: './grid.component.html'
})

export class GridDailyCaloriesComponent {
	@ViewChild('referenceGrid') grid: jqxGridComponent;

	@Output() changedvalue = new EventEmitter();
	@Output() bindingcomplete = new EventEmitter();
	
	columns: any[] = [
		{ text: 'Set', datafield: 'set', width: '10%', columntype: 'checkbox', filtertype: 'bool', editable: true },
		{
			text: 'Date',
			datafield: 'date',
			width: '20%',
			editable: false,
			cellsformat: 'ddd d/MM/yy',
			cellsalign: 'center'
		},
		{
			text: 'Intake', datafield: 'intake', width: '35%', cellsalign: 'center', editable: false, aggregates: [{ '<b>Total</b>': function (aggregatedValue, currentValue, column, record) { return aggregatedValue + currentValue; } }],
		},
		{ 
			text: 'Burn', datafield: 'burn', width: '35%', cellsalign: 'center', editable: false, aggregates: [{ '<b>Total</b>': function (aggregatedValue, currentValue, column, record) { return aggregatedValue + currentValue; } }] 
		}
	];
	
	public setDataAdapter(dataAdapter: any): void {
		this.grid.source(dataAdapter);
	};
	
	ValueChangedEvent(event: any): void {
		let eventType = event.args.type;
        if (event.args) {
			if (eventType !== 'none')
			{
				this.changedvalue.emit({
					value: event.args.value,
					rows: this.grid.getboundrows()
				});
			}
		}
	};
	
	BindingCompleteEvent(event: any): void {
		let eventType = event.args.type;
        if (event.args) {
			if (eventType !== 'none')
			{
				this.bindingcomplete.emit({});
			}
		}
	};
	
	public getBoundRows(): any[] {
		return this.grid.getboundrows();
	} 
}