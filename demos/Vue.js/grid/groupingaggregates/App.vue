<template>
    <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns"
             :groupable="true" :showgroupaggregates="true" :showstatusbar="true"
             :showaggregates="true" :statusbarheight="25"
             :selectionmode="'singlecell'" :groups="['price']">
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
                    { text: 'First Name', groupable: true, aggregates: ['count'], datafield: 'firstname', width: 100 },
                    { text: 'Last Name', groupable: true, aggregates: ['count'], datafield: 'lastname', width: 100 },
                    { text: 'Product', groupable: true, columntype: 'dropdownlist', datafield: 'productname', width: 200 },
                    { text: 'Quantity', datafield: 'quantity', aggregates: ['sum'], width: 70, cellsalign: 'right' },
                    { text: 'Price', datafield: 'price', aggregates: ['sum'], cellsalign: 'right', width: 100, cellsformat: 'c2' },
                    {
                        text: 'Total', datafield: 'total', aggregates: ['sum'], cellsalign: 'right', cellsformat: 'c2',
                        cellsrenderer: (row, column, value, defaultRender, rowData) => {
                            if (value.toString().indexOf('Sum') >= 0) {
                                return defaultRender.replace('Sum', 'Total');
                            }
                        },
                        aggregatesrenderer: (aggregates, column, element) => {
                            var renderstring = '<div style="position: relative; margin-top: 4px; margin-right:5px; text-align: right; overflow: hidden;">' + 'Total' + ': ' + aggregates.sum + '</div>';
                            return renderstring;
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(50, false),
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'date', type: 'date' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'total', type: 'number' }
                    ],
                datatype: 'array'
            };
        }
    }
</script>

<style>
</style>