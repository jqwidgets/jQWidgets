<template>
    <JqxDataTable :width="getWidth" :height="400" :source="dataAdapter" :columns="columns"
                  :altRows="true" :pageable="true" :filterable="true"
                  :pagerButtonsCount="10" :filterMode="'simple'">
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
                    { text: 'Supplier Name', cellsAlign: 'center', align: 'center', dataField: 'SupplierName', width: 250 },
                    { text: 'Name', columngroup: 'ProductDetails', cellsAlign: 'center', align: 'center', dataField: 'ProductName', width: 250 },
                    { text: 'Quantity', columngroup: 'ProductDetails', dataField: 'Quantity', cellsformat: 'd', cellsAlign: 'center', align: 'center', width: 80 },
                    { text: 'Price', columngroup: 'ProductDetails', dataField: 'Price', cellsformat: 'c2', align: 'center', cellsAlign: 'center', width: 70 },
                    { text: 'Address', columngroup: 'Location', cellsAlign: 'center', align: 'center', dataField: 'Address', width: 120 },
                    { text: 'City', columngroup: 'Location', cellsAlign: 'center', align: 'center', dataField: 'City' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'xml',
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