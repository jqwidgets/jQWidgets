Smart('#grid', class {
    get properties() {
        return {
			appearance: {
				allowSortAnimation: true
			},
			sorting: {
				enabled: true
			},
			dataSource: new Smart.DataAdapter(
			{
			    dataSource: generateData(3000),
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
		       {
                    label: 'First Name', dataField: 'firstName'
                },
                { label: 'Last Name', dataField: 'lastName'},
                { label: 'Product', dataField: 'productName' },
                { label: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right',},
                { label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
                { label: 'Total', dataField: 'total',  align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
			]	
        }
    }
});
