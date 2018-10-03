import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';

@Component({
	selector: 'gridFood',
	templateUrl: './grid.component.html'
})

export class GridFoodComponent {
	@ViewChild('referenceGrid') grid: jqxGridComponent;

	@Output() changedvalue = new EventEmitter();
	@Output() bindingcomplete = new EventEmitter();
	@Output() removeFoodEvent = new EventEmitter();
	
	dataAdapterFoodGrid: any;
	
	columns: any[] = [
		{
			text: 'Time',
			datafield: 'time',
			cellsformat: 'HH:mm',
			cellsalign: 'center',
		},
		{
			text: 'Food Type', datafield: 'food',
			cellsalign: 'center',
		},
		{
			text: 'Fat', datafield: 'fat', width: '90',
			filtertype: 'number', cellsalign: 'right', cellsformat: 'f2',
			aggregates: [{ '<b>Total</b>': (aggregatedValue, currentValue, column, record) => { return aggregatedValue + currentValue; } }]
		},
		{
			text: 'Carbs', datafield: 'carb', filtertype: 'number', cellsalign: 'right', cellsformat: 'f2',
			aggregates: [{ '<b>Total</b>': (aggregatedValue, currentValue, column, record) => { return aggregatedValue + currentValue; } }]
		},
		{
			text: 'Protein', datafield: 'protein', filtertype: 'number', cellsalign: 'right', cellsformat: 'f2',
			aggregates: [{ '<b>Total</b>': (aggregatedValue, currentValue, column, record) => { return aggregatedValue + currentValue; } }]
		},
		{
			text: 'Calories', datafield: 'calories', filtertype: 'number', cellsalign: 'right', cellsformat: 'f2',
			aggregates: [{ '<b>Total</b>': (aggregatedValue, currentValue, column, record) => { return aggregatedValue + currentValue; } }]
		},
		{
			text: '', datafield: '', columntype: 'button', 
			width: '35',
			cellclassname: 'button-food',
			cellsrenderer: (row, columnfield, value, defaulthtml, columnproperties) =>
			{
				return "X";
			},
			buttonclick: (row) =>
			{
				this.deleteSelectedRow();				
				this.removeFoodEvent.emit({
					row: row,
					rows: this.grid.getboundrows()
				});
			}
		}
	];
	
	private deleteSelectedRow() {
		let selectedrowindex = this.grid.getselectedrowindex();
		let rowscount = this.grid.getdatainformation().rowscount;
		if (selectedrowindex => 0 && selectedrowindex < rowscount)
        {
            let id = this.grid.getrowid(selectedrowindex);
			let commit = this.grid.deleterow(id);
        }
	};
	
	public setDataAdapter(dataAdapter: any): void {
		this.grid.source(dataAdapter);
	};
	
	public getFats(): number {
		return parseFloat(this.grid.getcolumnaggregateddata('fat', ['sum'])['sum']);
	};
	
	public getCarbs(): number {
		return parseFloat(this.grid.getcolumnaggregateddata('carb', ['sum'])['sum']);
	};
	
	public getProteins(): number {
		return parseFloat(this.grid.getcolumnaggregateddata('protein', ['sum'])['sum']);
	};
	
	public getCalories(): number {
		return parseFloat(this.grid.getcolumnaggregateddata('calories', ['sum'])['sum']);
	};
	
	public addrow(rowData: any): void {
		this.grid.addrow(null, rowData);
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
	};
}