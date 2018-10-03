<template>

    <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns"
             :autoheight="true" :editable="true" :selectionmode="'singlecell'">
    </JqxGrid>
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
                    { text: 'Name', pinned: true, editable: false, datafield: 'Name', width: 150 },
                    {
                        text: 'Boston', columntype: 'custom', datafield: 'Boston', width: 150,
                        createeditor: this.createGridEditor, initeditor: this.initGridEditor, geteditorvalue: this.gridEditorValue
                    },
                    {
                        text: 'Berlin', columntype: 'custom', datafield: 'Berlin', width: 150,
                        createeditor: this.createGridEditor, initeditor: this.initGridEditor, geteditorvalue: this.gridEditorValue
                    },
                    {
                        text: 'London', columntype: 'custom', datafield: 'London',
                        createeditor: this.createGridEditor, initeditor: this.initGridEditor, geteditorvalue: this.gridEditorValue
                    }
                ]
            }
        },
        beforeCreate: function () {

            const data = [
                { 'Name': 'Population', 'Berlin': '3560154', 'Boston': '3406829', 'London': '8174100' },
                { 'Name': 'Country', 'Berlin': 'Germany', 'Boston': 'United States', 'London': 'United Kingdom' },
                { 'Name': 'Capital', 'Berlin': 'true', 'Boston': 'false', 'London': 'true' }
            ];

            this.source = {
                localdata: data,
                datatype: 'array',
                updaterow: (rowid, rowdata, commit) => {
                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful
                    // and with parameter false if the synchronization failder.
                    commit(true);
                },
                datafields:
                    [
                        { name: 'Name', type: 'string' },
                        { name: 'Berlin', type: 'string' },
                        { name: 'Boston', type: 'string' },
                        { name: 'London', type: 'string' }
                    ]
            };
        },
        methods: {
            createGridEditor: function (row, cellValue, editor, cellText, width, height) {
                // construct the editor.
                if (row == 0) {
                    editor.jqxNumberInput({ decimalDigits: 0, inputMode: 'simple', width: width, height: height, spinButtons: true });
                }
                else if (row == 1) {
                    editor.jqxDropDownList({ autoDropDownHeight: true, width: width, height: height, source: ['United States', 'Germany', 'United Kingdom'] });
                }
                else if (row == 2) {
                    let element = $('<div tabIndex=0 style="position: absolute; top: 50%; left: 50%; margin-top: -7px; margin-left: -10px;"></div>');
                    editor.append(element);
                    element.jqxCheckBox({ animationShowDelay: 0, animationHideDelay: 0, width: 18, height: 18 });
                }
            },
            initGridEditor: function (row, cellValue, editor, cellText, width, height) {
                // set the editor's current value. The callback is called each time the editor is displayed.
                if (row == 0) {
                    editor.jqxNumberInput({ decimal: parseInt(cellValue) });
                }
                else if (row == 1) {
                    editor.jqxDropDownList('selectItem', cellValue);
                }
                else if (row == 2) {
                    var checkBoxHTMLElement = editor.find('div:first');
                    checkBoxHTMLElement.jqxCheckBox({ checked: cellValue.toString() == "true" });
                }
            },
            gridEditorValue: function (row, cellValue, editor) {
                if (row == 2) {
                    var checkBoxHTMLElement = editor.find('div:first');
                    return checkBoxHTMLElement.val();
                }
                return editor.val();
            }
        }
    }
</script>

<style>
</style>