<template>
    <JqxTreeGrid ref="treeGrid"
                 :width="getWidth"
                 :source="dataAdapter"
                 :sortable="true"
                 :pageable="true"
                 :pagerMode="'advanced'"
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
                    { text: 'Order Name', dataField: 'name', align: 'center', width: 250 },
                    { text: 'Customer', dataField: 'customer', align: 'center', width: 250 },
                    { text: 'Price', dataField: 'price', cellsFormat: 'c2', align: 'center', cellsAlign: 'right', width: 80 },
                    {
                        text: 'Order Date', dataField: 'date', align: 'center', cellsFormat: 'dd-MMMM-yyyy hh:mm',
                        cellsRenderer: (rowKey, column, cellValue, rowData, cellText) => {
                            if (rowData.level === 0) {
                                return this.dataAdapter.formatDate(cellValue, 'dd-MMMM-yyyy');
                            }
                            return cellText;
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {

            this.source = {
                dataType: 'array',
                dataFields: [
                    { name: 'name', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'id', type: 'number' },
                    { name: 'parentid', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'date', type: 'date' },
                    { name: 'customer', type: 'string' }
                ],
                hierarchy:
                    {
                        keyDataField: { name: 'id' },
                        parentDataField: { name: 'parentid' }
                    },
                id: 'id',
                localData: generateordersdata(10)
            };
        },
        methods: {
            ready: function () {
                this.$refs.treeGrid.expandRow(2);
            }
        }
    }
</script>

<style>
</style>