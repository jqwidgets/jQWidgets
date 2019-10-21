import { Component, ViewChild } from '@angular/core';

import { jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('TreeGrid', { static: false }) treeGrid: jqxTreeGridComponent;

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    data: any[] = [
        {
            'id': '1', 'name': 'Corporate Headquarters', 'budget': '1230000', 'location': 'Las Vegas',
            'children':
            [
                {
                    'id': '2', 'name': 'Finance Division', 'budget': '423000', 'location': 'San Antonio',
                    'children':
                    [
                        {
                            'id': '4', 'name': 'Investment Department', 'budget': '310000', 'location': 'San Antonio',
                            'children':
                            [
                                { 'id': '5', 'name': 'Banking Office', 'budget': '240000', 'location': 'San Antonio' },
                                { 'id': '6', 'name': 'Bonds Office', 'budget': '70000', 'location': 'San Antonio' },
                            ]
                        },
                        { 'id': '3', 'name': 'Accounting Department', 'budget': '113000', 'location': 'San Antonio' }
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
                { 'id': '11', 'name': 'Research Division', 'budget': '200000', 'location': 'Boston' },
                { 'id': '12', 'name': 'Development Division', 'budget': '300000', 'location': 'Boston' }
            ]
        }
    ];

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

    dataAdapter: any = new jqx.dataAdapter(this.source);
        
    columns: any[] = [
        { text: 'Name', align: 'left', dataField: 'name', width: 300 },
        { text: 'Location', dataField: 'location', cellsAlign: 'left', align: 'left', width: 250 },
        {
            text: 'Budget', cellsAlign: 'right', align: 'right', dataField: 'budget', cellsFormat: 'c2',
            aggregates: [{
                'Total':
                (aggregatedValue, currentValue, column, record, aggregateLevel) => {
                    if (record.checked && record.level === aggregateLevel) {
                        return aggregatedValue + currentValue;
                    }
                    else {
                        return aggregatedValue;
                    }
                }
            }],
            aggregatesRenderer: (aggregatesText, column, element, aggregates, type) => {
                let renderString = '';
                if (type == 'aggregates') {
                    renderString = '<div style="margin: 4px; float: right;  height: 100%;">';
                }
                else {
                    renderString = '<div style="float: right;  height: 100%;">';
                }

                let euro = this.dataAdapter.formatNumber(0.74 * aggregates.Total, 'f2');
                let usd = this.dataAdapter.formatNumber(aggregates.Total, 'f2');
                renderString += "<table><tr><td rowspan='2'><strong>Total: </strong></td><td align='right'>" + usd + " USD</td><tr><td align='right'>" + euro + " EUR</td></tr></table>";
                return renderString;
            }
        }
    ];

    ready(): void {
        this.treeGrid.expandRow(1);
        this.treeGrid.expandRow(2);
    };
}