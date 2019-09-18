Smart('#grid', class {
	get properties() {
		return {
			rowResizeMode: 'growAndShrink',
			rowHeight: 40,
			selection: {
				enabled: true,
				mode: 'extended'
			},
			appearance: {
				showRowHeader: true
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
					'quantity: number',
					'price: number',
					'total: number'
				]
			}),
			columns: [
			'id',
			{
				label: 'First Name', dataField: 'firstName'
			},
			{ label: 'Last Name', dataField: 'lastName' },
			{ label: 'Product', dataField: 'productName'},
			{ label: 'Quantity', dataField: 'quantity'},
			{ label: 'Unit Price', dataField: 'price', cellsFormat: 'c2' },
			{ label: 'Total', dataField: 'total', cellsFormat: 'c2' }
			]        
		}
	}
});

window.onload = function() {
	const radioButtons = document.querySelectorAll('smart-radio-button');
	const grid = document.getElementById('grid');
		
	for(let i = 0; i < radioButtons.length; i++) {
		const radioButton = radioButtons[i];
		
		radioButton.addEventListener('change', function(event) {
			if (event.detail.value) {
				if (this.id === 'none') {				
					grid.rowResizeMode = 'none';
				}
				else if (this.id === 'split') {
					grid.rowResizeMode = 'split';
				}
				else {
					grid.rowResizeMode = 'growAndShrink';	
				}				
			}
		});
	}
}
