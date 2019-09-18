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
            editing: {
                enabled: true,
                action: 'click',
				addDialog: {
					enabled: true
				},
				addNewRow: {
					visible: true,
					position: 'both'
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
	const topButton = document.getElementById('top');
	const bothButton = document.getElementById('both');
	const bottomButton = document.getElementById('bottom');

	
	topButton.addEventListener('change', function() {
	    if (topButton.checked) {
			grid.editing.addNewRow.position = 'near';
		}
	});

	bothButton.addEventListener('change', function() {
		if (bothButton.checked) {
			grid.editing.addNewRow.position = 'both';
		}
	});

	bottomButton.addEventListener('change', function() {
		if (bottomButton.checked) {
			grid.editing.addNewRow.position = 'far';
		}
	});
}