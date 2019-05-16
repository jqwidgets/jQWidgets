import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import { generatedata } from './generatedata';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';

import 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class App extends React.PureComponent<{}, IDataTableProps> {

    constructor(props: {}) {
        super(props);

        const data: any[] = generatedata(200, false);

        const source: any = {
            dataFields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'date', type: 'date' }
            ],
            dataType: 'array',
            localData: data
        };

        const getEditorDataAdapter = (dataField: any): any => {
            const editorSource = {            
                dataFields: [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'date', type: 'date' }
                ],
                dataType: 'array',
                localData: data
            };
            const dataAdapter = new jqx.dataAdapter(editorSource, { uniqueDataFields: [dataField] });

            return dataAdapter;
        };

        const columns: IDataTableProps['columns'] = [
            {
                columnType: 'template',
                createEditor: (row: any, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {

                    ReactDOM.render(
                        <JqxInput theme={'material-purple'} style={{ paddingLeft: '4px', border: 'none' }} width={width} height={height}
                            source={getEditorDataAdapter('firstname')} displayMember={'firstname'} />,
                        editor[0]
                    );  
                    editor.find('input')[0].style.paddingLeft = '4px';
                    editor.find('input')[0].style.border = 'none';
                },
                dataField: 'firstname', 
                getEditorValue: (row: any, cellvalue: any, editor: any): void => {
                    // return the editor's value.
                    return editor.find('input').val();
                },
                initEditor: (row: any, cellvalue: any, editor: any, celltext: any, width: any, height: any): void => {
                    // set the editor's current value. The callback is called each time the editor is displayed.
                    const inputField = editor.find('input');
                    inputField.val(cellvalue);
                },
                text: 'First Name',
                width: 180
            },
            {
                columnType: 'template',
                createEditor: (row: any, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
                    // construct the editor.

                    ReactDOM.render(
                        <JqxInput theme={'material-purple'}
                            width={width} height={height}
                            source={getEditorDataAdapter('lastname')} displayMember={'lastname'} />,
                        editor[0]
                    );   
                    editor.find('input')[0].style.paddingLeft = '4px';
                    editor.find('input')[0].style.border = 'none';
                },
                dataField: 'lastname',
                getEditorValue: (row: any, cellvalue: any, editor: any): void => {
                    // return the editor's value.
                    return editor.find('input').val();
                },
                initEditor: (row: any, cellvalue: any, editor: any, celltext: any, width: any, height: any): void => {
                    const inputField = editor.find('input');
                    inputField.val(cellvalue);
                },
                text: 'Last Name',
                width: 180
            },
            {
                columnType: 'template',  
                createEditor: (row: any, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
                    // construct the editor. 
                    editor.jqxDropDownList({ source: getEditorDataAdapter('productname'), displayMember: 'productname', valueMember: 'productname', width, height });
                },
                dataField: 'productname',
                getEditorValue: (row: any, cellvalue: any, editor: any): void => {
                    // return the editor's value.
                    return editor.val();
                },
                initEditor: (row: any, cellvalue: any, editor: any, celltext: any, width: any, height: any): void => {
                    // set the editor's current value. The callback is called each time the editor is displayed.
                    editor.jqxDropDownList({ width, height });
                    editor.val(cellvalue);
                },
                text: 'Products'
            },
            {
                columnType: 'custom',
                createEditor: (row: any, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
                    // construct the editor. 
                    editor.jqxSlider({ step: 1, mode: 'fixed', tooltip: true, showTicks: false, min: 0, max: 30, width, height });
                },
                dataField: 'quantity',
                getEditorValue: (row: any, cellvalue: any, editor: any): void => {
                    // return the editor's value.
                    return editor.val();
                },
                initEditor: (row: any, cellvalue: any, editor: any, celltext: any, width: any, height: any): void => {
                    // set the editor's current value. The callback is called each time the editor is displayed.
                    let value = parseInt(cellvalue, 10);
                    if (isNaN(value)) {
                        value = 0;
                    }
                    editor.jqxSlider('setValue', value);
                },
                text: 'Quantity',
                width: 200
            } 
        ];

        this.state = {
            columns,
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <JqxDataTable theme={'material-purple'}
                // @ts-ignore 
                width={'100%'} source={this.state.source}
                columns={this.state.columns} editable={true} pageable={true}
                sortable={true} pagerButtonsCount={10} autoRowHeight={false} />
        );
    }
}

export default App;