<template>
    <JqxDataTable :width="getWidth" :source="dataAdapter" :columns="columns"
                  :altRows="true" :pageable="true" :sortable="true">
    </JqxDataTable>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";
    import JqxListBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue";

    export default {
        components: {
            JqxDataTable,
            JqxListBox
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Name', dataField: 'firstname', width: 200 },
                    { text: 'Last Name', dataField: 'lastname', width: 200 },
                    { text: 'Product', editable: false, dataField: 'productname', width: 180 },
                    { text: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsalign: 'right' },
                    { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsalign: 'right', cellsFormat: 'c2' },
                    { text: 'Total', dataField: 'total', width: 100, align: 'right', cellsalign: 'right', cellsFormat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(85, false),
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
        }
    };
</script>

<style>
</style>