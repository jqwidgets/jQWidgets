<template>
    <div>
        <JqxDataTable ref="myDataTable" style="float: left"
                      @rowSelect="tableOnRowSelect($event)" @rowUnselect="tableOnRowUnselect($event)"
                      :width="650" :source="dataAdapter" :columns="columns" :altRows="true">
        </JqxDataTable>

        <div style="float: left; margin-top: 10px; margin-left: 10px">
            <div><strong>Settings</strong></div>
            Select Row:

            <JqxInput ref="myInput"
                      :width="60" :height="30" :value="0">
            </JqxInput>

            <br />
            <br />

            <JqxButton style="float: left; padding-bottom: 2px" @click="rowSelectBtnOnClick()"
                       :width="100" :height="20">
                Select
            </JqxButton>

            <JqxButton style="float: left; margin-left: 5px; padding-bottom: 2px" @click="clearSelectionBtnOnClick()"
                       :width="130" :height="20">
                Clear Selection
            </JqxButton>

            <div style="clear: both"></div>
            <div style="margin-top:10px" ref="selectedRows"></div>
            <br />

            <div>Selection Mode:</div>

            <JqxDropDownList @change="dropDownOnChange($event)"
                             :height="30" :source="['Single Row','Multiple Rows']"
                             :selectedIndex="1" :autoDropDownHeight="true">
            </JqxDropDownList>

        </div>
    </div>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";

    export default {
        components: {
            JqxDataTable,
            JqxInput,
            JqxButton,
            JqxDropDownList
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', dataField: 'firstname', width: 200 },
                    { text: 'Last Name', dataField: 'lastname', width: 200 },
                    { text: 'Product', dataField: 'productname', width: 180 },
                    { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
                    { text: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsAlign: 'right' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localData: generatedata(15, false),
                datatype: "array",
                dataFields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' }
                    ]
            };
        },
        methods: {
            selectionInfo: function () {
                // gets selected row indexes. The method returns an Array of indexes.
                let selection = this.$refs.myDataTable.getSelection();
                let selectedRows = '<br/>Selected Row Indexes:<br/>';
                if (selection && selection.length > 0) {
                    let rows = this.$refs.myDataTable.getRows();
                    for (let i = 0; i < selection.length; i++) {
                        let rowData = selection[i];
                        selectedRows += rows.indexOf(rowData);
                        if (i < selection.length - 1) {
                            selectedRows += ', ';
                        }
                        if (i > 1 && i % 8 === 0) {
                            selectedRows += '<br/>';
                        }
                    }
                }
                this.$refs.selectedRows.innerHTML = selectedRows;
            },
            dropDownOnChange: function (event) {
                switch (event.args.index) {
                    case 0:
                        // disable multiple rows selection with Shift or Ctrl.
                        this.$refs.myDataTable.selectionMode = 'singleRow';
                        break;
                    case 1:
                        // enable multiple rows selection with Shift or Ctrl.
                        this.$refs.myDataTable.selectionMode = 'multipleRows';
                        break;
                }
            },
            rowSelectBtnOnClick: function () {
                let index = parseInt(this.$refs.myInput.val());
                this.$refs.myDataTable.selectRow(index);
            },
            clearSelectionBtnOnClick: function () {
                this.$refs.myDataTable.clearSelection();
            },
            tableOnRowSelect: function (event) {
                // event arguments
                let args = event.args;
                // row index
                let index = args.index;
                // row data
                let rowData = args.row;
                // row key
                let rowKey = args.key;
                this.selectionInfo();
            },
            tableOnRowUnselect: function (event) {
                // event arguments
                let args = event.args;
                // row index
                let index = args.index;
                // row data
                let rowData = args.row;
                // row key
                let rowKey = args.key;
                this.selectionInfo();
            }
        }
    };
</script>

<style>
</style>