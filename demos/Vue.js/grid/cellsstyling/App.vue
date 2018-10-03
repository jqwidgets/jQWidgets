<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">

        <JqxGrid :width="getWidth" :source="dataAdapter" :pageable="true"
                 :autoheight="true" :sortable="true" :altrows="true"
                 :enabletooltips="true" :editable="true"
                 :columns="columns" :selectionmode="'multiplecellsadvanced'">
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
                    { text: 'Product Name', datafield: 'ProductName', width: 250 },
                    { text: 'Quantity per Unit', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right', width: 120 },
                    { text: 'Unit Price', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2', width: 100 },
                    { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellclassname: this.cellClass, width: 100 },
                    { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued' }
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
            cellClass: function (row, columnfield, value) {
                if (value < 20) {
                    return 'red';
                }
                else if (value >= 20 && value < 50) {
                    return 'yellow';
                }
                else return 'green';
            }
        }
    }
</script>

<style>
    .green {
        color: black\9;
        background-color: #b6ff00\9;
    }

    .yellow {
        color: black\9;
        background-color: yellow\9;
    }

    .red {
        color: black\9;
        background-color: #e83636\9;
    }

    .green:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected), .jqx-widget .green:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected) {
        color: black;
        background-color: #b6ff00;
    }

    .yellow:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected), .jqx-widget .yellow:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected) {
        color: black;
        background-color: yellow;
    }

    .red:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected), .jqx-widget .red:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected) {
        color: black;
        background-color: #e83636;
    }
</style>