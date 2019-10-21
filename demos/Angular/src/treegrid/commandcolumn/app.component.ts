import { Component, ViewChild } from '@angular/core';

import { jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTreeGrid', { static: false }) myTreeGrid: jqxTreeGridComponent;

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

    columns: any[] =
    [
        { text: 'ID', editable: false, dataField: 'id', width: 150 },
        { text: 'Name', dataField: 'name', width: 250 },
        { text: 'Budget', align: 'right', cellsAlign: 'right', cellsFormat: 'c2', dataField: 'budget', width: 150 },
        { text: 'Location', dataField: 'location', width: 130 },
        {
            text: 'Edit', cellsAlign: 'center', align: 'center', columnType: 'none', editable: false, sortable: false, dataField: null,
            cellsRenderer: (row: number, column: any, value: any): string => {
                return `<div data-row='` + row + `' class='editButton' style='margin-left: 4em; float: left'></div>
                        <div data-row='` + row + `' class='cancelButton' style='display: none; float: left; margin-left: 1em'></div>`;
            }
        }
    ];

    editSettings: any =
    {
        saveOnPageChange: true, saveOnBlur: true,
        saveOnSelectionChange: false, cancelOnEsc: true,
        saveOnEnter: true, editOnDoubleClick: false, editOnF2: false
    };

    rendered = (): void => {
        let uglyEditButtons = jqwidgets.createInstance('.editButton', 'jqxButton', { width: 60, height: 24, value: 'Edit' });
        let flattenEditButtons = flatten(uglyEditButtons);

        let uglyCancelButtons = jqwidgets.createInstance('.cancelButton', 'jqxButton', { width: 60, height: 24, value: 'Cancel' });
        let flattenCancelButtons = flatten(uglyCancelButtons);

        function flatten(arr: any[]): any[] {
            if (arr.length) {
                return arr.reduce((flat: any[], toFlatten: any[]): any[] => {
                    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
                }, []);
            }
        }

        if (flattenEditButtons) {
            for (let i = 0; i < flattenEditButtons.length; i++) {
                flattenEditButtons[i].addEventHandler('click', (event: any): void => {
                    this.editClick(event);
                });
            }
        }

        if (flattenCancelButtons) {
            for (let i = 0; i < flattenCancelButtons.length; i++) {
                flattenCancelButtons[i].addEventHandler('click', (event: any): void => {
                    let rowKey = event.target.getAttribute('data-row');
                    this.myTreeGrid.endRowEdit(rowKey, true);
                });
            }
        }
    }

    ready = (): void => {
        this.myTreeGrid.expandAll();
    }

    rowKey: number = -1;

    rowClick(event: any): void {
        this.rowKey = event.args.key;
    };

    editClick(event: any): void {
        let editButtonsContainers = document.getElementsByClassName('editButton');
        let cancelButtonsContainers = document.getElementsByClassName('cancelButton');

        let value = event.target.innerText;
        if (value === 'Edit') {
            this.myTreeGrid.beginRowEdit(this.rowKey.toString());

            for (let i = 0; i < editButtonsContainers.length; i++) {
                (<HTMLElement>editButtonsContainers[i]).style.marginLeft = '4em';
                (<HTMLElement>cancelButtonsContainers[i]).style.display = 'none';
            }

            (<HTMLElement>editButtonsContainers[this.rowKey - 1]).innerText = 'Save';
            (<HTMLElement>editButtonsContainers[this.rowKey - 1]).style.marginLeft = '1em';

            (<HTMLElement>cancelButtonsContainers[this.rowKey - 1]).style.display = 'inline-block';

        } else {
            (<HTMLElement>editButtonsContainers[this.rowKey - 1]).innerText = 'Edit';
            (<HTMLElement>editButtonsContainers[this.rowKey - 1]).style.marginLeft = '4em';

            (<HTMLElement>cancelButtonsContainers[this.rowKey - 1]).style.display = 'none';

            this.myTreeGrid.endRowEdit(this.rowKey.toString());
        }
    }
}