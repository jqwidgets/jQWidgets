<template>
    <JqxTreeGrid ref="treeGrid"
                 :width="getWidth"
                 :source="dataAdapter"
                 :editable="true"
                 :altRows="true"
                 :autoRowHeight="true"
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
                    { text: 'ID', editable: false, columnType: 'none', dataField: 'id', width: 150 },
                    {
                        text: 'Name', dataField: 'name', width: 270,
                        validation: (cell, value) => {
                            if (value.toString().length < 4) {
                                return { message: 'Name should be minimum 4 characters', result: false };
                            }

                            return true;
                        }
                    },
                    {
                        text: 'Budget', align: 'right', cellsAlign: 'right', cellsFormat: 'c2', dataField: 'budget', width: 200,
                        validation: (cell, value) => {
                            if (parseInt(value) < 0 || parseInt(value) > 1300000 || value == '') {
                                return { message: 'Budget should be in the 0-1 300 000 interval', result: false };
                            }

                            return true;
                        }
                    },
                    {
                        text: 'Location', dataField: 'location',
                        validation: (cell, value) => {
                            if (value.toString().length < 4) {
                                return { message: 'Location should be minimum 4 characters', result: false };
                            }

                            return true;
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {

            const data = [
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
                this.$refs.treeGrid.expandRow(7);
            }
        }
    }
</script>

<style>
</style>