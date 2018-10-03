<template>
    <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns"
             :pageable="true" :autoheight="true" :sortable="true"
             :altrows="true" :enabletooltip="true" :editable="true"
             :selectionmode="'multiplecellsadvanced'" :columngroups="columngroups">
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
                    { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
                    { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right' },
                    { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: this.cellsrenderer, width: 100 },
                    { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued', align: 'center' }
                ],
                columngroups: [
                    { text: 'Product Details', align: 'center', name: 'ProductDetails' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'xml',
                datafields: [
                    { name: 'ProductName', type: 'string' },
                    { name: 'QuantityPerUnit', type: 'int' },
                    { name: 'UnitPrice', type: 'float' },
                    { name: 'UnitsInStock', type: 'float' },
                    { name: 'Discontinued', type: 'bool' }
                ],
                root: 'Products',
                record: 'Product',
                id: 'ProductID',
                url: 'products.xml'
            };
        },
        methods: {
            cellsrenderer: function (row, columnsfield, value, defaulthtml, columnproperties, rowdata) {
                if (value < 20) {
                    return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
                }
                else {
                    return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
                }
            }
        }
    }
</script>

<style>
</style>