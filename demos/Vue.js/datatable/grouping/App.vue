<template>
    <JqxDataTable :width="getWidth" :source="dataAdapter" :columns="columns"
                  :altRows="true" :pageable="true" :sortable="true"
                  :groups="['SupplierName']" :groupsRenderer="groupsRenderer">
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
                    { text: 'Supplier Name', hidden: true, cellsAlign: 'left', align: 'left', dataField: 'SupplierName', width: 280 },
                    { text: 'Product Name', cellsAlign: 'left', align: 'left', dataField: 'ProductName', width: 250 },
                    { text: 'Quantity', dataField: 'Quantity', cellsformat: 'd', cellsAlign: 'right', align: 'right', width: 80 },
                    { text: 'Price', dataField: 'Price', cellsformat: 'c2', align: 'right', cellsAlign: 'right', width: 70 },
                    { text: 'Address', cellsAlign: 'center', align: 'center', dataField: 'Address', width: 250 },
                    { text: 'City', cellsAlign: 'center', align: 'center', dataField: 'City' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                dataType: 'xml',
                dataFields: [
                    { name: 'SupplierName', type: 'string' },
                    { name: 'Quantity', type: 'number' },
                    { name: 'OrderDate', type: 'date' },
                    { name: 'OrderAddress', type: 'string' },
                    { name: 'Freight', type: 'number' },
                    { name: 'Price', type: 'number' },
                    { name: 'City', type: 'string' },
                    { name: 'ProductName', type: 'string' },
                    { name: 'Address', type: 'string' }
                ],
                url: 'orderdetailsextended.xml',
                root: 'DATA',
                record: 'ROW'
            };
        },
        methods: {
            groupsRenderer: function (value, rowData, level) {
                return 'Supplier Name: ' + value;
            }
        }
    };
</script>

<style>
</style>