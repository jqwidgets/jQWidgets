import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';

class App extends React.Component {
    render() {
        let source =
            {
                localdata: generatedata(200),
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

        let dataAdapter = new $.jqx.dataAdapter(source);

        let getEditorDataAdapter = (datafield) => {
            let source =
                {
                    localdata: generatedata(200),
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
            let dataAdapter = new $.jqx.dataAdapter(source, { uniqueDataFields: [datafield] });
            return dataAdapter;
        }

        let input;
        let columns =
            [
                {
                    text: 'First Name', columntype: 'template', datafield: 'firstname', width: 80,
                    createeditor: (row, cellvalue, editor, cellText, width, height) => {
                        // construct the editor.
                        let container = document.createElement('div');
                        editor[0].appendChild(container);
                        input = ReactDOM.render(
                            <JqxInput
                                width={width} height={height} displayMember={'firstname'}
                                source={getEditorDataAdapter('firstname')} />
                            ,container);
                    },
                    initeditor: (row, cellvalue, editor, celltext, pressedkey) => {
                        // set the editor's current value. The callback is called each time the editor is displayed. 
                        if (pressedkey) {
                            input.val(pressedkey);
                            input.selectLast();
                        }
                        else {
                            input.val(cellvalue);
                            input.selectAll();
                        }
                    },
                    geteditorvalue: (row, cellvalue, editor) => {
                        // return the editor's value.
                        return input.val();
                    }
                },
                {
                    text: 'Last Name', datafield: 'lastname', columntype: 'template', width: 80, createeditor: (row, cellvalue, editor, cellText, width, height) => {
                        // construct the editor.
                        let container = document.createElement('div');
                        editor[0].appendChild(container);
                        input = ReactDOM.render(
                            <JqxInput
                                width={width} height={height} displayMember={'lastname'}
                                source={getEditorDataAdapter('lastname')} />
                            , container);
                    },
                    initeditor: (row, cellvalue, editor, celltext, pressedkey) => {
                        // set the editor's current value. The callback is called each time the editor is displayed.
                        if (pressedkey) {
                            input.val(pressedkey);
                            input.selectLast();
                        }
                        else {
                            input.val(cellvalue);
                            input.selectAll();
                        }
                    },
                    geteditorvalue: (row, cellvalue, editor) => {
                        // return the editor's value.
                        return input.val();
                    }
                },
                {
                    text: 'Products', columntype: 'template', datafield: 'productname',
                    createeditor: (row, cellvalue, editor, cellText, width, height) => {
                        // construct the editor. 
                        editor.jqxDropDownList({
                            checkboxes: true, source: getEditorDataAdapter('productname'), displayMember: 'productname', valueMember: 'productname', width: width, height: height,
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
            ];

        return (
            <JqxGrid
                width={850} source={dataAdapter} editable={true}
                columns={columns} selectionmode={'singlecell'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
