<template>
    <div>
        <JqxGrid @cellbeginedit="myGridOnCellBeginEdit($event)" @cellendedit="myGridOnCellEndEdit($event)"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :editable="true" :editmode="'selectedrow'" :selectionmode="'singlerow'">
        </JqxGrid>

        <div style="font-size: 12px; font-family: Verdana; margin-top: 30px">
            <div ref="cellBeginEditLog"></div>
            <div ref="cellEndEditLog" style="margin-top: 30px"></div>
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
                    { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 80 },
                    { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 80 },
                    { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
                    { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
                    {
                        text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, align: 'right', cellsalign: 'right', cellsformat: 'd',
                        validation: (cell, value) => {
                            if (value == '')
                                return true;
                            let year = value.getFullYear();
                            if (year >= 2017) {
                                return { result: false, message: 'Ship Date should be before 1/1/2017' };
                            }
                            return true;
                        }
                    },
                    {
                        text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right', columntype: 'numberinput',
                        validation: (cell, value) => {
                            if (value < 0 || value > 150) {
                                return { result: false, message: 'Quantity should be in the 0-150 interval' };
                            }
                            return true;
                        },
                        createeditor: (row, cellvalue, editor) => {
                            editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
                        }
                    },
                    {
                        text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
                        validation: (cell, value) => {
                            if (value < 0 || value > 15) {
                                return { result: false, message: 'Price should be in the 0-15 interval' };
                            }
                            return true;
                        },
                        createeditor: (row, cellvalue, editor) => {
                            editor.jqxNumberInput({ digits: 3 });
                        }
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
                    ]
            };

            this.rowValues = '';
        },
        methods: {
            myGridOnCellBeginEdit: function (event) {
                let args = event.args;
                if (args.datafield === 'firstname') {
                    this.rowValues = '';
                }
                this.rowValues += args.value.toString() + '    ';
                if (args.datafield === 'price') {
                    this.$refs.cellBeginEditLog.innerHTML = 'Begin Row Edit: ' + (1 + args.rowindex) + ', Data: ' + this.rowValues;
                }
            },
            myGridOnCellEndEdit: function (event) {
                let args = event.args;
                if (args.datafield === 'firstname') {
                    this.rowValues = '';
                }
                this.rowValues += args.value.toString() + '    ';
                if (args.datafield === 'price') {
                    this.$refs.cellEndEditLog.innerHTML = 'End Row Edit: ' + (1 + args.rowindex) + ', Data: ' + this.rowValues;
                }
            }
        }
    }
</script>

<style>
</style>