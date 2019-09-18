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
                mode: 'row',
				commandColumn: {
					visible: true,
					displayMode: 'icon',
					dataSource: {
						'commandColumnDelete': {visible: false},
						'commandColumnCustom': {icon: 'smart-icon-tools', command: 'commandColumnCustomCommand', visible: true, label: 'Text'}
					}
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

window.commandColumnCustomCommand = function(row){
	description.innerHTML = 'Id: ' + row.id + ', First Name: ' + row.data.firstName + ', Last Name: ' + row.data.lastName ;
}