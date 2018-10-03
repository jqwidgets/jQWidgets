<template>
        <JqxTreeGrid ref="treeGrid"
                     :width="getWidth"
                     :source="dataAdapter"
                     :altRows="true"                  
                     :enableHover="false"
                     :editable="true"
                     :selectionMode="'none'"
                     :columns="columns"
                     :ready="ready">
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
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'ID', dataField: 'id', width: 150 },
                    { text: 'Name', dataField: 'name', width: 270 },
                    { text: 'Location', dataField: 'location' },
                    {
                        text: 'Budget', align: 'right', cellsRenderer: this.cellsRendererFunction,
                        cellsAlign: 'right', cellClassName: 'conditionalFormatting', cellsFormat: 'c2',
                        dataField: 'budget', width: 200
                    }
                ]
            }
        },
        beforeCreate: function () {

            const data = [{
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
            }];

            this.source = {
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
                localData: data,
                id: 'id'
            };
        },
        methods: {
            cellsRendererFunction: function (row, dataField, cellValueInternal, rowData, cellText) {
                let cellValue = rowData[dataField];
                if (cellValue < 400000) {
                    return "<span style='color: #e91b1b;'>" + cellText + "</span><span class='red-arrow-down'></span>";
                }

                return "<span style='color: #028b2b;'>" + cellText + "</span><span class='green-arrow-up'></span>";
            },
            ready: function () {
                this.$refs.treeGrid.expandRow(1);
                this.$refs.treeGrid.expandRow(2);
                this.$refs.treeGrid.expandRow(7);
            }
        }
    }
</script>

<style>
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
    }

    .green-arrow-up {
        position: relative;
        top: -10px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid #028b2b;
    }

    .red-arrow-down {
        position: relative;
        top: 10px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #e91b1b;
    }

    .conditionalFormatting {
        background: white !important;
    }
</style>