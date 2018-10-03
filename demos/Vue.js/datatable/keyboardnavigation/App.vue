<template>
    <div>
        <JqxDataTable ref="myDataTable" @bindingComplete="tableOnBindingComplete()"
                      :width="getWidth" :source="dataAdapter" :columns="columns"
                      :pageable="true" :editable="true">
        </JqxDataTable>

        <div style="font-family: Verdana; font-size: 12px; width: 670px">
            <ul>
                <li><b>Left Arrow</b> key is pressed - Navigates to the Previous Page. If Row Details is enabled, Collapses the Row.</li>
                <li><b>Right Arrow</b> key is pressed - Navigates to the Next Page. If Row Details is enabled, Expands the Row.</li>
                <li><b>Up Arrow</b> key is pressed - Selects the row above.</li>
                <li><b>Down Arrow</b> key is pressed - Selects the row below.</li>
                <li><b>Page Up/Down</b> is pressed - Navigate Up or Down with one page.</li>
                <li><b>Home/End</b> is pressed - Navigate to the first or last row on the current page.</li>
                <li><b>Enter</b> key is pressed - Saves the Edited Row.</li>
                <li><b>Esc</b> key is pressed - Closes all Editors and Cancels the changes.</li>
                <li><b>F2</b> key is pressed -  Enters edit mode for the currently selected row.</li>
                <li><b>Shift+Arrow</b> key extends the selection.</li>
                <li><b>Shift</b> extends the selection when an end user clicks on a row.</li>
                <li><b>Ctrl</b> key is pressed - extends the selection when an end user clicks on a row. </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";

    export default {
        components: {
            JqxDataTable
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Ship Name', dataField: 'ShipName', width: 350, align: 'left', cellsAlign: 'left' },
                    { text: 'Freight', dataField: 'Freight', width: 180, align: 'right', cellsFormat: 'F2', cellsAlign: 'right' },
                    { text: 'Ship Address', dataField: 'ShipAddress', align: 'left', width: 350, cellsAlign: 'left' },
                    { text: 'Ship City', dataField: 'ShipCity', width: 100, align: 'left', cellsAlign: 'left' },
                    { text: 'Ship Country', dataField: 'ShipCountry', align: 'left', cellsAlign: 'left' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                dataType: 'xml',
                dataFields: [
                    { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                    { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                    { name: 'ShipName', map: 'm\\:properties>d\\:ShipName', type: 'string' },
                    { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress', type: 'string' },
                    { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity', type: 'string' },
                    { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry', type: 'string' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:OrderID',
                url: 'orders.xml'
            };
        },
        methods: {
            tableOnBindingComplete: function () {
                this.$refs.myDataTable.focus();
                this.$refs.myDataTable.selectRow(0);
            }
        }
    };
</script>

<style>
</style>