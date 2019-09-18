Smart('#grid', class {
	get properties() {
		return {
			dataSource: new Smart.DataAdapter(
			{
				dataSource: getCountriesData(),
				dataFields:
				[
					'ID: number',
					'Country: string',
					'Area: number',
					'Population_Urban: number',
					'Population_Rural: number',
					'Population_Total: number',
					'GDP_Agriculture: number',
					'GDP_Industry: number',
					'GDP_Services: number',
					'GDP_Total: number'
				]
			}),
			columns: [
				'Country',
				'Area',
				'Population_Rural',
				'Population_Total',
				'GDP_Total'
			]
		}
	}
});

window.onload = function () {
	const grid = document.getElementById('grid');
	const columns = grid.columns;
	const addColumn = document.getElementById('addColumn');
	const removeLastColumn = document.getElementById('removeLastColumn');
	const removeFirstColumn = document.getElementById('removeFirstColumn');
	const updateFirstColumn = document.getElementById('updateFirstColumn');
	let index = 0;
	
	const columnsList = [
		'ID',
		'Country',
		'Area',
		'Population_Urban',
		'Population_Rural',
		'Population_Total',
		'GDP_Agriculture',
		'GDP_Industry',
		'GDP_Services',
		'GDP_Total'
	]
	
	const updateButtonsDisabledState = function () {
	    addColumn.disabled = columns.length === columnsList.length;
	    removeLastColumn.disabled = columns.length === 0;
	    removeFirstColumn.disabled = columns.length === 0;
	    updateFirstColumn.disabled = columns.length === 0 || (columns.length > 0 && columns[0].label.indexOf('New') !== -1);
	}

	addColumn.addEventListener('click', function(event) {			
		for(let i = 0; i < columnsList.length; i++) {	
			let alreadyAdded = false;
			
			for (let j = 0; j < columns.length; j++) {			
				const column = columns[j];
				
				if (column && column.label === columnsList[i]) {
					alreadyAdded = true;
					break;
				}
			}
			
			if (alreadyAdded) {
				continue;
			}
			
			const newColumn = new Smart.Grid.Column({label: columnsList[i], dataField: columnsList[i]});
		
			columns.push(newColumn);
		
			break;		
		}

		updateButtonsDisabledState();
	});
	
	removeLastColumn.addEventListener('click', function(event) {
		columns.pop();	
		updateButtonsDisabledState();
	});

	removeFirstColumn.addEventListener('click', function(event) {
		columns.splice(0, 1);	
		updateButtonsDisabledState();
	});

	updateFirstColumn.addEventListener('click', function(event) {
		if (columns.length > 0) {
			columns[0].label = "New " + columns[0].label;
		}
		updateFirstColumn.disabled = true;
	});
}
