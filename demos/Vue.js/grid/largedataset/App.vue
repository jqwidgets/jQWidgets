<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">
        <JqxGrid :width="getWidth" :source="source" :columns="columns">
        </JqxGrid>
    </div>
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
                source: {
                    localdata: generatedata(30000),
                    datafields:
                        [
                            { name: 'id', type: 'number' },
                            { name: 'firstname', type: 'string' },
                            { name: 'lastname', type: 'string' },
                            { name: 'productname', type: 'string' },
                            { name: 'quantity', type: 'number' },
                            { name: 'price', type: 'number' },
                            { name: 'total', type: 'number' }
                        ],
                    datatype: 'array'
                },
                columns: [
                    { text: 'Id', datafield: 'id', width: 50 },
                    { text: 'First Name', datafield: 'firstname', width: 130 },
                    { text: 'Last Name', datafield: 'lastname', width: 130 },
                    { text: 'Product', datafield: 'productname', width: 180 },
                    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', width: 80, cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        }
    }
</script>

<style>
</style>