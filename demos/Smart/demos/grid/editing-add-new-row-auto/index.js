Smart('#grid', class {
    get properties() {
        return {
            appearance: {
                showRowNumber: true
            },
            dataSource: new Smart.DataAdapter(
			{
			    dataSource: generateData(15),
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
			selection: {
				enabled: true,
				allowCellSelection: true,
				mode: 'extended'
			},	
            editing: {
                enabled: true,
				addNewRow: {
					autoCreate: true
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
window.onload = function() {
	const grid = document.getElementById('grid');

}