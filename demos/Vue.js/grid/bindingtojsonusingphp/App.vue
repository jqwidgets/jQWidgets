<template>
    <div style="font-size: 13px; font-family: Verdana; float: left;">
        <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns" :columnsresize="true">
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
                    { text: 'First Name', dataField: 'firstname', width: 200 },
                    { text: 'Last Name', dataField: 'lastname', width: 200 },
                    { text: 'Product', dataField: 'productname', width: 180 },
                    { text: 'Quantity', dataField: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', dataField: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Total', dataField: 'total', cellsalign: 'right', minwidth: 100, cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'json',
                datafields: [
                    { name: 'firstname' },
                    { name: 'lastname' },
                    { name: 'productname' },
                    { name: 'quantity', type: 'int' },
                    { name: 'price', type: 'float' },
                    { name: 'total', type: 'float' }
                ],
                id: 'id',
                url: 'data.php',
                root: 'data'
            };
        }
    }
</script>

<style>
</style>