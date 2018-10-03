<template>
    <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns" :columnsresize="true">
    </JqxGrid>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";

    export default {
        components: {
            JqxGrid
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Date', datafield: 'Date', cellsformat: 'D', width: 250 },
                    { text: 'S&P 500', datafield: 'S&P 500', width: 300, cellsformat: 'f' },
                    { text: 'NASDAQ', datafield: 'NASDAQ', cellsformat: 'f' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: "csv",
                datafields: [
                    { name: 'Date', type: 'date' },
                    { name: 'S&P 500', type: 'float' },
                    { name: 'NASDAQ', type: 'float' }
                ],
                url: 'nasdaq_vs_sp500.txt'
            };
        }
    }
</script>

<style>
</style>