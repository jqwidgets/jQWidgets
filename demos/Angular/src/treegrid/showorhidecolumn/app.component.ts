import { Component, ViewChild } from '@angular/core';

import { jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('TreeGrid', { static: false }) treeGrid: jqxTreeGridComponent;

    data: any[] = [
        {
            'id': '1', 'name': 'Corporate Headquarters', 'budget': '1230000', 'location': 'Las Vegas',
            'children':
            [
                {
                    'id': '2', 'name': 'Finance Division', 'budget': '423000', 'location': 'San Antonio',
                    'children':
                    [
                        { 'id': '3', 'name': 'Accounting Department', 'budget': '113000', 'location': 'San Antonio' },
                        {
                            'id': '4', 'name': 'Investment Department', 'budget': '310000', 'location': 'San Antonio',
                            'children':
                            [
                                { 'id': '5', 'name': 'Banking Office', 'budget': '240000', 'location': 'San Antonio' },
                                { 'id': '6', 'name': 'Bonds Office', 'budget': '70000', 'location': 'San Antonio' },
                            ]
                        }
                    ]
                },
                {
                    'id': '7', 'name': 'Operations Division', 'budget': '600000', 'location': 'Miami',
                    'children':
                    [
                        { 'id': '8', 'name': 'Manufacturing Department', 'budget': '300000', 'location': 'Miami' },
                        { 'id': '9', 'name': 'Public Relations Department', 'budget': '200000', 'location': 'Miami' },
                        { 'id': '10', 'name': 'Sales Department', 'budget': '100000', 'location': 'Miami' }
                    ]
                },
                { 'id': '11', 'name': 'Research Division', 'budget': '200000', 'location': 'Boston' }
            ]
        }
    ];
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
        // prepare the data
    source: any =
    {
        dataType: 'json',
        dataFields: [
            { name: 'name', type: 'string' },
            { name: 'budget', type: 'number' },
            { name: 'id', type: 'number' },
            { name: 'children', type: 'array' },
            { name: 'location', type: 'string' }
        ],
        hierarchy:
        {
            root: 'children'
        },
        localData: this.data,
        id: 'id'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source, {
        loadComplete(): void{
        }
    });
    
    columns: any[] = [
        { text: "Name", align: "center", dataField: "name", width: 240 },
        { text: "Budget", cellsAlign: "center", align: "center", dataField: "budget", cellsFormat: "c2", width: 200 },
        { text: "Location", dataField: "location", cellsAlign: "center", align: "center", hidden: true, width: 200 }
    ];

    listSource = [{ label: 'Budget', value: 'budget', checked: true }, { label: 'Location', value: 'location', checked: false }];

    ready(): void {
        this.treeGrid.expandRow(1);
        this.treeGrid.expandRow(2);
    };

    checkChange(event: any): void {
        this.treeGrid.beginUpdate();
        if (event.args.checked) {
            this.treeGrid.showColumn(event.args.value);
        }
        else {
            this.treeGrid.hideColumn(event.args.value);
        }

        this.treeGrid.endUpdate();
    }
}