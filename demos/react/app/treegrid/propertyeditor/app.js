import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxColorPicker from '../../../jqwidgets-react/react_jqxcolorpicker.js';
import JqxDropDownButton from '../../../jqwidgets-react/react_jqxdropdownbutton.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';

class App extends React.Component {
    getTextElementByColor(color) {
        if (color == 'transparent' || color.hex == '') {
            return '<div style="text-shadow: none; position: relative; padding-bottom: 4px; margin-top: 4px;">transparent</div>';
        }
        let nThreshold = 105;
        let bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
        let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
        let element = '<div style="text-shadow: none; position: relative; padding-bottom: 4px; margin-top: 4px;color:' + foreColor + '; background: #' + color.hex + '">#' + color.hex + '</div>';
        return element;
    }
    render() {
        let data = [
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

        let source = {
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

        let dataAdapter = new $.jqx.dataAdapter(source);

        let editSettings =
            {
                saveOnPageChange: true, saveOnBlur: false,
                saveOnSelectionChange: true, cancelOnEsc: true,
                saveOnEnter: true, editOnDoubleClick: true, editOnF2: true
            };

        let myInput, myDropDownList, myCheckBox, myColorPicker1, myColorPicker2;

        let columns =
            [
                { text: 'Property Name', editable: false, columnType: 'none', dataField: 'property', width: 200 },
                {
                    text: 'Value', dataField: 'value', width: 230, columnType: 'custom',
                    // creates an editor depending on the 'type' value.
                    createEditor: (rowKey, cellvalue, editor, cellText, width, height) => {
                        let row = this.refs.myTreeGrid.getRow(rowKey);
                        switch (row['type']) {
                            case 'string':
                            case 'number':

                                let inputContainer = document.createElement('div');
                                inputContainer.style.height = '100%';
                                editor[0].appendChild(inputContainer);

                                myInput = ReactDOM.render(
                                    <JqxInput style={{ border: 'none' }}
                                        width={'100%'} height={'100%'}
                                    />, inputContainer);

                                break;
                            case 'align':

                                let dropDownListContainer = document.createElement('div');
                                dropDownListContainer.style.height = '100%';
                                editor[0].appendChild(dropDownListContainer);

                                myDropDownList = ReactDOM.render(
                                    <JqxDropDownList style={{ border: 'none' }}
                                        width={'100%'} height={'100%'} autoDropDownHeight={true}
                                        source={['Left', 'Center', 'Right']}
                                    />, dropDownListContainer);

                                break;
                            case 'color':

                                let dropDownButtonContainer = document.createElement('div');
                                dropDownButtonContainer.style.height = '100%';
                                editor[0].appendChild(dropDownButtonContainer);

                                let myDropDownButton = ReactDOM.render(
                                    <JqxDropDownButton style={{ border: 'none' }}
                                        width={'100%'} height={'100%'}
                                    >
                                        <div style={{ padding: 5 }}>
                                            <div id={'colorPickerContainer' + rowKey} />
                                        </div>
                                    </JqxDropDownButton>, dropDownButtonContainer);

                                if (rowKey === '3') {
                                    myColorPicker1 = ReactDOM.render(
                                        <JqxColorPicker
                                            width={220} height={220}
                                        />, document.getElementById('colorPickerContainer' + rowKey));

                                    myColorPicker1.on('colorchange', (event) => {
                                        myDropDownButton.setContent(this.getTextElementByColor(event.args.color));
                                    });
                                } else {
                                    myColorPicker2 = ReactDOM.render(
                                        <JqxColorPicker
                                            width={220} height={220}
                                        />, document.getElementById('colorPickerContainer' + rowKey));

                                    myColorPicker2.on('colorchange', (event) => {
                                        myDropDownButton.setContent(this.getTextElementByColor(event.args.color));
                                    });
                                }

                                myDropDownButton.setContent(this.getTextElementByColor(new $.jqx.color({ hex: "ffaabb" })));

                                break;
                            case 'bool':
                                let checkBoxContainer = document.createElement('div');
                                checkBoxContainer.style.height = '100%';
                                editor[0].appendChild(checkBoxContainer);

                                myCheckBox = ReactDOM.render(
                                    <JqxCheckBox style={{ marginTop: 6, marginLeft: -8, left: '50%', position: 'relative' }}
                                        checked={cellvalue}
                                    />, checkBoxContainer);

                                break;
                        }
                    },
                    // updates the editor's value.
                    initEditor: (rowKey, cellvalue, editor, celltext, width, height) => {
                        let row = this.refs.myTreeGrid.getRow(rowKey);
                        switch (row.type) {
                            case 'string':
                            case 'number':
                                myInput.val(cellvalue);
                                break;
                            case 'align':
                                myDropDownList.val(cellvalue);
                                break;
                            case 'color':
                                if (rowKey === '3') {
                                    myColorPicker1.setColor(cellvalue);
                                } else {
                                    myColorPicker2.setColor(cellvalue);
                                }    
                                break;
                            case 'bool':
                                myCheckBox.val(cellvalue);
                                break;
                        }
                    },
                    // returns the value of the custom editor.
                    getEditorValue: (rowKey, cellvalue, editor) => {
                        let row = this.refs.myTreeGrid.getRow(rowKey);
                        switch (row.type) {
                            case 'string':
                                return myInput.val();
                            case 'number':
                                let number = parseFloat(myInput.val());
                                if (isNaN(number)) {
                                    return 0;
                                }
                                else return number;
                            case 'align':
                                return myDropDownList.val();
                            case 'color':
                                if (rowKey === '3') {
                                    let color = myColorPicker1.getColor().hex;
                                    return '#' + color;
                                } else {
                                    let color = myColorPicker2.getColor().hex;
                                    return '#' + color;
                                }                          
                            case 'bool':
                                return myCheckBox.val();
                        }
                        return '';
                    }
                }
            ];

        return (
            <JqxTreeGrid ref='myTreeGrid'
                source={dataAdapter}
                altRows={true}
                autoRowHeight={false}
                editSettings={editSettings}
                editable={true}
                columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
