import {smartGrid} from "../../../../../jqwidgets-smart-wc/modules/smart.grid.js";

document.readyState === 'complete' ? init() : window.onload = init;

window.gridProps = {
	dataSource: new Smart.DataAdapter(
	{
		dataSource: '../../../scripts/data.xlsx',
		async: false,
		dataFields:
			[
				'id: number',
				'firstName: string',
				'lastName: string',
				'productName: string',
				'quantity: number',
				'price: number',
				'total: number'
			]
	}),
	columns: [
		'id',
		{
			label: 'First Name', dataField: 'firstName'
		},
		{ label: 'Last Name', dataField: 'lastName' },
		{ label: 'Product', dataField: 'productName' },
		{ label: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right',},
		{ label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
		{ label: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
	]
};

function init() { 

}
