<template>
    <JqxDataTable :width="getWidth" :source="source" :columns="columns"
                  :pageable="true" :altRows="true" :pagerMode="'advanced'">
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
                source: {
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
                },
                columns: [
                    { text: 'Name', dataField: 'firstname', width: 150 },
                    { text: 'Last Name', dataField: 'lastname', width: 150 },
                    { text: 'Product', editable: false, dataField: 'productname', width: 250 },
                    { text: 'Quantity', dataField: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', dataField: 'price', width: 80, cellsalign: 'right', cellsFormat: 'c2' },
                    { text: 'Total', dataField: 'total', cellsalign: 'right', cellsFormat: 'c2' }
                ]
            }
        }
    };
</script>

<style>
</style>