<template>
    <JqxDataTable :width="getWidth" :height="400" :source="dataAdapter" :columns="columns"
                  :altRows="true" :pageable="true" :editable="true" :columnsResize="true"
                  :showAggregates="true" :autoRowHeight="true" :aggregatesHeight="70">
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
                    { text: 'Supplier Name', cellsAlign: 'center', align: 'center', dataField: 'SupplierName', width: 300 },
                    { text: 'Product', cellsAlign: 'center', align: 'center', dataField: 'ProductName', width: 300 },
                    { text: 'Quantity', dataField: 'Quantity', cellsFormat: 'd2', aggregates: ['avg', 'min', 'max'], cellsAlign: 'center', align: 'center', width: 120 },
                    { text: 'Price', dataField: 'Price', cellsFormat: 'c2', align: 'center', cellsAlign: 'center', aggregates: ['sum', 'min', 'max'] }
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
        }
    };
</script>

<style>
</style>