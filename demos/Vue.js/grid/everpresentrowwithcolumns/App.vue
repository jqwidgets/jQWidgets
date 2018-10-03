<template>
    <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns"
             :showeverpresentrow="true" :editable="true" :filterable="true"
             :everpresentrowposition="'top'" :everpresentrowactions="'add reset'"
             :everpresentrowactionsmode="'columns'">
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
                    { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
                    { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
                    { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
                    { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' },
                    { text: '', datafield: 'addButtonColumn', width: 50 },
                    { text: '', datafield: 'resetButtonColumn', width: 50 }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(10, false),
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
</style>