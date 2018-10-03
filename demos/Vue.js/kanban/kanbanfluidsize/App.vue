<template>
    <JqxKanban :width="'100%'" :height="'100%'"
               :source="dataAdapter" :columns="columns"
               :resources="resourcesAdapterFunc()">
    </JqxKanban>
</template>
<script>
    import JqxKanban from "jqwidgets-scripts/jqwidgets-vue/vue_jqxkanban.vue";

    export default {
        components: {
            JqxKanban
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Backlog', dataField: 'new' },
                    { text: 'In Progress', dataField: 'work' },
                    { text: 'Done', dataField: 'done' }
                ]
            }
        },
        beforeCreate: function () {
            const fields = [
                { name: 'id', type: 'string' },
                { name: 'status', map: 'state', type: 'string' },
                { name: 'text', map: 'label', type: 'string' },
                { name: 'tags', type: 'string' },
                { name: 'color', map: 'hex', type: 'string' },
                { name: 'resourceId', type: 'number' }
            ];

            this.source = {
                localData: [
                    { id: '1161', state: 'new', label: 'Make a new Dashboard', tags: 'dashboard', hex: '#36c7d0', resourceId: 3 },
                    { id: '1645', state: 'work', label: 'Prepare new release', tags: 'release', hex: '#ff7878', resourceId: 1 },
                    { id: '9213', state: 'new', label: 'One item added to the cart', tags: 'cart', hex: '#96c443', resourceId: 3 },
                    { id: '6546', state: 'done', label: 'Edit Item Price', tags: 'price, edit', hex: '#ff7878', resourceId: 4 },
                    { id: '9034', state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#96c443' }
                ],
                dataType: 'array',
                dataFields: fields
            };
        },
        methods: {
            resourcesAdapterFunc: function () {
                let resourcesSource =
                    {
                        localData: [
                            { id: 0, name: 'No name', image: '../../../images/common.png', common: true },
                            { id: 1, name: 'Andrew Fuller', image: '../../../images/andrew.png' },
                            { id: 2, name: 'Janet Leverling', image: '../../../images/janet.png' },
                            { id: 3, name: 'Steven Buchanan', image: '../../../images/steven.png' },
                            { id: 4, name: 'Nancy Davolio', image: '../../../images/nancy.png' },
                            { id: 5, name: 'Michael Buchanan', image: '../../../images/Michael.png' },
                            { id: 6, name: 'Margaret Buchanan', image: '../../../images/margaret.png' },
                            { id: 7, name: 'Robert Buchanan', image: '../../../images/robert.png' },
                            { id: 8, name: 'Laura Buchanan', image: '../../../images/Laura.png' },
                            { id: 9, name: 'Laura Buchanan', image: '../../../images/Anne.png' }
                        ],
                        dataType: 'array',
                        dataFields: [
                            { name: 'id', type: 'number' },
                            { name: 'name', type: 'string' },
                            { name: 'image', type: 'string' },
                            { name: 'common', type: 'boolean' }
                        ]
                    };
                let resourcesDataAdapter = new jqx.dataAdapter(resourcesSource);
                return resourcesDataAdapter;
            }
        }
    }
</script>

<style>
    html, body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
