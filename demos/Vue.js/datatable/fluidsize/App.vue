<template>
    <JqxDataTable :width="'100%'" :height="'100%'" :source="dataAdapter" :columns="columns"
                  :pageable="true" :columnsResize="true" :pagerButtonsCount="3" :pageSize="50">
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
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Name', dataField: 'firstname', width: '20%' },
                    { text: 'Last Name', dataField: 'lastname', width: '20%' },
                    { text: 'Product', editable: false, dataField: 'productname', width: '30%' },
                    { text: 'Quantity', dataField: 'quantity', width: '30%', cellsAlign: 'right', align: 'right' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localData: generateData(200),
                dataType: 'array',
                dataFields: [
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
    html, body {
        padding: 3px;
        box-sizing: border-box;
        margin: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
</style>