<template>
    <JqxGrid
             :width="getWidth" :source="dataAdapter" :columns="columns"
             :filterable="true" :showeverpresentrow="true" :editable="true"
             :everpresentrowposition="'top'" :localization="localization"
             :selectionmode="'singlecell'">
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
                        text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215,
                        validateEverPresentRowWidgetValue: (displayField, value, rowData) => {
                            if (value.length < 5) {
                                return { message: 'Entered value should be more than 5 characters', result: false };
                            }
                            return true;
                        }
                    },
                    { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
                    { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
                    { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
                ],
                localization: {
                    addrowstring: 'Apply',
                    udpaterowstring: 'Update',
                    deleterowstring: 'Delete',
                    resetrowstring: 'Clear',
                    everpresentrowplaceholder: 'Type: '
                }
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