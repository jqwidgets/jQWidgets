import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor()
	{
		this.pivotDataSource = this.createPivotDataSource();
		this.localization = {
			 sortascendingstring: "Sortiere aufsteigend",
			 sortdescendingstring: "Sortiere absteigend",
			 sortremovestring: "Entferne Sortierung"			
		}
	}
	
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
	pivotDataSource: null;
	localization: Object;
 
	createPivotDataSource(): any {
		// prepare sample data
		let data = new Array();

		let firstNames =
		[
			"Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
		];

		let lastNames =
		[
			"Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
		];

		let productNames =
		[
			"Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Cramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
		];

		let priceValues =
		[
			"2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
		];

		for (let i = 0; i < 500; i++) {
			let row = {};
			let productindex = Math.floor(Math.random() * productNames.length);
			let price = parseFloat(priceValues[productindex]);
			let quantity = 1 + Math.round(Math.random() * 10);

			row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
			row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
			row["productname"] = productNames[productindex];
			row["price"] = price;
			row["quantity"] = quantity;
			row["total"] = price * quantity;

			data[i] = row;
		}

		// create a data source and data adapter
		let source =
		{
		   localdata: data,
		   datatype: "array",
		   datafields:
		   [
				{ name: 'firstname', type: 'string' },
				{ name: 'lastname', type: 'string' },
				{ name: 'productname', type: 'string' },
				{ name: 'quantity', type: 'number' },
				{ name: 'price', type: 'number' },
				{ name: 'total', type: 'number' }
		   ]
		};

		let dataAdapter = new jqx.dataAdapter(source);
		dataAdapter.dataBind();
		
		// create a pivot data source from the dataAdapter
		let pivotDataSource = new jqx.pivot(
		   dataAdapter,
		   {
				pivotValuesOnRows: false,
				rows: [{ dataField: 'firstname' }, { dataField: 'lastname'}],
				columns: [{ dataField: 'productname'}],
				filters: [
					{
						dataField: 'productname',
						filterFunction: function (value) {
							if (value == "Black Tea" || value == "Green Tea")
								return true;

							return false;
						}
					}
				],
				values: [
					{ dataField: 'price', 'function': 'sum', text: 'sum', formatSettings: { prefix: '$', decimalPlaces: 2, align: 'right' } },
					{ dataField: 'price', 'function': 'count', text: 'count' },
					{ dataField: 'price', 'function': 'average', text: 'average' }
				]
		   }
		);
		
		return pivotDataSource;		
	}
}