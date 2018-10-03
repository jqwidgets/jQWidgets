<template>
    <div>
        <JqxGrid ref="myGrid"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :filterable="true" :selectionmode="'multiplecellsextended'" :showfilterrow="true">
        </JqxGrid>

        <br />

        <JqxButton @click="clearFiltering()"
                   :width="120" :height="22">
            Remove Filter
        </JqxButton>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxGrid,
            JqxButton
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
                    { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
                    { text: 'Available', datafield: 'available', columntype: 'checkbox', filtertype: 'bool', width: 67 },
                    { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
                    { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
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
        },
        methods: {
            clearFiltering: function () {
                this.$refs.myGrid.clearfilters();
            }
        }
    }
</script>

<style>
</style>