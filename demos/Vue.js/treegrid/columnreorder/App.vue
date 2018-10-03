<template>
        <JqxTreeGrid ref="myTreeGrid"
            :width="width"
            :columnsReorder="true"
            :altRows="true"
            :ready="ready"
            :columns="columns"
            :source="dataAdapter">
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
                    { text: "Name", dataField: "name", width: 250 },
                    { text: "Budget", dataField: "budget", cellsFormat: "c2", width: 250 },
                    { text: "Location", dataField: "location" }                
                ]
            }
        },        
        beforeCreate: function () {
            let data = [
               {
                    "id": "1", "name": "Corporate Headquarters", "budget": "1230000", "location": "Las Vegas",
                    "children":
                    [
                        {
                            "id": "2", "name": "Finance Division", "budget": "423000", "location": "San Antonio",
                            "children":
                            [
                                { "id": "3", "name": "Accounting Department", "budget": "113000", "location": "San Antonio" },
                                {
                                    "id": "4", "name": "Investment Department", "budget": "310000", "location": "San Antonio",
                                    "children":
                                    [
                                        { "id": "5", "name": "Banking Office", "budget": "240000", "location": "San Antonio" },
                                        { "id": "6", "name": "Bonds Office", "budget": "70000", "location": "San Antonio" },
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "7", "name": "Operations Division", "budget": "600000", "location": "Miami",
                            "children":
                            [
                                { "id": "8", "name": "Manufacturing Department", "budget": "300000", "location": "Miami" },
                                { "id": "9", "name": "Public Relations Department", "budget": "200000", "location": "Miami" },
                                { "id": "10", "name": "Sales Department", "budget": "100000", "location": "Miami" }
                            ]
                        },
                        { "id": "11", "name": "Research Division", "budget": "200000", "location": "Boston" }
                    ]
                }
            ];
            // prepare the data
            this.source = {
                dataType: "json",
                dataFields: [
                    { name: "name", type: "string" },
                    { name: "budget", type: "number" },
                    { name: "id", type: "number" },
                    { name: "children", type: "array" },
                    { name: "location", type: "string" }
                ],
                hierarchy:
                    {
                        root: "children"
                    },
                localData: data,
                id: "id"
            };            
        },
        methods: {
            ready: function () {
                this.$refs.myTreeGrid.expandRow(1);
                this.$refs.myTreeGrid.expandRow(2);
            }
        }
    }
</script>

<style>
</style>
