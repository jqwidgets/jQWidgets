<template>
    <div>
        <JqxGrid ref="myGrid"
                 :width="getWidth" :height="300" :source="dataAdapter" :columns="columns">
        </JqxGrid>

        <div style="margin-top: 10px">
            <JqxButton @click="refreshBtnOnClick()">Refresh Data</JqxButton>
            <JqxButton @click="clearBtnOnClick()">Clear</JqxButton>
        </div>
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
                    { text: 'First Name', dataField: 'firstname', width: 130 },
                    { text: 'Last Name', dataField: 'lastname', width: 130 },
                    { text: 'Product', dataField: 'productname', width: 180 },
                    { text: 'Quantity', dataField: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', dataField: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Total', dataField: 'total', cellsalign: 'right', minwidth: 100, cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(500, false),
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'total', type: 'number' }
                    ],
                datatype: 'array'
            };
        },
        methods: {
            refreshBtnOnClick: function() {
                this.source.localdata = generatedata(500, false);
                // passing 'cells' to the 'updatebounddata' method will refresh only the cells values when the new rows count is equal to the previous rows count.
                this.$refs.myGrid.updatebounddata('cells');
            },
            clearBtnOnClick: function () {
                this.$refs.myGrid.clear();
            }
        }
    }
</script>

<style>
    .jqx-button{
        width: fit-content;
        display: inline;
        margin-right: 5px;
    }
</style>