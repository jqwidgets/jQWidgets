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
					label: 'First Name', dataField: 'firstName', editor: {
						template: 'autoComplete',
						readonly: true
					}
				},
				{ label: 'Last Name', dataField: 'lastName', editor: { 
					template: 'autoComplete',
					dropDownButtonPosition: 'right'
				}
				},
				{ label: 'Product', dataField: 'productName', editor: {
					template: 'autoComplete',
					readonly: true,
					autoOpen: true
				}
				}
            ]
        }
    }
});