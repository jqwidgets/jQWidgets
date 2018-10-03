<template>
    <JqxDataTable :width="getWidth" :source="dataAdapter" :columns="columns"
                  :altRows="true" :pageable="true" :sortable="true" :rtl="true">
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
                    { text: 'Name', dataField: 'firstname', align: 'right', cellsAlign: 'right', width: 150 },
                    { text: 'Last Name', dataField: 'lastname', align: 'right', cellsAlign: 'right', width: 150 },
                    { text: 'Product', editable: false, dataField: 'productname', align: 'right', cellsAlign: 'right', width: 180 },
                    { text: 'Quantity', dataField: 'quantity', width: 180, cellsAlign: 'left', align: 'left' },
                    { text: 'Unit Price', dataField: 'price', width: 180, cellsAlign: 'left', align: 'left' },
                    { text: 'Total', dataField: 'total', width: 180, cellsAlign: 'left', align: 'left', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localData: generatedata(200, false),
                dataType: 'array',
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'total', type: 'number' }
                    ]
            }
        }
    };
</script>

<style>
</style>