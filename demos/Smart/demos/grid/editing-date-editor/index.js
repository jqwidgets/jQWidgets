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
			{
			    label: 'First Name', dataField: 'firstName'
			},
			{
			    label: 'Last Name', dataField: 'lastName'
			},
			{ label: 'Product', dataField: 'productName', editor: 'autoComplete' },
			{ label: 'Order Date', width: 250, dataField: 'date', editor: {
				template: 'dateTimePicker',
				formatString: 'd',
				onInit(index, dataField, editor){
				}
			}
			},
			{ label: 'Quantity', dataField: 'quantity', editor: 'numberInput' },
			{ label: 'Unit Price', dataField: 'price', editor: 'numberInput', cellsFormat: 'c2' }
            ]
        }
    }
});
