import { Component, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ItemsEnumeration } from '../../items.enum';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';

@Component({
	selector: 'ordersCustomers',
	templateUrl: './orders.component.html'
})

export class OrdersComponent {
	@ViewChild('referenceGridOrders') gridOrders: jqxGridComponent;

	private enumItems = new ItemsEnumeration();

	constructor(private _dataServices: DataService) {
		this._dataServices.getItemData(this.enumItems.ordersgrid)
			.then(result => {
				this.source.localdata = result;
				this.dataAdapter.dataBind();
				this.gridOrders.source(this.dataAdapter);
				this.gridOrders.updatebounddata();
			})
			.catch(error => {
				console.log("Error with 'OrdersRecordsComponent'", error);
			});

		this._dataServices.getItemData(this.enumItems.orders)
			.then(result => {
				this.ordersSource.localdata = result;
				this.ordersDataAdapter.dataBind();
			})
			.catch(error => {
				console.log("Error with 'OrdersComponent'", error);
			});
	}

	width: string | number = '100%';
	height: string | number = 680;
	theme: string = 'metro';
	rowdetails: boolean = true;
	rowdetailstemplate: any = { rowdetails: '<div style="margin: 10px;"></div>', rowdetailsheight: 110 };

	ordersSource: any =
		{
			datafields: [
				{ name: 'EmployeeID', type: 'string' },
				{ name: 'ShipName', type: 'string' },
				{ name: 'ShipAddress', type: 'string' },
				{ name: 'ShipCity', type: 'string' },
				{ name: 'ShipCountry', type: 'string' },
				{ name: 'ShippedDate', type: 'date' },
				{ name: 'OrderID' }
			],
			datatype: 'json'
		};
	ordersDataAdapter = new jqx.dataAdapter(this.ordersSource);

	source: any =
		{
			datatype: 'json',
			datafields: [
				{ name: 'orderID', type: 'string' },
				{ name: 'orderDate', type: 'date' },
				{ name: 'customer', type: 'string' },
				{ name: 'address', type: 'string' },
				{ name: 'city', type: 'string' },
				{ name: 'country', type: 'string' },
				{ name: 'product', type: 'string' },
				{ name: 'price', type: 'float' },
				{ name: 'qty', type: 'int' }
			]
		};

	dataAdapter: any = new jqx.dataAdapter(this.source);

	ready = () => {
		setTimeout(() => {
			this.gridOrders.showrowdetails(0);
			this.gridOrders.showrowdetails(1);
		}, 700);
	};

	initrowdetails = (index: number, parentElement: any, gridElement: any, record: any) => {
		let id = record.uid.toString();
		let nestedGridContainer = parentElement.children[0];
		let filtergroup = new jqx.filter();
		let filtervalue = id;
		let filtercondition = 'equal';
		let filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);

		let ordersbyid = [];
		let orders = this.ordersDataAdapter.records;

		// Create data for the nested grid
		for (let m = 0; m < orders.length; m++) {
			let result = filter.evaluate(orders[m]['uid']);
			if (result) {
				ordersbyid.push(orders[m]);
			}
		}

		let nestedGridSource: any = {
			localdata: ordersbyid,
			datatype: 'json',
			datafields: [
				{ name: 'orderDate', type: 'date', map: 'ShippedDate' },
				{ name: 'address', type: 'string', map: 'ShipAddress' },
				{ name: 'city', type: 'string', map: 'ShipCity' },
				{ name: 'country', type: 'string', map: 'ShipCountry' },
				{ name: 'product', type: 'string', map: 'ShipName' },
				{ name: 'price', type: 'float' },
				{ name: 'qty', type: 'int' }
			]
		};

		let nestedGridAdapter = new jqx.dataAdapter(nestedGridSource, {
			beforeLoadComplete: (records: any[]): any[] => {
				let orderRecord = records[0];
				let date = new Date(orderRecord['orderDate']);
				orderRecord['qty'] = date.getDate();
				orderRecord['price'] = 1.5 * date.getMonth() / date.getDay();

				return records;
			}
		});

		if (nestedGridContainer != null) {
			let settings = {
				width: '97%',
				autoheight: true,
				autorowheight: true,
				source: nestedGridAdapter,
				columns: [
					{ text: 'Product', datafield: 'product' },
					{
						text: 'Description',
						datafield: 'description',
						width: '34%',
						cellsrenderer: (row: number, columnfield: string, value: string, defaulthtml: string, columnproperties: any, rowData: any): any => {
							let container = '<div style="width: 100%; height: 50px;">';
							let closingDiv = '</div>';
							let leftside = '<div style="float: left; width: 50%;">';
							let rightside = '<div style="float: left; width: 50%;">';

							let address = '<div style="margin: 10px;"><b>Address:</b> ' + rowData.address + '</div>';
							let country = '<div style="margin: 10px;"><b>Country:</b> ' + rowData.country + '</div>';
							let city = '<div style="margin: 10px;"><b>City:</b> ' + rowData.city + '</div>';

							leftside += address;
							leftside += closingDiv;

							rightside += country;
							rightside += city;
							rightside += closingDiv;

							container += leftside;
							container += rightside;
							container += closingDiv;

							return container;
						}
					},
					{ text: 'Price', datafield: 'price', cellsalign: 'center', cellsformat: 'c2' },
					{ text: 'Quantity', datafield: 'qty', cellsalign: 'center' }
				]
			};

			jqwidgets.createInstance(nestedGridContainer, 'jqxGrid', settings);
		}
	};

	columns: any[] = [
		{ text: 'Order ID', datafield: 'orderID', width: '10%' },
		{ text: 'Order Date', datafield: 'orderDate', width: '25%' },
		{ text: 'Customer', datafield: 'customer', width: '20%' },
		{ text: 'Address', datafield: 'address', width: '25%' },
		{ text: 'City', datafield: 'city', width: '10%' },
		{ text: 'Country', datafield: 'country', width: '10%' }
	];
}