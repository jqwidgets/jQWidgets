Smart('#table', class {
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