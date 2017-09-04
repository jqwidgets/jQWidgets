import React from 'react';
import ReactDOM from 'react-dom';
 
import JqxPivotGrid from '../../../jqwidgets-react/react_jqxpivotgrid.js';
import JqxPivotDesigner from '../../../jqwidgets-react/react_jqxpivotdesigner.js';
 
class App extends React.Component {
	constructor()
	{
		super();
		this.data = new Array();
	}
    componentDidMount() {
		this.refs.myReactPivotDesigner.target(this.refs.myReactPivotGrid.getInstance());
		this.refs.myReactPivotDesigner.refresh();
    }

    componentDidUpdate() {
    }

	prepareSampleData()
	{
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

			this.data[i] = row;
		}	
	}
	
    render() {
		
		this.prepareSampleData();
		
		// create a data source and data adapter
		let source =
		{
			localdata: this.data,
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
				customAggregationFunctions: {
					'var': function (values) {
						if (values.length <= 1)
							return 0;

						// sample's mean
						var mean = 0;
						for (var i = 0; i < values.length; i++)
							mean += values[i];

						mean /= values.length;

						// calc squared sum
						var ssum = 0;
						for (var i = 0; i < values.length; i++)
							ssum += Math.pow(values[i] - mean, 2)

						// calc the variance
						var variance = ssum / values.length;

						return variance;
					}
				},
				pivotValuesOnRows: false,
				rows: [{ dataField: 'firstname', text: 'First Name' }, { dataField: 'lastname'}],
				columns: [{ dataField: 'productname', align: 'left' }],
				filters: [
					{
						dataField: 'productname',
						text: 'Product name',
						filterFunction: function (value) {
							if (value == "Black Tea" || value == "Green Tea")
								return true;

							return false;
						}
					}
				],
				values: [
					{ dataField: 'price', 'function': 'sum', text: 'Sum', align: 'left', formatSettings: { prefix: '$', decimalPlaces: 2, align: 'center' }, cellsClassName: 'myItemStyle', cellsClassNameSelected: 'myItemStyleSelected' },
					{ dataField: 'price', 'function': 'count', text: 'Count', className: 'myItemStyle', classNameSelected: 'myItemStyleSelected' }
				]
			}
		);
		
        let localization = { 'var': 'Variance' };
		

        return (
		   <div>
				<table>
					<tr>
						<td>
							<JqxPivotDesigner 
								ref='myReactPivotDesigner'					
								style={{ width: 250, height: 400 }}
							/>
							
						</td>
						<td>
							<JqxPivotGrid 
								ref='myReactPivotGrid'					
								style={{ width: 550, height: 400 }}
								source = {pivotDataSource}
								localization = {localization}
								treeStyleRows = {false}
								autoResize = {false}
								multipleSelectionEnabled = {true}
							/>
						</td>
					</tr>
				</table>			
			</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

