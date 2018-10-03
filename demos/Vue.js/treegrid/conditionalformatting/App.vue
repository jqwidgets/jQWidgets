<template>
        <JqxTreeGrid ref="treeGrid"
                     :width="getWidth"
                     :source="dataAdapter"
                     :altRows="true"
                     :selectionMode="'none'"
                     :enableHover="false"
                     :editable="true"
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
                    { text: 'Name', dataField: 'name', width: 250 },
                    { text: 'Budget', align: 'right', cellClassName: this.cellClass, cellsAlign: 'right', cellsFormat: 'c2', dataField: 'budget', width: 200 },
                    { text: 'Location', dataField: 'location' }
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
            cellClass: function(row, dataField, cellText, rowData) {
                let cellValue = rowData[dataField];
                if (cellValue < 100000) {
                    return 'min';
                }
                if (cellValue < 200000) {
                    return 'minavg';
                }
                if (cellValue < 400000) {
                    return 'avg';
                }
                return 'max';
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

    .max:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected), .jqx-widget .max:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected) {
        color: black;
        background-color: #63be7b;
    }

    .avg:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected), .jqx-widget .avg:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected) {
        color: black;
        background-color: #f8e984;
    }

    .minavg:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected), .jqx-widget .minavg:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected) {
        color: black;
        background-color: #f9806f;
    }

    .min:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected), .jqx-widget .min:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected) {
        color: black;
        background-color: #f8696b;
    }
</style>