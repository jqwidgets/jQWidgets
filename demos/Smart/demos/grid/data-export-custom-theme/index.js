import {smartGrid} from "../../../../../jqwidgets-smart-wc/modules/smart.grid.js";

document.readyState === 'complete' ? init() : window.onload = init;

Smart('#grid', class {
    get properties() {
        return {
			groupBy: ['productName'],
			grouping: {
				enabled: true
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
	const pdfBtn = document.querySelector('#pdfBtn');
	const htmlBtn = document.querySelector('#htmlBtn');	
	
	xlsxBtn.addEventListener('click', () => {
		grid.exportData('xlsx');
	});
	
	pdfBtn.addEventListener('click', () => {
		grid.exportData('pdf');
	});
		
	htmlBtn.addEventListener('click', () => {
		grid.exportData('html');
	});
}