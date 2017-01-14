import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';

class App extends React.Component {
    render () {
        let generateTasks =  (rowsCounts) => {
            let rowsCount = !rowsCounts ? 1 + Math.floor(Math.random() * 5) : rowsCounts;
            let data = new Array();
            let generatekey =  () => {
                let S4 =  () => {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                };
                return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
            };
            for (let i = 0; i < rowsCount; i++) {
                let row = {};
                let tasks = ["Shopping", "Housewares", "Kitchen supplies", "Groceries", "Cleaning supplies", "Office supplies", "Remodeling", "Paint bedroom", "Paint wall", "Fitness", "Decorate living room",
                    "Fix lights", "Fix front door", "Clean kitchen"];
                let firstNames =
                [
                    "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
                ];
                let lastNames =
                [
                    "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
                ];
                row["id"] = generatekey();
                row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
                row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
                row["name"] = row["firstname"] + " " + row["lastname"];
                let taskindex = Math.floor(Math.random() * tasks.length);
                row["task"] = tasks[taskindex];
                row["duration"] = 1 + Math.floor(Math.random() * 10);
                data.push(row);
            }

            return data;
        };

        let virtualModeCreateRecords = (expandedRecord, done) => {
            // expandedRecord is equal to null when the  is initially called, because there is still no record to be expanded.
            // prepare the data
            let source =
            {
                dataType: "array",
                dataFields: [
                    { name: "id", type: "string" },
                    { name: "name", type: "string" },
                    { name: "duration", type: "number" },
                    { name: "task", type: "number" }
                ],
                localData: expandedRecord === null ? generateTasks(3000) : generateTasks(),
                id: 'id'
            }
            let dataAdapter = new $.jqx.dataAdapter(source, {
                loadComplete: () => {
                    done(dataAdapter.records);
                }
            });
            dataAdapter.dataBind();
        };

        let virtualModeRecordCreating = (record) => {
            if (record.level == 2) {
                // by setting the record's leaf member to true, you will define the record as a leaf node.
                record.leaf = true;
            }
        };

        let columns = [
            { text: 'Task', dataField: "task", align: 'center', width: 300 },
            { text: 'Person Name', dataField: "name", cellsAlign: 'center', align: 'center', width: 300 },
            {
                text: 'Duration', aggregates: ['sum'], dataField: "duration", cellsAlign: 'center', align: 'center', cellsRenderer: (row, column, value) => {
                    let hour = value > 1 ? " hours" : " hour";
                    return value + hour;
                }
            }
        ];
        return (
            <JqxTreeGrid
              width={850} pageable={true} virtualModeCreateRecords={virtualModeCreateRecords}
              altRows={true} columns={columns} virtualModeRecordCreating={virtualModeRecordCreating}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
