import React from 'react';
import ReactDOM from 'react-dom';
 
import JqxPivotGrid from '../../../jqwidgets-react/react_jqxpivotgrid.js';
 
class App extends React.Component {
    render() {
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

		for (var i = 0; i < 500; i++) {
			var row = {};
			var productindex = Math.floor(Math.random() * productNames.length);
			var price = parseFloat(priceValues[productindex]);
			var quantity = 1 + Math.round(Math.random() * 10);

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
				rows: [
					{ dataField: 'firstname', className: 'rowStyle', classNameSelected: 'rowStyleSelected' },
					{ dataField: 'lastname', className: 'rowStyle', classNameSelected: 'rowStyleSelected' }
				],
				columns: [
					{ dataField: 'productname', className: 'columnStyle', classNameSelected: 'columnStyleSelected' }
				],
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
					{ dataField: 'price', 'function': 'sum', text: 'Sum', formatSettings: { prefix: '$', decimalPlaces: 2 }, className: 'columnStyle', classNameSelected: 'columnStyleSelected', cellsClassName: 'cellStyle', cellsClassNameSelected: 'cellStyleSelected' },
					{ dataField: 'price', 'function': 'count', text: 'Count', className: 'columnStyle', classNameSelected: 'columnStyleSelected', cellsClassName: 'cellStyle', cellsClassNameSelected: 'cellStyleSelected' },
					{ dataField: 'price', 'function': 'average', text: 'Average', formatSettings: { prefix: '$', decimalPlaces: 2 }, className: 'columnStyle', classNameSelected: 'columnStyleSelected', cellsClassName: 'cellStyle', cellsClassNameSelected: 'cellStyleSelected' },
				]
			}
		);
						
        return (
			<JqxPivotGrid 
				style={{ width: 800, height: 400 }}
				source = {pivotDataSource}
				treeStyleRows = {false}
				autoResize = {false}
				multipleSelectionEnabled = {true}
            />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));