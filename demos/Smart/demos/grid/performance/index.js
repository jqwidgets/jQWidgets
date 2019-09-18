Smart('#grid', class {
	get properties() {
		return {
			dataSource: new Smart.DataAdapter(
			{
				dataSource: 20
			}),
			columns: [
				'A',
				'B',
				'C',
				'D',
				'E',
				'F',
				'G',
				'H',
				'I',
				'J'
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
			const row = rows[i];
			
			for(let j = 0; j < row.cells.length; j++) {				
				const value = new Number(Math.random()).toFixed(2);
				const cell = rows[i].cells[j];
					
				cell.value = value;
				if (value < 0.2) {
					cell.background = "#27A2FC";
					cell.color = "#fff";
				}
				else if (value > 0.8) {
					cell.background = "#6C01FF";
					cell.color = "#000";
				}
				else {
					cell.background = "#FC27A2";
					cell.color = "#fff";
				}
			}
		}
		
		grid.resumeLayout();
	}
	
	updateValues();

	setInterval(function() {
		updateValues();
	}, 10);
}
