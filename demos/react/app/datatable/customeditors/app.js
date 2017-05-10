import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    render() {
        let data = generatedata(200);

        let source =
            {
                localData: data,
                datatype: 'array',
                updateRow: (rowId, rowData, commit) => {
                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failder.
                    commit(true);
                },
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

        let dataAdapter = new $.jqx.dataAdapter(source);

        let getEditorDataAdapter = (datafield) => {
            let source =
                {
                    localData: data,
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
            let dataAdapter = new $.jqx.dataAdapter(source, { uniqueDataFields: [datafield] });
            return dataAdapter;
        }

        let columns =
            [
                {
                    text: 'First Name', columntype: 'template', datafield: 'firstname', width: 180,
                    createEditor: (row, cellvalue, editor, cellText, width, height) => {
                        // construct the editor.
                        let inputElement = $('<input style="padding-left: 4px; border: none;"/>').appendTo(editor);
                        inputElement.jqxInput({ source: getEditorDataAdapter('firstname'), displayMember: 'firstname', width: width, height: height });
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
                        let inputElement = $('<input  style="padding-left: 4px; border: none;"/>').prependTo(editor);
                        inputElement.jqxInput({ source: getEditorDataAdapter('lastname'), displayMember: 'lastname', width: width, height: height });
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
                            source: getEditorDataAdapter('productname'), displayMember: 'productname', valueMember: 'productname', width: width, height: height
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
            ];

        return (
            <JqxDataTable
                width={850} source={dataAdapter} editable={true}
                pageable={true} sortable={true} columns={columns}
                pagerButtonsCount={10} autoRowHeight={false}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
