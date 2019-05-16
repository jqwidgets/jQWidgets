import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class App extends React.PureComponent<{}, IGridProps> {

    private myInput1 = React.createRef<JqxInput>();
    private myInput2 = React.createRef<JqxInput>();

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'date', type: 'date' }
            ],
            datatype: 'array',
            localdata: generatedata(200, false),
            updaterow: (rowid: any, rowdata: any, commit: any): void => {
                // synchronize with the server - send update command   
                commit(true);
            }
        };

        const getEditorDataAdapter = (datafield: string): any => {
            const dataAdapter = new jqx.dataAdapter(source, { uniqueDataFields: [datafield] });
            return dataAdapter;
        };

        const columns: any[] = [
            {
                columntype: 'template', 
                createeditor: (row: number, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {

                    ReactDOM.render(
                        <JqxInput theme={'material-purple'} ref={this.myInput1} width={width} height={height} displayMember={'firstname'} source={getEditorDataAdapter('firstname')} />,
                        editor[0]
                    );
                },
                datafield: 'firstname',              
                geteditorvalue: (row: number, cellvalue: any, editor: any): void => {
                    // return the editor's value
                    return this.myInput1.current!.getOptions('value');
                },
                initeditor: (row: number, cellvalue: any, editor: any, celltext: any, pressedkey: any): void => {
                    // set the editor's current value. The callback is called each time the editor is displayed. 
                    if (pressedkey) {
                        this.myInput1.current!.val(pressedkey);
                    }
                    else {
                        this.myInput1.current!.val(cellvalue);
                    }
                    this.myInput1.current!.selectAll();
                },
                text: 'First Name', 
                width: 80
            },
            {
                columntype: 'template',
                createeditor: (row: number, cellvalue: any, editor: any, cellText: any, width: any, height: any) => {

                    ReactDOM.render(
                        <JqxInput theme={'material-purple'} ref={this.myInput2} width={width} height={height} displayMember={'lastname'} source={getEditorDataAdapter('lastname')} />,
                        editor[0]
                    );
                },
                datafield: 'lastname', 
                geteditorvalue: (row: number, cellvalue: any, editor: any): void => {
                    // return the editor's value.
                    return this.myInput2.current!.getOptions('value');
                },
                initeditor: (row: number, cellvalue: any, editor: any, celltext: any, pressedkey: any): void => {
                    // set the editor's current value. The callback is called each time the editor is displayed.
                    if (pressedkey) {
                        this.myInput2.current!.val(pressedkey);                      
                    }
                    else {
                        this.myInput2.current!.val(cellvalue);
                    }
                    this.myInput2.current!.selectAll();
                },
                text: 'Last Name', 
                width: 80
            },
            {
                columntype: 'template',
                createeditor: (row: number, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
                    // construct the editor. 
                    editor.jqxDropDownList({
                        checkboxes: true, displayMember: 'productname', height,
                        selectionRenderer: () => {
                            return '<span style="top: 4px; position: relative;">Please Choose:</span>';
                        },
                        source: getEditorDataAdapter('productname'),
                        valueMember: 'productname',
                        width
                    });
                },
                datafield: 'productname',
                geteditorvalue: (row: number, cellvalue: any, editor: any): void => {
                    // return the editor's value.
                    return editor.val();
                },
                initeditor: (row: number, cellvalue: any, editor: any, celltext: any, pressedkey: any): void => {
                    // set the editor's current value. The callback is called each time the editor is displayed.
                    const items = editor.jqxDropDownList('getItems');
                    editor.jqxDropDownList('uncheckAll');
                    const values = cellvalue.split(/,\s*/);
                    for (const value of values) {
                        for (let i = 0; i < items.length; i++) {
                            if (items[i].label === value) {
                                editor.jqxDropDownList('checkIndex', i);
                            }
                        }
                    }
                },
                text: 'Products'
            },
            {
                columntype: 'custom', 
                createeditor: (row: number, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
                    // construct the editor. 
                    editor.css('margin-top', '2px');
                    editor.jqxSlider({ step: 1, mode: 'fixed', showTicks: false, min: 0, max: 30, width, height });
                },
                datafield: 'quantity',
                geteditorvalue: (row: number, cellvalue: any, editor: any): void => {
                    // return the editor's value.
                    return editor.val();
                },
                initeditor: (row: number, cellvalue: any, editor: any, celltext: any, pressedkey: any): void => {
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
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} source={this.state.source} columns={this.state.columns}
                editable={true} selectionmode={'singlecell'} />
        );
    }
}

export default App;