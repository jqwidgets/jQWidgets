<template>
    <div>
        <JqxDataTable ref="myDataTable"
                      :width="getWidth" :source="dataAdapter" :columns="columns"
                      :altRows="true" :sortable="true" :exportSettings="{ fileName: null }">
        </JqxDataTable>

        <div style="margin-top: 20px">
            <div style="margin-left: 10px; float: left">
                <JqxButton @click="printBtnOnClick()" :width="80">Print</JqxButton>
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
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', dataField: 'firstname', width: 150 },
                    { text: 'Last Name', dataField: 'lastname', width: 150 },
                    { text: 'Product', dataField: 'productname', width: 200 },
                    { text: 'Ship Date', dataField: 'date', width: 150, align: 'right', cellsAlign: 'right', cellsFormat: 'd' },
                    { text: 'Quantity', dataField: 'quantity', width: 100, align: 'right', cellsAlign: 'right' },
                    { text: 'Price', dataField: 'price', width: 100, cellsalign: 'right', align: 'right', cellsFormat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {

            this.source = {
                localdata: generatedata(10, false),
                datatype: 'array',
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
            printBtnOnClick: function () {
                let gridContent = this.$refs.myDataTable.exportData('html');
                let newWindow = window.open('', '', 'width=800, height=500'),
                    document = newWindow.document.open(),
                    pageContent =
                        '<!DOCTYPE html>' +
                        '<html>' +
                        '<head>' +
                        '<meta charset="utf-8" />' +
                        '<title>jQWidgets DataTable</title>' +
                        '</head>' +
                        '<body>' + gridContent + '</body></html>';
                document.write(pageContent);
                document.close();
                newWindow.print();
            }
        }
    };
</script>

<style>
</style>