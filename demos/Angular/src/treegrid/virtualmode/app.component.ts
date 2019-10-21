import { Component, ViewChild } from '@angular/core';

import { jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('TreeGrid', { static: false }) treeGrid: jqxTreeGridComponent;

    generateTasks(rowsCounts?: number): any {
        let rowsCount = !rowsCounts ? 1 + Math.floor(Math.random() * 5) : rowsCounts;
        let data = new Array();
        let generatekey = () => {
            let S4 = () => {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
        };
        for (let i = 0; i < rowsCount; i++) {
            let row = {};
            let tasks = ['Shopping', 'Housewares', 'Kitchen supplies', 'Groceries', 'Cleaning supplies', 'Office supplies', 'Remodeling', 'Paint bedroom', 'Paint wall', 'Fitness', 'Decorate living room',
                'Fix lights', 'Fix front door', 'Clean kitchen'];
            let firstNames =
                [
                    'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
                ];
            let lastNames =
                [
                    'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
                ];
            row['id'] = generatekey();
            row['firstname'] = firstNames[Math.floor(Math.random() * firstNames.length)];
            row['lastname'] = lastNames[Math.floor(Math.random() * lastNames.length)];
            row['name'] = row['firstname'] + ' ' + row['lastname'];
            let taskindex = Math.floor(Math.random() * tasks.length);
            row['task'] = tasks[taskindex];
            row['duration'] = 1 + Math.floor(Math.random() * 10);
            data.push(row);
        }

        return data;
    };
	
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    
    virtualModeCreateRecords = (expandedRecord, done): void => {
         //expandedrecord is equal to null when the  is initially called, because there is still no record to be expanded.
         //prepare the data
        let source =
            {
                datatype: 'array',
                datafields: [
                    { name: 'id', type: 'string' },
                    { name: 'name', type: 'string' },
                    { name: 'duration', type: 'number' },
                    { name: 'task', type: 'number' }
                ],
                localdata: expandedRecord === null ? this.generateTasks(3000) : this.generateTasks(),
                id: 'id'
            };

        let dataAdapter = new jqx.dataAdapter(source, {
            loadComplete: () => {
                done(dataAdapter.records);
            }
        });

        dataAdapter.dataBind();
    };

    virtualModeRecordCreating(record): void {
        if (record.level == 2) {
            // by setting the record's leaf member to true, you will define the record as a leaf node.
            record.leaf = true;
        }
    };

    columns: any[] = [
        { text: 'Task', dataField: 'task', align: 'center', width: 300 },
        { text: 'Person Name', dataField: 'name', cellsAlign: 'center', align: 'center', width: 300 },
        {
            text: 'Duration', aggregates: ['sum'], dataField: 'duration', cellsAlign: 'center', align: 'center', cellsRenderer: (row, column, value) => {
                let hour = value > 1 ? ' hours' : ' hour';
                return value + hour;
            }
        }
    ];
}