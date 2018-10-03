<template>
    <div>
        <JqxGrid ref="myGrid"
                 :width="getWidth" :source="dataAdapter" :filterable="true"
                 :showeverpresentrow="true" :everpresentrowposition="'top'"
                 :editable="true" :columns="columns"
                 :selectionmode="'multiplecellsadvanced'">
        </JqxGrid>

        <br />

        <JqxRadioButton @checked="btnTopOnChecked()" :checked="true">Add New Row to Top</JqxRadioButton>

        <JqxRadioButton @checked="btnBottomOnChecked()">Add New Row to Bottom</JqxRadioButton>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxRadioButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue";

    export default {
        components: {
            JqxGrid,
            JqxRadioButton
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
                    { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
                    { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
                    { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(20, false),
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
            btnTopOnChecked: function() {
                this.$refs.myGrid.everpresentrowactions = 'add reset';
            },
            btnBottomOnChecked: function() {
                this.$refs.myGrid.everpresentrowactions = 'addBottom reset';
            }
        }
    }
</script>

<style>
</style>