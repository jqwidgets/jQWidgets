Smart('#grid', class {
	get properties() {
		return {
			dataSource: new Smart.DataAdapter(
			{
				dataSource: getStockData(),
				dataFields:
				[
					'symbol: string',
					'name: string',	
					'region: string',
					'matchScore: number'
					
				]
			}),
			columns: [
				{label: 'Symbol', dataField: 'symbol'},
				{label: 'Name', dataField: 'name'},
				{label: 'Region', dataField: 'region'},
				{label: 'Match Score', dataField: 'matchScore'}
			]
		}
	}
});

window.onload = function () {
	const grid = document.getElementById('grid');
	const rows = grid.rows;
	const updateValues = function() {	
		grid.suspendLayout();
		
		for(let i = 0; i < rows.length; i++){
			const value = new Number(Math.random()).toFixed(2);
			const cell = rows[i].cells[3];
			
			if (value < 0.2) {
				cell.background = "#FC3752";
				cell.color = "#fff";
			}
			else if (value > 0.8) {
				cell.background = "#95FF00";
				cell.color = "#000";
			}
			else {
				cell.background = "#FF6800";
				cell.color = "#fff";
			}
			
			cell.value = value;
		}
		
		grid.resumeLayout();
	}
	
	updateValues();
	
	setInterval(function() {
		updateValues();
	}, 1000);
}
