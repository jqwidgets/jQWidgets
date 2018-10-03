<template>
    <div>
        <JqxGrid @cellbeginedit="myGridOnCellBeginEdit($event)" @cellendedit="myGridOnCellEndEdit($event)"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :editable="true" :selectionmode="'singlecell'">
        </JqxGrid>
        <div style="margin-top: 30px">
            <div ref="cellBeginEditLog"></div>
            <div ref="cellEndEditLog" style="margin-top: 10px"></div>
        </div>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";

    export default {
        components: {
            JqxGrid
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 80, cellbeginedit: this.cellbeginedit, cellsrenderer: this.cellsrenderer },
                    { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 80, cellbeginedit: this.cellbeginedit, cellsrenderer: this.cellsrenderer },
                    { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 190, cellbeginedit: this.cellbeginedit, cellsrenderer: this.cellsrenderer },
                    { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellbeginedit: this.cellbeginedit },
                    {
                        text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, cellsalign: 'right', cellsformat: 'd', cellbeginedit: this.cellbeginedit,
                        validation: (cell, value) => {
                            let year = value.getFullYear();
                            if (year >= 2015) {
                                return { result: false, message: 'Ship Date should be before 1/1/2015' };
                            }
                            return true;
                        }, cellsrenderer: this.cellsrenderer
                    },
                    {
                        text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right', columntype: 'numberinput',
                        validation: (cell, value) => {
                            if (value < 0 || value > 150) {
                                return { result: false, message: 'Quantity should be in the 0-150 interval' };
                            }
                            return true;
                        },
                        initeditor: (row, cellvalue, editor) => {
                            editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
                        }, cellbeginedit: this.cellbeginedit, cellsrenderer: this.cellsrenderer
                    },
                    {
                        text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
                        validation: (cell, value) => {
                            if (value < 0 || value > 15) {
                                return { result: false, message: 'Price should be in the 0-15 interval' };
                            }
                            return true;
                        },
                        initeditor: (row, cellvalue, editor) => {
                            editor.jqxNumberInput({ digits: 3 });
                        }, cellbeginedit: this.cellbeginedit, cellsrenderer: this.cellsrenderer
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(200, false),
                datatype: 'array',
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'available', type: 'bool' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'date', type: 'date' }
                    ],
                updaterow: (rowid, rowdata, commit) => {
                    // synchronize with the server - send update command
                    commit(true);
                }
            };
        },
        methods: {
            cellbeginedit: function (row, datafield, columntype, value) {
                if (row == 0 || row == 2 || row == 5) return false;
            },
            cellsrenderer: function (row, column, value, defaultHtml) {
                if (row == 0 || row == 2 || row == 5) {
                    let element = defaultHtml.substring(0, 61) + "; color: #999" + defaultHtml.substring(61);
                    return element;
                }
                return defaultHtml;
            },
            myGridOnCellBeginEdit: function (event) {
                let args = event.args;
                this.$refs.cellBeginEditLog.innerHTML = 'Event Type: cellbeginedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
            },
            myGridOnCellEndEdit: function (event) {
                let args = event.args;
                this.$refs.cellEndEditLog.innerHTML = 'Event Type: cellendedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
            }
        }
    }
</script>

<style>
</style>