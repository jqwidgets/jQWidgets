<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">

        <JqxGrid :width="getWidth" :source="dataAdapter" :editable="true" :columns="columns">
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
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', editable: false, datafield: 'firstname', width: 120 },
                    { text: 'Last Name', editable: false, datafield: 'lastname', width: 120 },
                    { text: 'Product', editable: false, datafield: 'productname', width: 180 },
                    { text: 'Available', datafield: 'available', threestatecheckbox: true, columntype: 'checkbox', width: 70 },
                    { text: 'Quantity', editable: false, datafield: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', editable: false, datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Total', editable: false, datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(200, true),
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'available', type: 'bool' },
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