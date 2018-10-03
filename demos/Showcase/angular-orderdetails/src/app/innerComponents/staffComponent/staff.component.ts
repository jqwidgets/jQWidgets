import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ItemsEnumeration } from '../../items.enum';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';

@Component({
	selector: 'staffsel',
	templateUrl: './staff.component.html',
	styleUrls: ['./staff.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class StaffComponent {
	@ViewChild('referenceGridStaff') gridStaff: jqxGridComponent;

	private enumItems = new ItemsEnumeration();

	constructor(private _dataServices: DataService) {
		this._dataServices.getItemData(this.enumItems.staffgrid)
			.then(result => {
				this.source.localdata = result;
				this.dataAdapter.dataBind();
				this.gridStaff.source(this.dataAdapter);
				this.gridStaff.updatebounddata();
			})
			.catch(error => {
				console.log("Error with 'StaffRecordsComponent'", error);
			});
	}

	width: string | number = '100%';
	height: string | number = 680;
	theme: string = 'metro';
	rowsheight: number = 80;
	editable: boolean = true;
	selectionmode: string = 'singlerow';
	editmode: string = 'selectedrow';

	private imagerenderer(row, datafield, value) {
		return '<img height="100%" width="100%" src="' + value + '"/>';
	};

	private source: any = {
		localdata: [],
		datatype: 'json',
		datafields: [
			{ name: 'employeeID', type: 'string' },
			{ name: 'name', type: 'string' },
			{ name: 'title', type: 'string' },
			{ name: 'photo', type: 'img' },
			{ name: 'phone', type: 'int' }
		]
	};
	private dataAdapter: any = new jqx.dataAdapter(this.source);
	
	columns: any[] = [
		{
			text: 'Photo', datafield: 'photo', width: '8%', editable: false, cellsrenderer: this.imagerenderer
		},
		{
			text: 'Employee ID', datafield: 'employeeID', width: '12%', editable: false, cellsalign: 'left',
			cellsrenderer(row, columnfield, value, defaulthtml, columnproperties) {
				return '<p class="text-format">' + value + '</p>';
			},
		},
		{
			text: 'Name', datafield: 'name', cellsalign: 'left', align: 'left', width: '30%',
			cellsrenderer: (row, columnfield, value, defaulthtml, columnproperties) => {
				return '<p class="text-format">' + value + '</p>';
			},
			validation: (cell, value) => {
				if (value === '') {
					return { result: false, message: 'Name is required!' };
				}

				return true;
			}
		},
		{
			text: 'Title', datafield: 'title', align: 'left', cellsalign: 'left', cellsformat: 'c2', width: '20%',
			cellsrenderer: (row, columnfield, value, defaulthtml, columnproperties) => {
				return '<p class="text-format" style="font-size:115%;margin-top:2.3em">' + value + '</p>';
			},
			validation: (cell, value) => {
				if (value === '') {
					return { result: false, message: 'Title is required!' };
				}

				return true;
			}
		},
		{
			text: 'Phone', datafield: 'phone', cellsalign: 'right', align: 'right', width: '25%',
			validation: (cell, value) => {
				if (value.length !== 10) {
					return { result: false, message: 'Invalid phone number!(Length must be 10 symbols)' };
				}

				return true;
			}
		},
		{
			text: 'Edit', datafield: 'Edit', columntype: 'button', width: '5%', editable: false,
			cellsrenderer: () => {
				return 'Edit';
			},
			buttonclick: (row) => {
				this.gridStaff.beginrowedit(row);
			}
		}
	];

}