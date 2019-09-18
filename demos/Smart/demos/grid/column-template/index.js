Smart('#grid', class {
    get properties() {
        return {
			rowHeight: 50,
            dataSource: new Smart.DataAdapter(
			{
			    dataSource: getEmployees(),
			    dataFields:
				[
					'id: number',
					'firstName: string',
					'lastName: string',
					'title: string',
					'notes: string',
					'city: string',
					'country: string',
					'homePhone: string'
				]
			}),
            columns: [
			{
				label: 'Photo', dataField: 'Photo', width: 50, cellsVerticalAlign: 'middle', verticalAlign: 'middle', align: 'center', cellsAlign: 'center', formatFunction(settings) {
					settings.template = '<img width="32" src="' + '../../images/phonebook/' + settings.row.data.firstName.toLowerCase() + '.png"/>';
				}
			},
			{
			    label: 'First Name', dataField: 'firstName', 
			},
			{
			    label: 'Last Name', dataField: 'lastName'
			},
			{ label: 'Title', dataField: 'title', width: 150 },
			{ label: 'Notes', dataField: 'notes', align: 'center', cellsAlign: 'center', width: 70, template: '#notesTemplate' },
			{ label: 'City', dataField: 'city'
			},
			{ label: 'Country', width: 70, cellsAlign: 'center', align: 'center', dataField: 'country' },
			{ label: 'Phone', dataField: 'homePhone', template: '<a href="#{{value}}">{{value}}</a>' }
            ]
        }
    }
});
