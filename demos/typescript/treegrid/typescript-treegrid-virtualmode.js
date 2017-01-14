/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createTreeGridVirtualMode(selector) {
    var generateTasks = function (rowsCount) {
        var rowsCount = !rowsCount ? 1 + Math.floor(Math.random() * 5) : rowsCount;
        var data = new Array();
        var generatekey = function () {
            var S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        };
        for (var i = 0; i < rowsCount; i++) {
            var row = {};
            var tasks = ["Shopping", "Housewares", "Kitchen supplies", "Groceries", "Cleaning supplies", "Office supplies", "Remodeling", "Paint bedroom", "Paint wall", "Fitness", "Decorate living room",
                "Fix lights", "Fix front door", "Clean kitchen"];
            var firstNames = [
                "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
            ];
            var lastNames = [
                "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
            ];
            row["id"] = generatekey();
            row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
            row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
            row["name"] = row["firstname"] + " " + row["lastname"];
            var taskindex = Math.floor(Math.random() * tasks.length);
            row["task"] = tasks[taskindex];
            row["duration"] = 1 + Math.floor(Math.random() * 10);
            data.push(row);
        }
        return data;
    };
    // Create Tree Grid
    //// initialization options - validated in typescript
    //// jqwidgets.TreeGridOptions has generated TS definition
    var options = {
        width: 850,
        pageable: true,
        altRows: true,
        virtualModeCreateRecords: function (expandedRecord, done) {
            // expandedRecord is equal to null when the function is initially called, because there is still no record to be expanded.
            // prepare the data
            var source = {
                dataType: "array",
                dataFields: [
                    { name: "id", type: "string" },
                    { name: "name", type: "string" },
                    { name: "duration", type: "number" },
                    { name: "task", type: "number" }
                ],
                localData: expandedRecord === null ? generateTasks(3000) : generateTasks(''),
                id: 'id'
            };
            var dataAdapter = new $.jqx.dataAdapter(source, {
                loadComplete: function () {
                    done(dataAdapter.records);
                }
            });
            dataAdapter.dataBind();
        },
        virtualModeRecordCreating: function (record) {
            if (record.level == 2) {
                // by setting the record's leaf member to true, you will define the record as a leaf node.
                record.leaf = true;
            }
        },
        columns: [
            { text: 'Task', dataField: "task", align: 'center', width: 300 },
            { text: 'Person Name', dataField: "name", cellsAlign: 'center', align: 'center', width: 300 },
            {
                text: 'Duration', aggregates: ['sum'], dataField: "duration", cellsAlign: 'center', align: 'center', cellsRenderer: function (row, column, value) {
                    var hour = value > 1 ? " hours" : " hour";
                    return value + hour;
                }
            }
        ]
    };
    // creates an instance
    var myTreeGrid = jqwidgets.createInstance(selector, 'jqxTreeGrid', options);
}
//# sourceMappingURL=typescript-treegrid-virtualmode.js.map