const Data = 
[
	{Name: 'Task 1', Status: 'Done', Column3: 'Item 1.3', Column4: 'Item 1.4', Column5: 'Item 1.5', Notification: false},
	{Name: 'Task 2', Status: 'In Progress', Column3: 'Item 2.3', Column4: 'Item 2.4', Column5: 'Item 2.5', Notification: false},
	{Name: 'Task 3', Status: 'Done', Column3: 'Item 3.3', Column4: 'Item 3.4', Column5: 'Item 3.5', Notification: true},
	{Name: 'Task 4', Status: 'Done', Column3: 'Item 4.3', Column4: 'Item 4.4', Column5: 'Item 4.5', Notification: false},
	{Name: 'Task 5', Status: 'Done', Column3: 'Item 5.3', Column4: 'Item 5.4', Column5: 'Item 5.5', Notification: false}
];
Smart('#grid', class {
	get properties() {
		return {
			appearance: {
				showColumnLines: false,
				showColumnHeaderLines: false
			},
			selection: {
				enabled: true,
				checkboxes: {
					enabled: true
				}
			},
			grouping: {
				enabled: true,
				groupIndent: 0,
				summaryRow: {
					visible: false
				}
			},
			onCommand: function(args) {
				if (args.name === 'commandColumnRowMenuCommand') {
					const row = args.details;
					const menu = document.getElementById('menu');
					
					args.event.preventDefault();
	
					menu.setAttribute('data-row-id', row.id);
					
					const cell = row.getCell('Notification');

					if (cell.value) {
						menu.items[0].disabled = true;	
						menu.items[1].disabled = false;	
					}
					else {
						menu.items[0].disabled = false;	
						menu.items[1].disabled = true;	
					}
					
					menu.open(args.event.pageX - 150, args.event.pageY + 20);
					args.handled = true;
				}
			},
			editing: {
				enabled: true,
				action: 'none',
				commandColumn: {
					visible: true,
					dataSource: {
						commandColumnEdit: {
							visible: false
						},
						commandColumnDelete: {
							visible: false
						},
						commandColumnMenu: {
							visible: true
						},
						commandColumnRowMenu: {
							visible: true
						}
					}
				}
			},
			dataSource: new Smart.DataAdapter(
			{
				dataSource: Data,
				groupBy: [
					
				],
				dataFields:
				[
					'Name: string',
					'Status: string',
					'Column3: string',
					'Column4: string',
					'Column5: string',
					'Notification: bool'
				]
			}),
			columns: [
				{ label: 'Name', dataField: 'Name', allowHide: false},
				{ label: 'Status', dataField: 'Status', allowHide: false,
					// Custom Cells Value Formatting. 
					formatFunction(settings) {
						if (settings.value === 'Done') {
							settings.template = '<div class="status"><span class="icon fa-circle-o far"></span><span>Done</span></div>';
						}
						else {
							settings.template =  '<div class="status"><span class="icon fa-circle-o-notch far"></span><span>In Progress</span></div>';
						}
					}	
				},
				{ label: 'Column 3', dataField: 'Column3', allowGroup: false},
				{ label: 'Column 4', dataField: 'Column4', allowGroup: false},
				{ label: 'Column 5', dataField: 'Column5', allowGroup: false},
				{ label: '',  dataField: 'Notification', allowHide: false, allowGroup: false, width: 40, 
					// Custom Cells Value Formatting. 
					formatFunction(settings) {
						if (settings.value) {
							settings.template = '<span class="icon fa-bell"></span>';
						}
						else {
							settings.template = '';
						}
				}}				
			]
		}
	}
});

window.onload = function() {
	const grid = document.querySelector('smart-grid');
	const items = document.querySelector('.header .items');
	const itemTemplate = document.querySelector('#itemTemplate');
	const filterInput = document.querySelector('#filterInput');
	
	// renders the header.
	const renderHeader = () => {
		items.innerHTML = '';
		
		const data = grid.dataSource.toArray();
		
		const itemsData = [
			{ label: 'Total', value: data.length},
			{ label: 'Done', value: data.filter(item => item.Status === 'Done').length},
			{ label: 'In Progress', value: data.filter(item => item.Status === 'In Progress').length},
			{ label: 'Notifications', value: data.filter(item => item.Notification === true).length}	
		]
		
		filterInput.dataSource = ['All tasks'].concat(data.map((item) => {return item.Name}));
		
		for(let i = 0; i < itemsData.length; i++) {
			const item = itemsData[i];
			const element = document.importNode(itemTemplate.content, true);
			const content = element.firstElementChild;
			
			content.innerHTML = content.innerHTML.replace(/{{count}}/, item.value).replace(/{{label}}/, item.label);
			
			items.appendChild(element);
		}
	}
	
	filterInput.addEventListener('change', function(event) {
		const value = filterInput.value;
		
		if (value === 'All tasks') {
			grid.filtering.filter = [];
		}
		else {
			grid.filtering.filter = [
				['Name', 'contains "' + value + '"']
			];
		}
	});
	
	renderHeader();
	
	 menu.addEventListener('itemClick', function (event) {
		const rowId = menu.getAttribute('data-row-id');
		let row = null;
		
		for (let i = 0; i < grid.rows.length; i++) {
			if (grid.rows[i].id == rowId) {
				row = grid.rows[i];
			}
		}
		
		if (row) {
			const cell = row.getCell('Notification');
			
			// Sets or unsets the 'Notification'.
			if (event.detail.item.getAttribute('data-id') === 'Notification') {
				cell.value = true;
			}			
			else {
				cell.value = false;
			}
		
			renderHeader();
		}
     });
}