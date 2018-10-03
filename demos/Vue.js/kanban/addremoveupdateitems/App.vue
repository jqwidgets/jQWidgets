<template>
    <div>
        <JqxKanban ref="myKanban"
                   :width="getWidth" :height="500" :source="dataAdapter"
                   :columns="columns" :resources="resourcesAdapterFunc()">
        </JqxKanban>

        <br />

        <JqxButton @click="addItemBtnOnClick()">Add Item</JqxButton>
        <JqxButton ref="myRemoveItemBtn" @click="removeItemBtnOnClick()">Remove Item</JqxButton>
        <JqxButton ref="myUpdateItemBtn" @click="updateItemBtnOnClick()">Update Item</JqxButton>

    </div>
</template>

<script>
    import JqxKanban from "jqwidgets-scripts/jqwidgets-vue/vue_jqxkanban.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxKanban,
            JqxButton
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Backlog', dataField: 'new', maxItems: 5 },
                    { text: 'In Progress', dataField: 'work', maxItems: 5 },
                    { text: 'Done', dataField: 'done', maxItems: 5, collapseDirection: 'right' }
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
                    { id: '1161', state: 'new', label: 'Combine Orders', tags: 'orders, combine', hex: '#5dc3f0', resourceId: 3 },
                    { id: '1645', state: 'work', label: 'Change Billing Address', tags: 'billing', hex: '#f19b60', resourceId: 1 },
                    { id: '9213', state: 'new', label: 'One item added to the cart', tags: 'cart', hex: '#5dc3f0', resourceId: 3 },
                    { id: '6546', state: 'done', label: 'Edit Item Price', tags: 'price, edit', hex: '#5dc3f0', resourceId: 4 },
                    { id: '9034', state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#6bbd49' }
                ],
                dataType: 'array',
                dataFields: fields
            }

            this.newItemsCount = 0;
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
            },
            addItemBtnOnClick: function() {
                this.$refs.myKanban.addItem({ status: 'new', text: 'Task' + this.newItemsCount, tags: 'task' + this.newItemsCount, color: '#5dc3f0' });
                this.newItemsCount++;
            },
            removeItemBtnOnClick: function () {
                this.$refs.myKanban.removeItem('1645');
                this.$refs.myRemoveItemBtn.disabled = true;
            },
            updateItemBtnOnClick: function () {
                this.$refs.myKanban.updateItem('1161', { status: 'new', text: 'Task', tags: 'task', color: '#5dc3f0', resourceId: 3 });
                this.$refs.myUpdateItemBtn.disabled = true;
            }
        }
    }
</script>

<style>
    .jqx-button{
        display: inline-block;
        margin-right: 5px;
    }
</style>