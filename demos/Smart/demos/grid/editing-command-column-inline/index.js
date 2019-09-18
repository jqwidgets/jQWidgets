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
                action: 'none',
				batch: true,
		        mode: 'row',
				commandColumn: {
					visible: true,
					displayMode: 'icon',
					inline: true
				},
				commandBar: {
					visible: true,
					position: 'near'
				}
            },
            columns: [
			{
			    label: 'First Name', dataField: 'firstName'
			},
			{
			    label: 'Last Name', dataField: 'lastName'
			},
			{ label: 'Product', dataField: 'productName', editor: 'autoComplete' },
			{ label: 'Available', dataField: 'available', template: 'checkBox', editor: 'checkBox' },
			{ label: 'Quantity', dataField: 'quantity', editor: 'numberInput' },
			{ label: 'Unit Price', dataField: 'price', editor: 'numberInput', cellsFormat: 'c2' }
            ]
        }
    }
});
