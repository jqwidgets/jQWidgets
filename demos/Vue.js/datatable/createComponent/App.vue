<template>
    <JqxDataTable ref="myDataTable" :autoCreate="false"></JqxDataTable>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";

    export default {
        components: {
            JqxDataTable
        },
        mounted: function () {

            const source = {
                localdata: generatedata(20, false),
                datatype: 'array',
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'total', type: 'number' }
                    ],
                sortcolumn: 'firstname',
                sortdirection: 'asc'
            };

            const dataAdapter = new jqx.dataAdapter(source);

            this.settings =
                {
                    width: '90%',
                    source: dataAdapter,
                    altRows: true,
                    sortable: true,
                    editable: true,
                    selectionMode: 'singleRow',
                    columns: [
                        { text: 'Name', dataField: 'firstname', width: 200 },
                        { text: 'Last Name', dataField: 'lastname', width: 200 },
                        { text: 'Product', editable: false, dataField: 'productname', width: 180 },
                        { text: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsAlign: 'right' },
                        { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
                        { text: 'Total', dataField: 'total', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
                    ]
                }

            this.$refs.myDataTable.createComponent(this.settings);
        }
    };
</script>

<style>
</style>