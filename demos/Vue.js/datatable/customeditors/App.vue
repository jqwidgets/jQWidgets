<template>
    <JqxDataTable :width="getWidth" :source="dataAdapter" :columns="columns"
                  :editable="true" :pageable="true" :sortable="true"
                  :pagerButtonsCount="10" :autoRowHeight="false">
    </JqxDataTable>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";
    import JqxSlider from "jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue";

    export default {
        components: {
            JqxDataTable
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    {
                        text: 'First Name', columntype: 'template', datafield: 'firstname', width: 180,
                        createEditor: (row, cellvalue, editor, cellText, width, height) => {
                            // construct the editor.
                            let container = document.createElement('input');
                            container.className = 'firstNameInput';
                            container.style.cssText = 'padding-left: 4px; border: none';
                            editor[0].appendChild(container);

                            let inputOptions = {
                                width: width, height: height, source: this.getEditorDataAdapter('firstname'), displayMember: 'firstname'
                            };

                            jqwidgets.createInstance('.firstNameInput', 'jqxInput', inputOptions);
                        },
                        initEditor: (row, cellvalue, editor, celltext, width, height) => {
                            // set the editor's current value. The callback is called each time the editor is displayed.
                            let inputField = editor.find('input');
                            inputField.val(cellvalue);
                        },
                        getEditorValue: (row, cellvalue, editor) => {
                            // return the editor's value.
                            return editor.find('input').val();
                        }
                    },
                    {
                        text: 'Last Name', datafield: 'lastname', columntype: 'template', width: 180,
                        createEditor: (row, cellvalue, editor, cellText, width, height) => {
                            // construct the editor.
                            let container = document.createElement('input');
                            container.className = 'lastNameInput';
                            container.style.cssText = 'padding-left: 4px; border: none';
                            editor[0].appendChild(container);

                            let inputOptions = {
                                width: width, height: height, source: this.getEditorDataAdapter('lastname'), displayMember: 'lastname'
                            };

                            jqwidgets.createInstance('.lastNameInput', 'jqxInput', inputOptions);
                        },
                        initEditor: (row, cellvalue, editor, celltext, width, height) => {
                            let inputField = editor.find('input');
                            inputField.val(cellvalue);
                        },
                        getEditorValue: (row, cellvalue, editor) => {
                            // return the editor's value.
                            return editor.find('input').val();
                        }
                    },
                    {
                        text: 'Products', columntype: 'template', datafield: 'productname',
                        createEditor: (row, cellvalue, editor, cellText, width, height) => {
                            // construct the editor.
                            editor.jqxDropDownList({
                                source: this.getEditorDataAdapter('productname'), displayMember: 'productname', valueMember: 'productname', width: width, height: height
                            });
                        },
                        initEditor: (row, cellvalue, editor, celltext, width, height) => {
                            // set the editor's current value. The callback is called each time the editor is displayed.
                            editor.jqxDropDownList({ width: width, height: height });
                            editor.val(cellvalue);
                        },
                        getEditorValue: (row, cellvalue, editor) => {
                            // return the editor's value.
                            return editor.val();
                        }
                    },
                    {
                        text: 'Quantity', width: 200, columntype: 'custom', datafield: 'quantity',
                        createEditor: (row, cellvalue, editor, cellText, width, height) => {
                            // construct the editor.
                            editor.jqxSlider({ step: 1, mode: 'fixed', tooltip: true, showTicks: false, min: 0, max: 30, width: width, height: height });
                        },
                        initEditor: (row, cellvalue, editor, celltext, width, height) => {
                            // set the editor's current value. The callback is called each time the editor is displayed.
                            let value = parseInt(cellvalue);
                            if (isNaN(value)) value = 0;
                            editor.jqxSlider('setValue', value);
                        },
                        getEditorValue: (row, cellvalue, editor) => {
                            // return the editor's value.
                            return editor.val();
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.data = generatedata(200, false);

            this.source = {
                localData: this.data,
                datatype: 'array',
                dataFields:
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
        },
        methods: {
            getEditorDataAdapter: function (datafield) {
                const source =
                    {
                        localData: this.data,
                        dataType: 'array',
                        dataFields:
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
                let dataAdapter = new jqx.dataAdapter(source, { uniqueDataFields: [datafield] });

                return dataAdapter;
            }
        }
    };
</script>

<style>
</style>