import { Component, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ItemsEnumeration } from '../../items.enum';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';

@Component({
	selector: 'productssel',
	templateUrl: './products.component.html'
})

export class ProductsComponent {
	@ViewChild('referenceGridProducts') gridProducts: jqxGridComponent;

	private enumItems = new ItemsEnumeration();

	constructor(private _dataServices: DataService) {
		this._dataServices.getItemData(this.enumItems.productsgrid)
			.then(result => {
				this.source.localdata = result;
				this.dataAdapter.dataBind();
				this.gridProducts.source(this.dataAdapter);
				this.gridProducts.updatebounddata();
			})
			.catch(error => {
				console.log("Error with 'ProductsRecordsComponent'", error);
			});
	}

	width: string | number = '100%';
	height: string | number = 680;
	theme: string = 'metro';
	pageable: boolean = true;
	pagesize: number = 25;
	pagesizeoptions: string[] = ['10', '15', '25'];
	sortable: boolean = true;
	altrows: boolean = true;
	enabletooltips: boolean = true;
	editable: boolean = true;
	selectionmode: string = 'multiplecellsadvanced';
	
	source: any =
		{
			datatype: 'json',
			datafields: [
				{ name: 'productID', type: 'string' },
				{ name: 'name', type: 'string' },
				{ name: 'price', type: 'float' },
				{ name: 'unitsInStock', type: 'int' }
			]
		};

	dataAdapter: any = new jqx.dataAdapter(this.source);

	columns: any[] = [
		{ text: 'Product ID', datafield: 'productID', cellsalign: 'left', width: '10%' },
		{ text: 'Name', datafield: 'name', cellsalign: 'left', align: 'left', width: '40%' },
		{ text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2', width: '25%' },
		{ text: 'Units in Stock', datafield: 'unitsInStock', cellsalign: 'right', align: 'right', width: '25%' }
	];
}