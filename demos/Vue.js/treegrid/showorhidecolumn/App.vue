<template>
    <div>
        <JqxListBox style="float: left;"
            @checkChange="checkChange($event)"
            :width="120"
            :height="200"
            :checkboxes="true"
            :source="listSource">
        </JqxListBox>

        <JqxTreeGrid ref="myTreeGrid" style="margin-left: 20px; float: left;"
            :showHeader="true"
            :altRows="true"
            :ready="ready"
            :columns="columns"
            :source="dataAdapter">
        </JqxTreeGrid>
    </div>
</template>

<script>
    import JqxTreeGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtreegrid.vue';
    import JqxListBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue';
    
    export default {
        components: {
            JqxTreeGrid,
            JqxListBox
        },
        data: function () {
            return {
                listSource: [{ label: 'Budget', value: 'budget', checked: true }, { label: 'Location', value: 'location', checked: false }],
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: "Name",  align: "center", dataField: "name", width: 240 },
                    { text: "Budget", cellsAlign: "center", align: "center", dataField: "budget", cellsFormat: "c2", width: 200 },
                    { text: "Location", dataField: "location", cellsAlign: "center", align: "center", hidden: true, width: 200 }                
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
            },
            checkChange: function (event) {
                this.$refs.myTreeGrid.beginUpdate();
                if (event.args.checked) {
                    this.$refs.myTreeGrid.showColumn(event.args.value);
                }
                else {
                    this.$refs.myTreeGrid.hideColumn(event.args.value);
                }

                this.$refs.myTreeGrid.endUpdate();
            }
        }
    }
</script>

<style>
</style>
