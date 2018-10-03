<template>
    <JqxGrid ref="myGrid"
             :width="getWidth" :source="dataAdapter" :columns="columns"
             :editable="true" :selectionmode="'singlecell'">
    </JqxGrid>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";
    import JqxSlider from "jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue";

    export default {
        components: {
            JqxGrid
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    {
                        text: 'First Name', columntype: 'template', datafield: 'firstname', width: 80,
                        createeditor: (row, cellvalue, editor, cellText, width, height) => {
                            // construct the editor.
                            let container = document.createElement('input');
                            container.className = 'firstName';
                            container.style.border = 'none';
                            editor[0].appendChild(container);

                            let options = {
                                width: width, height: height,
                                displayMember: 'firstname',
                                source: this.getEditorDataAdapter('firstname')
                            };

                            this.input = jqwidgets.createInstance('.firstName', 'jqxInput', options);
                        },
                        initeditor: (row, cellvalue, editor, celltext, pressedkey) => {
                            // set the editor's current value. The callback is called each time the editor is displayed.
                            if (pressedkey) {
                                this.input.val(pressedkey);
                                this.input.selectLast();
                            }
                            else {
                                this.input.val(cellvalue);
                                this.input.selectAll();
                            }
                        },
                        geteditorvalue: (row, cellvalue, editor) => {
                            // return the editor's value
                            return this.input.val();
                        }
                    },
                    {
                        text: 'Last Name', datafield: 'lastname', columntype: 'template', width: 80, createeditor: (row, cellvalue, editor, cellText, width, height) => {
                            // construct the editor.
                            let container = document.createElement('input');
                            editor[0].appendChild(container);
                            container.className = 'lastName';
                            container.style.border = 'none';
                            editor[0].appendChild(container);

                            let options = {
                                width: width, height: height,
                                displayMember: 'lastname',
                                source: this.getEditorDataAdapter('lastname')
                            };

                            this.input = jqwidgets.createInstance('.lastName', 'jqxInput', options);
                        },
                        initeditor: (row, cellvalue, editor, celltext, pressedkey) => {
                            // set the editor's current value. The callback is called each time the editor is displayed.
                            if (pressedkey) {
                                this.input.val(pressedkey);
                                this.input.selectLast();
                            }
                            else {
                                this.input.val(cellvalue);
                                this.input.selectAll();
                            }
                        },
                        geteditorvalue: (row, cellvalue, editor) => {
                            // return the editor's value.
                            return this.input.val();
                        }
                    },
                    {
                        text: 'Products', columntype: 'template', datafield: 'productname',
                        createeditor: (row, cellvalue, editor, cellText, width, height) => {
                            editor.css('border', 'none');
                            // construct the editor.
                            editor.jqxDropDownList({
                                checkboxes: true, source: this.getEditorDataAdapter('productname'), displayMember: 'productname', valueMember: 'productname', width: width, height: height,
                                selectionRenderer: () => {
                                    return '<span style="top: 4px; position: relative;">Please Choose:</span>';
                                }
                            });
                        },
                        initeditor: (row, cellvalue, editor, celltext, pressedkey) => {
                            // set the editor's current value. The callback is called each time the editor is displayed.
                            let items = editor.jqxDropDownList('getItems');
                            editor.jqxDropDownList('uncheckAll');
                            let values = cellvalue.split(/,\s*/);
                            for (let j = 0; j < values.length; j++) {
                                for (let i = 0; i < items.length; i++) {
                                    if (items[i].label === values[j]) {
                                        editor.jqxDropDownList('checkIndex', i);
                                    }
                                }
                            }
                        },
                        geteditorvalue: (row, cellvalue, editor) => {
                            // return the editor's value.
                            return editor.val();
                        }
                    },
                    {
                        text: 'Quantity', width: 200, columntype: 'custom', datafield: 'quantity',
                        createeditor: (row, cellvalue, editor, cellText, width, height) => {
                            // construct the editor.
                            editor.css('margin-top', '2px');
                            editor.jqxSlider({ step: 1, mode: 'fixed', showTicks: false, min: 0, max: 30, width: width, height: height });
                        },
                        initeditor: (row, cellvalue, editor, celltext, pressedkey) => {
                            // set the editor's current value. The callback is called each time the editor is displayed.
                            let value = parseInt(cellvalue);
                            if (isNaN(value)) value = 0;
                            editor.jqxSlider('setValue', value);
                        },
                        geteditorvalue: (row, cellvalue, editor) => {
                            // return the editor's value.
                            return editor.val();
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(200, false),
                datatype: 'array',
                updaterow: (rowid, rowdata, commit) => {
                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful
                    // and with parameter false if the synchronization failder.
                    commit(true);
                },
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

            this.input;
        },
        methods: {
            getEditorDataAdapter: function (datafield) {
                let dataAdapter = new jqx.dataAdapter(this.source, { uniqueDataFields: [datafield] });
                return dataAdapter;
            }
        }
    }
</script>