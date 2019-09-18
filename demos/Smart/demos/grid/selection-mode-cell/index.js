Smart('#grid', class {
    get properties() {
        return {
			appearance: {
				showRowHeader: true
			},
            selection: {
				enabled: true,
				mode: 'extended',
				allowCellSelection: true
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

window.onload = function () {
	const grid = document.querySelector('#grid');
	const dblClickCheckBox = document.querySelector('#dblclickCheckBox');
	const headerSelectionCheckBox = document.querySelector('#headerSelectionCheckBox');
	const colheaderSelectionCheckBox = document.querySelector('#colheaderSelectionCheckBox');
	const singleRadioButton = document.querySelector('#singleRadioButton');
	const multipleRadioButton = document.querySelector('#multipleRadioButton');
	const extendedRadioButton = document.querySelector('#extendedRadioButton');
	
	grid.select(3);
	
	dblClickCheckBox.addEventListener('change', function() {
		grid.selection.action = dblClickCheckBox.checked ? 'doubleClick' : 'click';
	});

	headerSelectionCheckBox.addEventListener('change', function() {
		grid.selection.allowRowHeaderSelection = headerSelectionCheckBox.checked;	
	});
	
	colheaderSelectionCheckBox.addEventListener('change', function() {
		grid.selection.allowColumnHeaderSelection = colheaderSelectionCheckBox.checked;	
	});
	
	const updateSelectionMode = function(event) {
		if (singleRadioButton === event.target && singleRadioButton.checked) {
			grid.selection.mode = 'one';
		}
	
		if (multipleRadioButton === event.target && multipleRadioButton.checked) {
			grid.selection.mode = 'many';
		}
	
		if (extendedRadioButton === event.target && extendedRadioButton.checked) {
			grid.selection.mode = 'extended';
		}
		
	}
	
	singleRadioButton.addEventListener('change', function(event) {
		updateSelectionMode(event);
	});

	multipleRadioButton.addEventListener('change', function(event) {
		updateSelectionMode(event);
	});

	extendedRadioButton.addEventListener('change', function(event) {
		updateSelectionMode(event);
	});
}