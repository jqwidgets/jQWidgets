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
					'date: date',
					'price: number',
					'total: number'
				]
			}),
            editing: {
				enabled: true,
			    mode: 'cell'
            },
            columns: [
				{ label: 'First Name', dataField: 'firstName', editor: 'textArea' },
				{ label: 'Last Name', dataField: 'lastName', editor: 'textArea' },
				{ label: 'Product', dataField: 'productName', width: 150, editor: 'textArea'
				},
				{ label: 'Quantity', dataField: 'quantity',  editor: 'numberInput'
				},
				{ label: 'Unit Price', dataField: 'price',  editor: 'numberInput', cellsFormat: 'c2' }
            ]
        }
    }
});
