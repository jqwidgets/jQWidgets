<template>
    <div>
        <JqxGrid ref="myGrid"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :filterable="true" :showeverpresentrow="true" :editable="true"
                 :showfilterrow="true" :everpresentrowposition="'top'" 
                 :selectionmode="'multiplecellsadvanced'">
        </JqxGrid>
        <br />
        <JqxRadioButton @checked="topBtnOnChecked()" :checked="true">Top Position</JqxRadioButton>
        <JqxRadioButton @checked="topAboveFilterRowBtnOnChecked()">Top Position Above Filter Row</JqxRadioButton>
        <JqxRadioButton @checked="bottomBtnOnChecked()">Bottom Position</JqxRadioButton>
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
            topBtnOnChecked: function() {
                this.$refs.myGrid.everpresentrowposition = 'top';
            },
            topAboveFilterRowBtnOnChecked: function () {
                this.$refs.myGrid.everpresentrowposition = 'topAboveFilterRow';
            },
            bottomBtnOnChecked: function() {
                this.$refs.myGrid.everpresentrowposition = 'bottom';
            }
        }
    }
</script>

<style>
</style>