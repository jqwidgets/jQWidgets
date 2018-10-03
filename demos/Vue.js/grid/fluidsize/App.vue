<template>
    <JqxGrid :width="'100%'" :height="'90%'" :source="dataAdapter" :columns="columns"
             :showfilterrow="true" :filterable="true" :selectionmode="'multiplecellsadvanced'">
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
                    { text: 'Name', columntype: 'textbox', datafield: 'name', width: '20%' },
                    { text: 'Product', datafield: 'productname', width: '35%' },
                    { text: 'Ship Date', datafield: 'date', filtertype: 'date', width: '30%', cellsalign: 'right', cellsformat: 'd' },
                    { text: 'Qty.', datafield: 'quantity', width: '15%', cellsalign: 'right' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(500, false),
                datafields:
                    [
                        { name: 'name', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'available', type: 'bool' },
                        { name: 'date', type: 'date' },
                        { name: 'quantity', type: 'number' }
                    ],
                datatype: 'array'
            };
        }
    }
</script>

<style>
    body, html {
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 0px;
        margin: 0;
    }
</style>