import React from 'react';
import ReactDOM from 'react-dom';
 
import JqxPivotGrid from '../../../jqwidgets-react/react_jqxpivotgrid.js';
 
class App extends React.Component {
    render() {
		// prepare sample data
		let data = new Array();

		let countries =
		[
			"Germany", "France", "United States", "Italy", "Spain", "Finland", "Canada", "Japan", "Brazil", "United Kingdom", "China", "India", "South Korea", "Romania", "Greece"
		];

		let dataPoints =
		[
			"2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
		];

		for (var i = 0; i < countries.length * 2; i++) {
			var row = {};
			var value = parseFloat(dataPoints[Math.round((Math.random() * 100)) % dataPoints.length]);

			row["country"] = countries[i % countries.length];
			row["value"] = value;

			data[i] = row;
		}

		// create a data source and data adapter
		let source =
		{
			localdata: data,
			datatype: "array",
			datafields:
			[
				{ name: 'country', type: 'string' },
				{ name: 'value', type: 'number' }
			]
		};

		let dataAdapter = new jqx.dataAdapter(source);
		dataAdapter.dataBind();

		// create a pivot data source from the dataAdapter
		let pivotDataSource = new jqx.pivot(
			dataAdapter,
			{
				pivotValuesOnRows: false,
				rows: [{ dataField: 'country', width: 190 }],
				columns: [],
				values: [
					{ dataField: 'value', width: 216, 'function': 'min', text: 'cells left alignment', formatSettings: { align: 'left', prefix: '', decimalPlaces: 2 } },
					{ dataField: 'value', width: 216, 'function': 'max', text: 'cells center alignment', formatSettings: { align: 'center', prefix: '', decimalPlaces: 2 } },
					{ dataField: 'value', width: 216, 'function': 'average', text: 'cells right alignment', formatSettings: { align: 'right', prefix: '', decimalPlaces: 2 } }
				]
			});

	
						
        return (
			<JqxPivotGrid 
				style={{ width: 800, height: 400 }}
				source = {pivotDataSource}
				treeStyleRows = {true}
				autoResize = {true}
				multipleSelectionEnabled = {true}
            />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

