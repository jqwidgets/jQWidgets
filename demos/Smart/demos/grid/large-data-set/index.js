Smart('#grid', class {
    get properties() {
        return {
			appearance: {
				showRowNumber: true
			},
			columnWidth: 100,
            dataSource: new Smart.DataAdapter(
			{
				dataSource: 10000,
				dataFields: 1000
			}),
			onCellValue(cell) {
				cell.value = cell.row.index + '.' + cell.column.index;
			}
        }
    }
});