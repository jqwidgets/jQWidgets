Smart('#grid', class {
    get properties() {
        return {
			sorting: {
				enabled: true
			},
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
				{ label: 'Country', dataField: 'Country', sortOrder: 'desc' },
				'Area',
				'Population_Rural',
				'Population_Total',
				'GDP_Total'
            ]
        }
    }
});