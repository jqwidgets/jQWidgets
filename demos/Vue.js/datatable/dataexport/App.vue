<template>
    <div>
        <JqxDataTable ref="myDataTable"
                      :width="470" :source="dataAdapter" :columns="columns"
                      :altRows="true" :pageable="true" :sortable="true">
        </JqxDataTable>

        <div style="margin-top: 20px">

            <div style="float: left">
                <JqxButton @click="excelExport()" :width="110">Export to Excel</JqxButton>
                <br />
                <br />
                <JqxButton @click="xmlExport()" :width="110">Export to XML</JqxButton>
            </div>

            <div style="float: left">
                <JqxButton @click="csvExport()" :width="110">Export to CSV</JqxButton>
                <br />
                <br />
                <JqxButton @click="tsvExport()" :width="110">Export to TSV</JqxButton>
            </div>

            <div style="float: left">
                <JqxButton @click="htmlExport()" :width="110">Export to HTML</JqxButton>
                <br />
                <br />
                <JqxButton @click="jsonExport()" :width="110">Export to JSON</JqxButton>
            </div>

            <div style="float: left">
                <JqxButton @click="pdfExport()" :width="110">Export to PDF</JqxButton>
            </div>

        </div>
    </div>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxDataTable,
            JqxButton
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', dataField: 'firstname', width: 190 },
                    { text: 'Last Name', dataField: 'lastname', width: 190 },
                    { text: 'Product', dataField: 'productname', width: 177 },
                    { text: 'Available', dataField: 'available', width: 67, cellsAlign: 'center', align: 'center' },
                    { text: 'Ship Date', dataField: 'date', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'd' },
                    { text: 'Quantity', dataField: 'quantity', width: 70, align: 'right', cellsAlign: 'right' },
                    { text: 'Price', dataField: 'price', cellsAlign: 'right', width: 100, align: 'right', cellsFormat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localData: generatedata(100, false),
                dataType: 'array',
                dataFields:
                    [
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
            excelExport: function () {
                this.$refs.myDataTable.exportData('xls');
            },
            xmlExport: function () {
                this.$refs.myDataTable.exportData('xml');
            },
            csvExport: function () {
                this.$refs.myDataTable.exportData('csv');
            },
            tsvExport: function () {
                this.$refs.myDataTable.exportData('tsv');
            },
            htmlExport: function () {
                this.$refs.myDataTable.exportData('html');
            },
            jsonExport: function () {
                this.$refs.myDataTable.exportData('json');
            },
            pdfExport: function () {
                this.$refs.myDataTable.exportData('pdf');
            }
        }
    };
</script>

<style>
</style>