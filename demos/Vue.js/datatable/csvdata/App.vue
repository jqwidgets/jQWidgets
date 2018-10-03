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
                    { text: 'Date', dataField: 'Date', cellsFormat: 'D', width: 250 },
                    { text: 'S&P 500', dataField: 'S&P 500', width: 300, cellsFormat: 'f' },
                    { text: 'NASDAQ', dataField: 'NASDAQ', cellsFormat: 'f' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                dataType: 'csv',
                dataFields: [
                    { name: 'Date', type: 'date' },
                    { name: 'S&P 500', type: 'float' },
                    { name: 'NASDAQ', type: 'float' }
                ],
                url: 'nasdaq_vs_sp500.txt'
            };
        }
    };
</script>

<style>
</style>