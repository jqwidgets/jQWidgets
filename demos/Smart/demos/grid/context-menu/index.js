Smart('#grid', class {
    get properties() {
        return {
            appearance: {
                showRowNumber: true
            },
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
                mode: 'row'
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
	const menu = document.getElementById('menu');
	let rowId = null;
	
	grid.addEventListener('contextmenu', function(event) {
		event.stopPropagation();
		event.preventDefault();
	
		menu.open(event.pageX, event.pageY);
		return false;
	});
	
	 menu.addEventListener('itemClick', function (event) {
		if (rowId === undefined) {
			return;
		}
		
		if (event.detail.item.getAttribute('data-id') === 'Edit') {
			grid.beginEdit(rowId);
		}			
		else {
			grid.deleteRow(rowId);
		}
     });
	
	grid.addEventListener('rowClick', function(event) {
		if (event.detail.originalEvent.which === 3) {
			const row = event.detail.row;
			
			rowId = row.id;
			
			event.detail.originalEvent.stopPropagation();
		}		
	});
}
