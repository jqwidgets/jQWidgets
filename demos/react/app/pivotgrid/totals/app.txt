import React from 'react';
import ReactDOM from 'react-dom';
 
import JqxPivotGrid from '../../../jqwidgets-react/react_jqxpivotgrid.js';
 
class App extends React.Component {
    componentDidMount() {		
		this.refs.myReactPivotGrid.getPivotRows().items[0].expand();
		this.refs.myReactPivotGrid.refresh();
    }
	
    render() {
		// prepare sample data
		let data = new Array();

		let firstNames =
		[
			"Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi"
		];

		let lastNames =
		[
			"Fuller", "Davolio", "Burke"
		];

		let productNames =
		[
			"Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha"
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
				pivotValuesOnRows: true,
				totals: {rows: {subtotals: true, grandtotals: true}, columns: {subtotals: false, grandtotals: true}},
				rows: [{ dataField: 'firstname'}, { dataField: 'lastname'}],
				columns: [{ dataField: 'productname'}],
				filters: [],
				values: [
					{ dataField: 'price', 'function': 'sum', text: 'sum', formatSettings: { prefix: '$', decimalPlaces: 2} },
					{ dataField: 'price', 'function': 'count', text: 'count' },
					{ dataField: 'price', 'function': 'average', text: 'average', formatSettings: { prefix: '$', decimalPlaces: 2} }
				]
			}
		);
						
        return (
			<JqxPivotGrid 
				ref='myReactPivotGrid'
				style={{ width: 800, height: 400 }}
				source = {pivotDataSource}
				treeStyleRows = {false}				
            />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

