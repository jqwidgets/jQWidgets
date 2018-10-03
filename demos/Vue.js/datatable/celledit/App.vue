<template>
    <div>
        <JqxDataTable @cellBeginEdit="onCellBeginEdit($event)" @cellEndEdit="onCellEndEdit($event)"
                      :width="getWidth" :source="dataAdapter" :columns="columns"
                      :altRows="true" :pageable="true" :editable="true"
                      :pagerButtonsCount="8" :editSettings="editSettings">
        </JqxDataTable>

        <div style="font-size: 13px; font-family: Verdana; width: 800px; margin-top: 20px">
            <h4>Event Log</h4>
            <div ref="myLog" style="max-height: 300px; overflow: auto"></div>
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
                    { text: 'Freight', dataField: 'Freight', cellsFormat: 'f', cellsAlign: 'right', align: 'right', width: 250 },
                    { text: 'Ship Country', dataField: 'ShipCountry', width: 250 },
                    { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy' }
                ],
                editSettings: {
                    saveOnPageChange: true, saveOnBlur: true, saveOnSelectionChange: true, cancelOnEsc: true,
                    saveOnEnter: true, editSingleCell: true, editOnDoubleClick: true, editOnF2: true
                }
            }
        },
        beforeCreate: function () {
            this.source = {
                dataFields: [
                    { name: 'OrderID', type: 'int' },
                    { name: 'Freight', type: 'float' },
                    { name: 'ShipName', type: 'string' },
                    { name: 'ShipAddress', type: 'string' },
                    { name: 'ShipCity', type: 'string' },
                    { name: 'ShipCountry', type: 'string' },
                    { name: 'ShippedDate', type: 'date' }
                ],
                root: 'Orders',
                record: 'Order',
                dataType: 'xml',
                id: 'OrderID',
                url: 'orderdetails.xml'
            };
        },
        methods: {
            onCellBeginEdit: function (event) {
                let args = event.args;
                // row key
                let rowKey = args.key;
                // row's index.
                let rowIndex = args.index;
                // row's data.
                let rowData = args.row;
                // row's index in the data source.
                let rowBoundIndex = args.boundIndex;
                // column's data field.
                let columnDataField = args.dataField;
                // column's display field.
                let columnDisplayField = args.displayField;
                // cell's value.
                let value = args.value;
                if (columnDataField === 'ShippedDate' && value) {
                    value = value.getDate() + '/' + (parseInt(value.getMonth()) + 1) + '/' + value.getFullYear();
                }
                let log = this.$refs.myLog;
                log.innerHTML = 'cellBeginEdit - Row: ' + rowIndex + ', Column: ' + columnDataField + ', Value: ' + value + ' <br />' + log.innerHTML;
            },
            onCellEndEdit: function (event) {
                let args = event.args;
                // row key
                let rowKey = args.key;
                // row's index.
                let rowIndex = args.index;
                // row's data.
                let rowData = args.row;
                // row's index in the data source.
                let rowBoundIndex = args.boundIndex;
                // column's data field.
                let columnDataField = args.dataField;
                // column's display field.
                let columnDisplayField = args.displayField;
                // cell's value.
                let value = args.value;
                if (columnDataField === 'ShippedDate' && value) {
                    value = value.getDate() + '/' + (parseInt(value.getMonth()) + 1) + '/' + value.getFullYear();
                }
                let log = this.$refs.myLog;
                log.innerHTML = '<br/>cellEndEdit - Row: ' + rowIndex + ', Column: ' + columnDataField + ', Value: ' + value + '<br/>' + log.innerHTML;
            }
        }
    };
</script>

<style>
</style>