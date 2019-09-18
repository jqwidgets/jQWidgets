Smart('#grid', class {
    get properties() {
        return {
            selection: {
				enabled: true,
				mode: 'many',
				checkBoxes: {
					selectAllMode: 'page',
					enabled: true,
					position: 'far'
				}
			},
			paging: {
				enabled: true
			},
			pager: {
				visible: true
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
                { label: 'Last Name', dataField: 'lastName' },
                { label: 'Product', dataField: 'productName' },
                { label: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right',},
                { label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
                { label: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
			]
        }
    }
});
window.onload = function() {
	const enableCheckBox = document.getElementById('enableCheckBox');
	const positionCheckBox = document.getElementById('positionCheckBox');
	const clickCheckBox = document.getElementById('clickCheckBox');
	const selectAllCheckBox = document.getElementById('selectAllModeCheckBox');
	const grid = document.getElementById('grid');
	
	selectAllCheckBox.addEventListener('change', function(event) {
		grid.selection.checkBoxes.selectAllMode = selectAllCheckBox.checked ? 'page' : 'none';
	});
	
	enableCheckBox.addEventListener('change', function(event) {
		grid.selection.checkBoxes.enabled = enableCheckBox.checked;
	});
	
	positionCheckBox.addEventListener('change', function(event) {	
		positionCheckBox.checked ? grid.selection.checkBoxes.position = 'far' : grid.selection.checkBoxes.position = 'near';
	});

	clickCheckBox.addEventListener('change', function(event) {
		clickCheckBox.checked ? grid.selection.action = 'click' : grid.selection.action = 'none';
	});	
}