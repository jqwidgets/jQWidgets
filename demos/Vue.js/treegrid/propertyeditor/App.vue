<template>
    <JqxTreeGrid ref="myTreeGrid"
                 @cellValueChanged="myTreeGridOnCellValueChanged($event)"
                 :source="dataAdapter" :columns="columns" :autoRowHeight="true"
                 :altRows="true" :editable="true" :editSettings="editSettings">
    </JqxTreeGrid>
</template>

<script>
    import JqxTreeGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtreegrid.vue';
    import JqxInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue';
    import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue';
    import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownbutton.vue';
    import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue';
    import JqxColorPicker from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcolorpicker.vue';

    export default {
        components: {
            JqxTreeGrid,
            JqxInput,
            JqxDropDownList,
            JqxDropDownButton,
            JqxCheckBox,
            JqxColorPicker
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Property Name', editable: false, columnType: 'none', dataField: 'property', width: 200 },
                    {
                        text: 'Value', dataField: 'value', width: 230, columnType: 'custom',
                        // creates an editor depending on the 'type' value.
                        createEditor: (rowKey, cellvalue, editor, cellText, width, height) => {
                            let row = this.$refs.myTreeGrid.getRow(rowKey);
                            switch (row['type']) {
                                case 'string':
                                case 'number':
                                    let inputContainer = document.createElement('input');
                                    inputContainer.id = 'myInput';
                                    inputContainer.style.cssText = 'height: 100%; border: none';
                                    editor[0].appendChild(inputContainer);

                                    this['inputRow' + rowKey] = jqwidgets.createInstance('#myInput', 'jqxInput', { width: '100%', height: '100%' });

                                    break;
                                case 'align':
                                    let dropDownListContainer = document.createElement('div');
                                    dropDownListContainer.id = 'myDropDownList';
                                    dropDownListContainer.style.cssText = 'height: 100%; border: none';
                                    editor[0].appendChild(dropDownListContainer);

                                    let options =
                                        {
                                            width: '100%', height: '100%', autoDropDownHeight: true, source: ['Left', 'Center', 'Right']
                                        };
                                    this.myDropDownList = jqwidgets.createInstance('#myDropDownList', 'jqxDropDownList', options);

                                    break;
                                case 'color':
                                    if (rowKey === '3') {
                                        let dropDownButtonContainer = document.createElement('div');
                                        dropDownButtonContainer.id = 'myDropDownButton1';
                                        dropDownButtonContainer.style.cssText = 'height: 100%; border: none';
                                        dropDownButtonContainer.innerHTML = '<div style="padding: 5px;"><div class="myColorPicker1"></div></div>';
                                        editor[0].appendChild(dropDownButtonContainer);

                                        let myDropDownButton1 = jqwidgets.createInstance('#myDropDownButton1', 'jqxDropDownButton', { width: '100%', height: '100%' });

                                        this.myColorPicker1 = jqwidgets.createInstance(`.myColorPicker1`, 'jqxColorPicker', { width: 220, height: 220 });

                                        this.myColorPicker1.addEventHandler('colorchange', (event) => {
                                            myDropDownButton1.setContent(this.getTextElementByColor(event.args.color));
                                        });
                                    } else {

                                        let dropDownButtonContainer = document.createElement('div');
                                        dropDownButtonContainer.id = 'myDropDownButton2';
                                        dropDownButtonContainer.style.cssText = 'height: 100%; border: none';
                                        dropDownButtonContainer.innerHTML = '<div style="padding: 5px;"><div class="myColorPicker2"></div></div>';
                                        editor[0].appendChild(dropDownButtonContainer);

                                        let myDropDownButton2 = jqwidgets.createInstance('#myDropDownButton2', 'jqxDropDownButton', { width: '100%', height: '100%' });

                                        this.myColorPicker2 = jqwidgets.createInstance(`.myColorPicker2`, 'jqxColorPicker', { width: 220, height: 220 });

                                        this.myColorPicker2.addEventHandler('colorchange', (event) => {
                                            myDropDownButton2.setContent(this.getTextElementByColor(event.args.color));
                                        });
                                    }

                                    break;
                                case 'bool':
                                    let checkBoxContainer = document.createElement('div');
                                    checkBoxContainer.id = 'myCheckBox';
                                    checkBoxContainer.style.cssText = 'margin-top: 6px; margin-left: -8px; left: 50%; position: relative';
                                    editor[0].appendChild(checkBoxContainer);

                                    this.myCheckBox = jqwidgets.createInstance('#myCheckBox', 'jqxCheckBox', { checked: cellvalue });

                                    break;
                            }
                        },
                        // updates the editor's value.
                        initEditor: (rowKey, cellvalue, editor, cellText, width, height) => {
                            let row = this.$refs.myTreeGrid.getRow(rowKey);
                            switch (row.type) {
                                case 'string':
                                case 'number':
                                    this['inputRow' + rowKey].val(cellvalue);
                                    break;
                                case 'align':
                                    this.myDropDownList.val(cellvalue);
                                    break;
                                case 'color':
                                    if (rowKey === '3') {
                                        this.myColorPicker1.setColor(cellvalue);
                                    } else {
                                        this.myColorPicker2.setColor(cellvalue);
                                    }
                                    break;
                                case 'bool':
                                    this.myCheckBox.val(cellvalue);
                                    break;
                            }
                        },
                        // returns the value of the custom editor.
                        getEditorValue: (rowKey, cellvalue, editor) => {
                            let row = this.$refs.myTreeGrid.getRow(rowKey);
                            switch (row.type) {
                                case 'string':
                                    return this['inputRow' + rowKey].val();
                                case 'number':
                                    let number = parseFloat(this['inputRow' + rowKey].val());
                                    if (isNaN(number)) {
                                        return 0;
                                    }
                                    else return number;
                                case 'align':
                                    return this.myDropDownList.val();
                                case 'color':
                                    if (rowKey === '3') {
                                        let color = this.myColorPicker1.getColor();
                                        return '#' + color.hex;
                                    } else {
                                        let color = this.myColorPicker2.getColor();
                                        return '#' + color.hex;
                                    }
                                case 'bool':
                                    return this.myCheckBox.val();
                            }
                            return '';
                        }
                    }
                ],
                editSettings: {
                    saveOnPageChange: true, saveOnBlur: false,
                    saveOnSelectionChange: true, cancelOnEsc: true,
                    saveOnEnter: true, editOnDoubleClick: true, editOnF2: true
                }
            }
        },
        beforeCreate: function () {

            const data = [
                {
                    'property': 'Name', 'value': 'jqxTreeGrid', type: 'string'
                },
                {
                    'property': 'Location', 'value': '0, 0', type: 'string', 'children': [{ 'property': 'X', 'value': '0', type: 'number' }, { 'property': 'Y', 'value': '0', type: 'number' }]
                },
                {
                    'property': 'Size', 'value': '200, 200', type: 'string', 'children': [{ 'property': 'Width', 'value': '200', type: 'number' }, { 'property': 'Height', 'value': '200', type: 'number' }]
                },
                {
                    'property': 'Background', 'value': '#4621BC', type: 'color'
                },
                {
                    'property': 'Color', 'value': '#B1B11B', type: 'color'
                },
                {
                    'property': 'Alignment', 'value': 'Left', type: 'align'
                },
                {
                    'property': 'Enabled', 'value': 'true', type: 'bool'
                }
            ];

            this.source = {
                dataType: 'json',
                dataFields: [
                    { name: 'property', type: 'string' },
                    { name: 'value', type: 'string' },
                    { name: 'type', type: 'string' },
                    { name: 'children', type: 'array' }
                ],
                hierarchy:
                    {
                        root: 'children'
                    },
                localData: data
            };

            this.myCheckBox;
            this.myColorPicker1;
            this.myColorPicker2;
            this.myDropDownList;
            this.myInput;
        },
        methods: {
            getTextElementByColor: function (color) {
                if (color == 'transparent' || color.hex == '') {
                    return '<div style="text-shadow: none; position: relative; padding-bottom: 4px; margin-top: 4px;">transparent</div>';
                }
                let nThreshold = 105;
                let bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
                let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
                let element = '<div style="text-shadow: none; position: relative; padding-bottom: 4px; margin-top: 4px;color:' + foreColor + '; background: #' + color.hex + '">#' + color.hex + '</div>';
                return element;
            },
            myTreeGridOnCellValueChanged: function (event) {
                // Update the Location and Size properties and their nested properties.
                var args = event.args;
                var row = args.row;
                var records = row.records;
                // update the nested properties when a parent value is changed.
                if (records.length > 0) {
                    var values = args.value.split(',');
                    for (var i = 0; i < values.length; i++) {
                        var value = $.trim(values[i]);
                        var rowKey = this.$refs.myTreeGrid.getKey(records[i]);
                        this.$refs.myTreeGrid.setCellValue(rowKey, 'value', value);
                    }
                }
                // update the parent value when the user changes a nested property,
                else if (row.level == 1) {
                    var parent = row.parent;
                    var parentRowKey = this.$refs.myTreeGrid.getKey(parent);
                    var value = '';
                    var records = parent.records;
                    if (records.length > 0) {
                        for (var i = 0; i < records.length; i++) {
                            var rowKey = this.$refs.myTreeGrid.getKey(records[i]);
                            var cellValue = this.$refs.myTreeGrid.getCellValue(rowKey, 'value');
                            value += cellValue;
                            if (i < records.length - 1) {
                                value += ', ';
                            }
                        }
                    }
                    this.$refs.myTreeGrid.setCellValue(parentRowKey, 'value', value);
                }
            }
        }
    }
</script>

<style>
</style>