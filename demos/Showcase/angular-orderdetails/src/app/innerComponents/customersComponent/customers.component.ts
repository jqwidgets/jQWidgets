import { Component, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ItemsEnumeration } from '../../items.enum';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';

@Component({
	selector: 'gridCustomers',
	templateUrl: './customers.component.html'
})

export class CustomersComponent {
	@ViewChild('referenceGridCustomer') gridCustomers: jqxGridComponent;

	private enumItems = new ItemsEnumeration();

	constructor(private _dataServices: DataService) {
		this._dataServices.getItemData(this.enumItems.customersgrid)
			.then(result => {
				this.source.localdata = result;
				this.dataAdapter.dataBind();
				this.gridCustomers.source(this.dataAdapter);
				this.gridCustomers.updatebounddata();
			})
			.catch(error => {
				console.log("Error with 'CustomersRecordsComponent'", error);
			});
	}

	width: string | number = '100%';
	height: string | number = 680;
	theme: string = 'metro';
	editable: boolean = true;
	selectionmode: string = 'singlerow';
	editmode: string = 'selectedrow';

	private source: any = {
		localdata: [],
		datatype: 'json',
		datafields: [
			{ name: 'customerID', type: 'string' },
			{ name: 'name', type: 'string' },
			{ name: 'title', type: 'string' },
			{ name: 'address', type: 'string' },
			{ name: 'phone', type: 'int' }
		]
	};
	private dataAdapter: any = new jqx.dataAdapter(this.source);
	maskedInput: any;
	input: any;
	columns: any[] = [
		{
			text: 'Customer ID', datafield: 'customerID', width: '17%', editable: false
		},
		{
			text: 'Name', datafield: 'name', cellsalign: 'left', align: 'left', width: '22%',
			validation: (cell, value) => {
				if (value === '') {
					return { result: false, message: 'Name is required!' };
				}

				return true;
			}
		},
		{
			text: 'Title', datafield: 'title', align: 'left', cellsalign: 'left', cellsformat: 'c2', width: '17%',
			validation: (cell, value) => {
				if (value === '') {
					return { result: false, message: 'Title is required!' };
				}

				return true;
			}
		},
		{
			text: 'Address', datafield: 'address', width: '22%',
			validation: (cell, value) => {
				if (value === '') {
					return { result: false, message: 'Address is required!' };
				}

				return true;
			}
		},
		{
			text: 'Phone', datafield: 'phone', cellsalign: 'right', align: 'right', width: '17%',
			validation: (cell, value) => {
				if (value.length !== 10) {
					return { result: false, message: 'Invalid phone number! (Length must be 10 symbols)' };
				}

				return true;
			}
		},
		{
			text: 'Edit', datafield: 'Edit', columntype: 'button', width: '5%', editable: false, cellsrenderer: () => {
				return 'Edit';
			}, buttonclick: (row) => {
				this.gridCustomers.beginrowedit(row);
			}
		}
	];
}