(function GenerateData() {
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

	for (let i = 0; i < 1000000; i++) {
		let row = {};
		let productindex = Math.floor(Math.random() * productNames.length);
		let price = parseFloat(priceValues[productindex]);
		let quantity = 1 + Math.round(Math.random() * 10);
		row["id"] = 1+i;
		row["firstName"] = firstNames[Math.floor(Math.random() * firstNames.length)];
		row["lastName"] = lastNames[Math.floor(Math.random() * lastNames.length)];
		row["productName"] = productNames[productindex];
		row["price"] = price;
		row["quantity"] = quantity;
		row["total"] = price * quantity;
		data[i] = row;
	}

	window.Data = data;
}());

function GetData(first, last) {
	return Data.slice(first, last)
}

Smart('#grid', class {
	get properties() {
		return {
			dataSource: new Smart.DataAdapter(
			{
				dataSource: 1000000
			}),
			columns: [
			'id',
			{
				label: 'First Name', dataField: 'firstName'
			},
			{ label: 'Last Name', dataField: 'lastName' },
			{ label: 'Product', dataField: 'productName'},
			{ label: 'Quantity',  dataField: 'quantity'},
			{ label: 'Unit Price',  dataField: 'price', cellsFormat: 'c2' },
			{ label: 'Total', dataField: 'total', cellsFormat: 'c2' }
			],
			onCellValue(cell) {
				const rowIndex = cell.row.index;
				const columnDataField = cell.column.dataField;
				
				cell.value = Data[rowIndex][columnDataField];
			}	
		}
	}
});

