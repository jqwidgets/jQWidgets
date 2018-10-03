<template>
    <JqxDataTable :width="getWidth" :source="dataAdapter" :columns="columns"
                  :columnsResize="true" :pageable="true" :pagerButtonsCount="10">
    </JqxDataTable>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";

    export default {
        components: {
            JqxDataTable
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Name', dataField: 'firstname', width: 200 },
                    { text: 'Last Name', dataField: 'lastname', width: 200 },
                    { text: 'Product', editable: false, dataField: 'productname', width: 180 },
                    { text: 'Quantity', dataField: 'quantity', width: 80, cellsAlign: 'right', align: 'right' },
                    { text: 'Unit Price', dataField: 'price', width: 90, cellsAlign: 'right', align: 'right', cellsFormat: 'c2' },
                    { text: 'Total', dataField: 'total', cellsAlign: 'right', align: 'right', cellsFormat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localData: generateData(200),
                dataType: 'array',
                dataFields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'total', type: 'number' }
                    ]
            };
        }
    };
</script>

<style>
</style>