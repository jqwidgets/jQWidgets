import React from 'react';
import ReactDOM from 'react-dom';
 
import JqxPivotGrid from '../../../jqwidgets-react/react_jqxpivotgrid.js';
import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';
import JqxWindow from '../../../jqwidgets-react/react_jqxwindow.js';
 
class App extends React.Component {
	constructor()
	{
		super();
		this.data = new Array();
	}
    componentDidMount() {

        this.refs.myReactPivotGrid.on('pivotcelldblclick', (event) => {
            if (event.args) {
                var args = event.args;
				this.refs.myReactPivotGrid.selectionEnabled(false);
                this.drillThrough(args.pivotRow, args.pivotColumn);
            }
        });
				
        this.refs.drillThroughWindow.on('close', (event) => {
			this.refs.myReactPivotGrid.selectionEnabled (true);
        });

        this.drillThrough(this.refs.myReactPivotGrid.getPivotRows().items[0], this.refs.myReactPivotGrid.getPivotColumns().items[0].valueItems[0]);
    }

	drillThrough(pivotRow, pivotColumn)
	{
		let rows = this.refs.myReactPivotGrid.getPivotCells().drillThroughCell(pivotRow, pivotColumn);
		let drillThroughData = [];
		for (let i = 0; i < rows.length; i++)
			drillThroughData[i] = this.data[rows[i]]

		let drillThroughSrc =
		{
			localData: drillThroughData,
			dataType: "array",
			dataFields:
			[
				{ name: 'firstname', type: 'string' },
				{ name: 'lastname', type: 'string' },
				{ name: 'productname', type: 'string' },
				{ name: 'quantity', type: 'number' },
				{ name: 'price', type: 'number' },
				{ name: 'total', type: 'number' }
			]
		};
		
		let drillThroughDataAdapter = new $.jqx.dataAdapter(drillThroughSrc);

		this.refs.dataTableSrcRecords.setOptions(
		{
			pageable: true,
			width: '100%',
			height: '100%',
			pagerButtonsCount: 10,
			source: drillThroughDataAdapter,
			columnsResize: true,
			columns: [
			  { text: 'First name', dataField: 'firstname', width: 200 },
			  { text: 'Last name', dataField: 'lastname', width: 200 },
			  { text: 'Product', editable: false, dataField: 'productname', width: 180 },
			  { text: 'Quantity', dataField: 'quantity', width: 80, cellsAlign: 'right', align: 'right' },
			  { text: 'Unit Price', dataField: 'price', width: 90, cellsAlign: 'right', align: 'right', cellsFormat: 'c2' },
			  { text: 'Total', dataField: 'total', cellsAlign: 'right', align: 'right', cellsFormat: 'c2' }
			]
		});

		this.refs.dataTableSrcRecords.refresh();
		this.refs.drillThroughWindow.open();		
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
			"Black Tea", "Green Tea", "Caffe Espresso"
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
				pivotValuesOnRows: false,
				totals: {rows: {subtotals: true, grandtotals: true}, columns: {subtotals: false, grandtotals: true}},
				rows: [{ dataField: 'firstname' }, { dataField: 'lastname'}],
				columns: [{ dataField: 'productname' }],
				values: [
					{ dataField: 'price', 'function': 'sum', text: 'sum', width: NamedNodeMap, formatSettings: { prefix: '$', decimalPlaces: 2 } },
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
					treeStyleRows = {true}
					autoResize = {false}
					multipleSelectionEnabled = {true}
				/>
				
			   <JqxWindow
					ref='drillThroughWindow'
					style={{ display: 'none' }}
					width={500} 
					height={300} 
					position={{ x: 200, y: 70 }}
					resizable={false}
				>
					<div id="windowHeader">
						Drillthrough records
					</div>
					<div style={{overflow: 'hidden', width: '100%', height: '100%'}} id="windowContent">
						<JqxDataTable
							ref='dataTableSrcRecords'
							width={'100%'} height={'auto'}
						/>					
					</div>
				</JqxWindow>
			</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

