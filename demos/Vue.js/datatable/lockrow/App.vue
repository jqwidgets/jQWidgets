<template>
    <JqxDataTable ref="myDataTable" @bindingComplete="tableOnBindingComplete()"
                  :width="getWidth" :source="dataAdapter" :columns="columns"
                  :pageable="true" :editable="true" :filterable="true"
                  :altRows="true" :pagerButtonsCount="8">
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
                    { text: 'Order ID', editable: false, dataField: 'OrderID', width: 250 },
                    { text: 'Freight', dataField: 'Freight', cellsFormat: 'f2', cellsAlign: 'right', align: 'right', width: 250 },
                    { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                    { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                dataFields:
                    [
                        { name: 'OrderID', type: 'int' },
                        { name: 'Freight', type: 'float' },
                        { name: 'ShipName', type: 'string' },
                        { name: 'ShipAddress', type: 'string' },
                        { name: 'ShipCity', type: 'string' },
                        { name: 'ShipCountry', type: 'string' },
                        { name: 'ShippedDate', type: 'date' }
                    ],
                root: 'Orders',
                record: 'Order',
                dataType: 'xml',
                id: 'OrderID',
                url: 'orderdetails.xml',
            }
        },
        methods: {
            tableOnBindingComplete: function () {
                this.$refs.myDataTable.beginUpdate();
                this.$refs.myDataTable.lockRow(1);
                this.$refs.myDataTable.lockRow(3);
                this.$refs.myDataTable.lockRow(5);
                this.$refs.myDataTable.endUpdate();
            }
        }
    };
</script>

<style>
</style>