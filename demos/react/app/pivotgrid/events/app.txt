import React from 'react';
import ReactDOM from 'react-dom';
 
import JqxPivotGrid from '../../../jqwidgets-react/react_jqxpivotgrid.js';
import JqxTextArea from '../../../jqwidgets-react/react_jqxtextarea.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
 
class App extends React.Component {
	constructor()
	{
		super();
		
		this.data = new Array();
		this.prepareSampleData();		
	}
    componentDidMount() {
		// handle expand/collapse, selection and sort events
		this.refs.myReactPivotGrid.on('pivotitemexpanding pivotitemcollapsing pivotitemexpanded pivotitemcollapsed pivotitemselectionchanged sortchanging sortchanged sortremoving sortremoved', (event) => {
			var t = new Date();
			var timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();

			var eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivotItem: ' + event.args.pivotItem.text;
			if (event.type == 'itemselectionchanged')
				eventData += ', Selected: ' + event.args.selected;

			eventData += "\n";
			this.refs.eventTextArea.val(eventData + this.refs.eventTextArea.val());
		});

		// handle pivot item mouse events
		this.refs.myReactPivotGrid.on('pivotitemmouseup pivotitemmousedown pivotitemclick pivotitemdblclick', (event) => {
			var t = new Date();
			var timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();

			var eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivotItem: ' + event.args.pivotItem.text + ', mousebutton: ' + event.args.mousebutton;

			eventData += "\n";
			this.refs.eventTextArea.val(eventData + this.refs.eventTextArea.val());
		});

		// handle pivot cell mouse events
		this.refs.myReactPivotGrid.on('pivotcellmouseup pivotcellmousedown pivotcellclick pivotcelldblclick', (event) => {
			var t = new Date();
			var timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();

			var eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivot row: ' + event.args.pivotRow.text + ', pivot column: ' + event.args.pivotColumn.text + ', mousebutton: ' + event.args.mousebutton;

			eventData += "\n";
			this.refs.eventTextArea.val(eventData + this.refs.eventTextArea.val());
		});

		this.refs.btnClearLog.on('click', (event) => {
			this.refs.eventTextArea.val('');
		});
    }

	prepareSampleData()
	{
		let firstNames =
		[
			"Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Kelly", "John", "Frankie"
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
				<br/>
				<JqxTextArea 
					ref='eventTextArea'
					style={{ width: 800, height: 100}}
				/>				
				<br/>
				<JqxButton 
					ref='btnClearLog'
					style={{ width: 90}}
					value={'Clear log'}
				/>				
			</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

