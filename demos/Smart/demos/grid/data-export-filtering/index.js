import {smartGrid} from "../../../../../jqwidgets-smart-wc/modules/smart.grid.js";

document.readyState === 'complete' ? init() : window.onload = init;

Smart('#grid', class {
    get properties() {
        return {
			dataExport: {
				filterBy: {
				    firstName: {
						operator: 1,
						filters: [{
							value: 'Ma',
							condition: 'STARTS_WITH'
						},
						{
							value: 'y',
							condition: 'CONTAINS'
						}]
					},
					price: {
						operator: 0,
						filters: [{
							value: 1,
							condition: 'GREATER_THAN'
					   },
					   {
						   value: 3,
						   condition: 'LESS_THAN'
					   }]
					}
				}
			},
			dataSource: new Smart.DataAdapter(
			{
			    dataSource: generateData(100),
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
                { label: 'Product', dataField: 'productName' },
                { label: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right',},
                { label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
                { label: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
			]
        }
    }
});

function init() { 
	const grid = document.querySelector('smart-grid');
	const xlsxBtn = document.querySelector('#xlsxBtn');
	
	xlsxBtn.addEventListener('click', () => {
		grid.exportData('xlsx');
	});
}