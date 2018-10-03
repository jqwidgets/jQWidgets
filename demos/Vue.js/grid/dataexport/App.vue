<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">
        <JqxGrid ref="myGrid"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :sortable="true" :altrows="true" :selectionmode="'multiplecellsadvanced'">
        </JqxGrid>

        <div style="margin-top: 20px">
            <div style="float: left">
                <JqxButton @click="excelBtnOnClick()">Export to Excel</JqxButton>
                <br /><br />
                <JqxButton @click="xmlBtnOnClick()">Export to XML</JqxButton>
            </div>
            <div style="float: left; margin-left: 10px">
                <JqxButton @click="csvBtnOnClick()">Export to CSV</JqxButton>
                <br /><br />
                <JqxButton @click="tsvBtnOnClick()">Export to TSV</JqxButton>
            </div>
            <div style="float: left; margin-left: 10px">
                <JqxButton @click="htmlBtnOnClick()">Export to HTML</JqxButton>
                <br /><br />
                <JqxButton @click="jsonBtnOnClick()">Export to JSON</JqxButton>
            </div>
            <div style="float: left; margin-left: 10px">
                <JqxButton @click="pdfBtnOnClick()">Export to PDF</JqxButton>
            </div>
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
                    { text: 'First Name', datafield: 'firstname', width: 130 },
                    { text: 'Last Name', datafield: 'lastname', width: 130 },
                    { text: 'Product', datafield: 'productname', width: 200 },
                    { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellsalign: 'center', align: 'center' },
                    { text: 'Ship Date', datafield: 'date', width: 120, align: 'right', cellsalign: 'right', cellsformat: 'd' },
                    { text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right' },
                    { text: 'Price', datafield: 'price', cellsalign: 'right', align: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(100, false),
                datatype: 'array',
                datafields: [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ]
            };
        },
        methods: {
            excelBtnOnClick: function () {
                this.$refs.myGrid.exportdata('xls', 'jqxGrid');
            },
            xmlBtnOnClick: function () {
                this.$refs.myGrid.exportdata('xml', 'jqxGrid');
            },
            csvBtnOnClick: function () {
                this.$refs.myGrid.exportdata('csv', 'jqxGrid');
            },
            tsvBtnOnClick: function () {
                this.$refs.myGrid.exportdata('tsv', 'jqxGrid');
            },
            htmlBtnOnClick: function () {
                this.$refs.myGrid.exportdata('html', 'jqxGrid');
            },
            jsonBtnOnClick: function () {
                this.$refs.myGrid.exportdata('json', 'jqxGrid');
            },
            pdfBtnOnClick: function () {
                this.$refs.myGrid.exportdata('pdf', 'jqxGrid');
            }
        }
    }
</script>

<style>
</style>