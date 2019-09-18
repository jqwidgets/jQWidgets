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
	const rows = grid.rows;
	const addRow = document.getElementById('addRow');
	const removeLastRow = document.getElementById('removeLastRow');
	const removeFirstRow = document.getElementById('removeFirstRow');
	const updateFirstRow = document.getElementById('updateFirstRow');
	
	const updateButtonsDisabledState = function () {
	    removeLastRow.disabled = rows.length === 0;
	    removeFirstRow.disabled = rows.length === 0;		
		updateFirstRow.disabled = rows.length === 0;
	}

	const createRow = function() {
		const countries = ['Bulgaria', 'Germany', 'France', 'Japan', 'China', 'Italy', 'Spain', 'Portugal', 'India', 'Romania', 'Russia', 'Serbia', 'Turkey', 'Israel'];
	
		const newRow = new Smart.Grid.Row({data: {
			ID: Math.random(1000), 
			Country: countries[parseInt(10 * (Math.random(countries.length)))], 
			Area: parseInt(Math.random(10000) * 1000000),
			Population_Rural: new Number(Math.random(10000)).toFixed(2),
			Population_Total: parseInt(Math.random(10000) * 10000000),
			GDP_Total: parseInt(Math.random(10000) * 1000000)			
		}});
		
		return newRow;
	}
	
	addRow.addEventListener('click', function(event) {				
		rows.push(createRow());
		updateButtonsDisabledState();
	});
	
	removeLastRow.addEventListener('click', function(event) {
		rows.pop();	
		updateButtonsDisabledState();
	});

	removeFirstRow.addEventListener('click', function(event) {
		rows.splice(0, 1);	
		updateButtonsDisabledState();
	});

	updateFirstRow.addEventListener('click', function(event) {
		if (rows.length > 0) {
			rows[0] = createRow();
		}
	});
}
