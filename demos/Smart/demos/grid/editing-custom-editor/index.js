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
					'date: date',
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
			    label: 'Mood', dataField: '', editor: {
					template: '#moodEditorTemplate',
					onInit(rowIndex, dataField, editorElement) {
						editorElement.addEventListener('click', function(event) {	
							editorElement.firstElementChild.value = event.target.innerHTML;	
						});
					}
				}, width: 70, align: 'left', template: '#moodTemplate',	
			},
			{
			    label: 'First Name', dataField: 'firstName', editor: '<input/>'
			},
			{
			    label: 'Last Name', dataField: 'lastName', editor: '<input/>'
			},
			{ label: 'Product', width: 200, dataField: 'productName', editor: '#template' },
			{ label: 'Order Date', width: 200, dataField: 'date', editor: '<input type="date"/>'
			},
			{ label: 'Quantity', dataField: 'quantity', editor: '<input type="range"/>' },
			{ label: 'Unit Price', dataField: 'price', editor: '<input type="number"/>', cellsFormat: 'c2' }
            ]
        }
    }
});
