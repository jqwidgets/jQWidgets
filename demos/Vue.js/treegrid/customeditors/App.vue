<template>
    <JqxTreeGrid ref="myTreeGrid"
                 :width="getWidth"
                 :source="dataAdapter"
                 :altRows="true"
                 :autoRowHeight="true"
                 :editable="true"
                 :columns="columns"
                 :ready="ready">
    </JqxTreeGrid>
</template>

<script>
    import JqxTreeGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtreegrid.vue';
    import JqxSlider from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue';

    export default {
        components: {
            JqxTreeGrid
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'ID', editable: false, dataField: 'id', width: 150 },
                    {
                        text: 'Name', dataField: 'name', width: 250, columnType: 'template',
                        createEditor: (row, cellvalue, editor, cellText, width, height) => {
                            // construct the editor. 
                            let source = ['Corporate Headquarters', 'Finance Division', 'Accounting Department', 'Investment Department',
                                'Banking Office', 'Bonds Office', 'Operations Division', 'Manufacturing Department',
                                'Public Relations Department', 'Sales Department', 'Research Division'];
                            editor.jqxDropDownList({ autoDropDownHeight: true, source: source, width: '100%', height: '100%' });
                        },
                        initEditor: (row, cellvalue, editor, celltext, width, height) => {
                            // set the editor's current value. The callback is called each time the editor is displayed.
                            editor.jqxDropDownList('selectItem', cellvalue);
                        },
                        getEditorValue: (row, cellvalue, editor) => {
                            // return the editor's value.
                            return editor.val();
                        }
                    },
                    {
                        text: 'Budget', align: 'right', cellsAlign: 'right', cellsFormat: 'c2', columnType: 'template', dataField: 'budget', width: 200,
                        createEditor: (row, cellvalue, editor, cellText, width, height) => {
                            // construct the editor. 
                            editor.jqxSlider({
                                showTicks: false, min: 0, max: 1250000, width: width, height: height, tooltip: true, tooltipFormatFunction: (value) => {
                                    return jqx.formatNumber(value, 'c2');
                                }
                            });
                        },
                        initEditor: (row, cellvalue, editor, celltext, width, height) => {
                            // set the editor's current value. The callback is called each time the editor is displayed.
                            let value = parseInt(cellvalue);
                            if (isNaN(value)) value = 0;
                            editor.jqxSlider('setValue', value);
                        },
                        getEditorValue: (row, cellvalue, editor) => {
                            // return the editor's value.
                            return editor.val();
                        }
                    },
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
            ready: function () {
                this.$refs.myTreeGrid.expandRow(1);
                this.$refs.myTreeGrid.expandRow(2);
                this.$refs.myTreeGrid.expandRow(7);
            }
        }
    }
</script>

<style>
</style>