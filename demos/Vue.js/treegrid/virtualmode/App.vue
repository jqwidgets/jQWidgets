<template>
    <JqxTreeGrid ref="myTreeGrid"
        :width="width"
        :pageable="true"
        :altRows="true"
        :virtualModeCreateRecords="virtualModeCreateRecords"
        :virtualModeRecordCreating="virtualModeRecordCreating"
        :columns="columns">
    </JqxTreeGrid>
</template>

<script>
    import JqxTreeGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtreegrid.vue';

    export default {
        components: {
            JqxTreeGrid
        },
        data: function () {
            return {
                width: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Task', dataField: "task", align: 'center', width: 300 },
                    { text: 'Person Name', dataField: "name", cellsAlign: 'center', align: 'center', width: 300 },
                    {
                        text: 'Duration', aggregates: ['sum'], dataField: "duration", cellsAlign: 'center', align: 'center', 
                        cellsRenderer: (row, column, value) => {
                            let hour = value > 1 ? " hours" : " hour";
                            return value + hour;
                        }
                    }
                ]
            }
        },        
        beforeCreate: function () {
            this.source = {
                dataType: "tab",
                dataFields: [
                    { name: "Id", type: "number" },
                    { name: "Name", type: "string" },
                    { name: "ParentID", type: "number" },
                    { name: "Population", type: "number" }
                ],
                hierarchy:
                {
                    keyDataField: { name: 'Id' },
                    parentDataField: { name: 'ParentID' }
                },
                id: 'Id',
                url: 'locations.tsv'
            };                  
        },
        methods: {
            generateTasks: function(rowsCount) {
                let rowsCountData = !rowsCount ? 1 + Math.floor(Math.random() * 5) : rowsCount;
                let data = new Array();
                let generatekey = () => {
                    let S4 = () => {
                        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                    };
                    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
                };
                for (let i = 0; i < rowsCountData; i++) {
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
            },
            virtualModeCreateRecords: function (expandedRecord, done) {
                // expandedRecord is equal to null when the function is initially called, because there is still no record to be expanded.
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
                    localData: expandedRecord === null ? this.generateTasks(3000) : this.generateTasks(),
                    id: 'id'
                }
                let dataAdapter = new $.jqx.dataAdapter(source, {
                    loadComplete: () => {
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
            }
        }
    }
</script>

<style>
</style>
