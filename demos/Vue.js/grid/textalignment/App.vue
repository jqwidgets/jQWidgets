<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">

        <JqxGrid ref="myGrid"
                 :width="getWidth" :source="dataAdapter" :columns="columns" :selectionmode="'multiplecellsadvanced'">
        </JqxGrid>

        <div>

            <h3>Alignment</h3>

            <JqxRadioButton style="float: left" @checked="leftBtnOnChecked()">Left</JqxRadioButton>

            <JqxRadioButton style="float: left" @checked="centerBtnOnChecked()" :checked="true">Center</JqxRadioButton>

            <JqxRadioButton style="float: left" @checked="rightBtnOnChecked()">Right</JqxRadioButton>

        </div>

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
                    { text: 'First Name', datafield: 'firstname', width: 200, cellsalign: 'center', align: 'center' },
                    { text: 'Last Name', datafield: 'lastname', width: 200, cellsalign: 'center', align: 'center' },
                    { text: 'Product', datafield: 'productname', width: 180, cellsalign: 'center', align: 'center' },
                    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'center', align: 'center' },
                    { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'center', align: 'center', cellsformat: 'c2' },
                    { text: 'Total', datafield: 'total', cellsalign: 'center', align: 'center', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(200, false),
                datafields:
                    [
                        { name: 'id', type: 'number' },
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'available', type: 'bool' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'total', type: 'number' }
                    ],
                datatype: 'array'
            }
        },
        methods: {
            setAlignment(align) {
                this.$refs.myGrid.beginupdate();
                for (let index = 0; index < this.columns.length; index++) {
                    this.$refs.myGrid.setcolumnproperty(this.columns[index].datafield, 'align', align);
                    this.$refs.myGrid.setcolumnproperty(this.columns[index].datafield, 'cellsalign', align);
                }
                this.$refs.myGrid.endupdate();
            },
            leftBtnOnChecked: function() {
                this.setAlignment('left');
            },
            centerBtnOnChecked: function() {
                this.setAlignment('center');
            },
            rightBtnOnChecked: function() {
                this.setAlignment('right');
            }
        }
    }
</script>

<style>
</style>