Smart('#grid', class {
    get properties() {
        return {
            dataSource: new Smart.DataAdapter(
			{
			    dataSource: generateData(1000),
			    dataFields:
				[
					'id: number',
					'firstName: string',
					'lastName: string',
					'productName: string',
                    'available: bool',
					'quantity: number',
					'price: number',
					'total: number'
				]
			}),
			editing: {
				enabled: true,
				mode: 'cell'
			},
            columns: [
			{
			    label: 'First Name', dataField: 'firstName', editor: 'autoComplete'
			},
			{ label: 'Last Name', dataField: 'lastName', editor: { 
				template: 'autoComplete',
				autoOpen: true,
				dropDownButtonPosition: 'right'
			}
			},
			{ label: 'Product', dataField: 'productName', editor: 'autoComplete' },
			{ label: 'Available', dataField: 'available', template: 'checkBox', editor: 'checkBox'},
			{ label: 'Quantity', dataField: 'quantity', editor: 'numberInput' },
			{ label: 'Unit Price',  dataField: 'price',  editor: 'numberInput', cellsFormat: 'c2' }
            ]
        }
    }
});