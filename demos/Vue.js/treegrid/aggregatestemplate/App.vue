<template>
    <JqxTreeGrid ref="treeGrid"
                 :width="getWidth"
                 :source="dataAdapter"
                 :altRows="true"
                 :showSubAggregates="true"
                 :columnsResize="true"
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
                dataAdapter: new jqx.dataAdapter(this.source, {
                    loadComplete: () => {}
                }),
                columns: [
                    { text: 'Name', align: 'center', dataField: 'name', width: 300 },
                    { text: 'Location', dataField: 'location', cellsAlign: 'center', align: 'center', width: 250 },
                    {
                        text: 'Budget', cellsAlign: 'center', align: 'center', dataField: 'budget', cellsFormat: 'c2',
                        aggregates: ['sum'],
                        aggregatesRenderer: (aggregatesText, column, element, aggregates, type) => {
                            let renderString = '';
                            if (type == 'aggregates') {
                                renderString = '<div style="margin: 4px; float: right;  height: 100%;">';
                            }
                            else {
                                renderString = '<div style="float: right;  height: 100%;">';
                            }
                            let euro = this.dataAdapter.formatNumber(0.74 * aggregates.sum, 'f2');
                            let usd = this.dataAdapter.formatNumber(aggregates.sum, 'f2');
                            renderString += "<table><tr><td rowspan='2'><strong>Total: </strong></td><td>" + usd + " USD</td><tr><td>" + euro + " EUR</td></tr></table>";
                            return renderString;
                        }
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
            ready: function () {
                this.$refs.treeGrid.expandRow(1);
                this.$refs.treeGrid.expandRow(2);
            }
        }
    }
</script>

<style>
</style>