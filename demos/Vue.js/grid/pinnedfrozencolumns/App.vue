<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">
        <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns"
                 :sortable="true" :pageable="true" :autoheight="true">
        </JqxGrid>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";

    export default {
        components: {
            JqxGrid,
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Product Name', datafield: 'ProductName', width: 250, pinned: true },
                    { text: 'Category', datafield: 'CategoryID', width: 120, cellsalign: 'right' },
                    { text: 'Quantity Per Unit', datafield: 'QuantityPerUnit', width: 200, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'UnitPrice', width: 120, cellsformat: 'c2', cellsalign: 'right' },
                    { text: 'Units On Order', datafield: 'UnitsOnOrder', width: 120, cellsalign: 'right' },
                    { text: 'Reorder Level', datafield: 'ReorderLevel', width: 120, cellsalign: 'right' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'xml',
                datafields: [
                    { name: 'ProductName' },
                    { name: 'QuantityPerUnit' },
                    { name: 'UnitPrice', type: 'float' },
                    { name: 'UnitsInStock', type: 'float' },
                    { name: 'UnitsOnOrder', type: 'float' },
                    { name: 'ReorderLevel', type: 'float' },
                    { name: 'CategoryID', type: 'int' }
                ],
                root: 'Products',
                record: 'Product',
                id: 'ProductID',
                url: 'products.xml'
            };
        }
    }
</script>

<style>
</style>