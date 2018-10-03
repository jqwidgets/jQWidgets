<template>
    <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns"
             :columnsresize="true">
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
                    {
                        text: '#', sortable: false, filterable: false, editable: false,
                        groupable: false, draggable: false, resizable: false,
                        datafield: '', columntype: 'number', width: 50,
                        cellsrenderer: (row, column, value) => {
                            return '<div style="margin: 4px;">' + (value + 1) + '</div>';
                        }
                    },
                    { text: 'Name', datafield: 'firstname', width: 120 },
                    { text: 'Last Name', datafield: 'lastname', width: 120 },
                    { text: 'Product', datafield: 'productname', width: 180 },
                    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(200),
                datatype: 'array',
                datafields: [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ]
            };
        }
    }
</script>

<style>
</style>