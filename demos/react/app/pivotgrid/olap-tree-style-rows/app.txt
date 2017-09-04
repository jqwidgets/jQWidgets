import React from 'react';
import ReactDOM from 'react-dom';
 
import JqxPivotGrid from '../../../jqwidgets-react/react_jqxpivotgrid.js';
import JqxToggleButton from '../../../jqwidgets-react/react_jqxtogglebutton.js';

class App extends React.Component {
    componentDidMount() {
		this.refs.btnChangeRowsDisplay.on('click', () => {
			if (this.refs.myReactPivotGrid.treeStyleRows())
			{
				this.refs.btnChangeRowsDisplay.value('Change to Tree style rows');
				this.refs.myReactPivotGrid.treeStyleRows(false);
				this.refs.btnChangeRowsDisplay.toggled(false);
			}
			else
			{
				this.refs.btnChangeRowsDisplay.value('Change to OLAP style rows');
				this.refs.myReactPivotGrid.treeStyleRows(true);
				this.refs.btnChangeRowsDisplay.toggled(true);
			}
			
			this.refs.myReactPivotGrid.refresh();
		});
		
		this.refs.myReactPivotGrid.getPivotRows().items[1].expand();
		this.refs.myReactPivotGrid.refresh();
    }
	
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
				pivotValuesOnRows: true,
				rows: [{ dataField: 'firstname' }, { dataField: 'lastname'}],
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
		<div>
			<JqxPivotGrid 
				ref='myReactPivotGrid'
				style={{ width: 800, height: 400 }}
				source = {pivotDataSource}
				treeStyleRows = {false}		// change this property to switch between treestyle and olap style display		
            />
			<br/>
			<JqxToggleButton 
				ref='btnChangeRowsDisplay'
				width={200}
				height={30}
				value={'Change to Tree style rows'}
			/>				
		</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

