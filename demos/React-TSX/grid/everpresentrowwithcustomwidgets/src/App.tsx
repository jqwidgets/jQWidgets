import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import { generatedata } from './generatedata';
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();
    private myInput = React.createRef<JqxInput>();
    private myDropDownList = React.createRef<JqxDropDownList>();
    private myDateTimeInput = React.createRef<JqxDateTimeInput>();
    private myNumberInput = React.createRef<JqxNumberInput>();

    constructor(props: {}) {
        super(props);
        this.topRadioBtnOnChecked = this.topRadioBtnOnChecked.bind(this);
        this.bottomRadioBtnOnChecked = this.bottomRadioBtnOnChecked.bind(this);

        const source: any = {
            datafields: [
                { name: 'name', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'date', type: 'date' },
                { name: 'quantity', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(10, false)
        };

        const getSourceAdapter = (name: any): any => {
            const widgetSource = {
                datafields: [
                    { name: 'name', type: 'string' },
                    { name: 'productname', type: 'string' }
                ],
                datatype: 'array',
                localdata: generatedata(10, false)
            };
            const fields = [];
            fields.push(name);
            const dataAdapter = new jqx.dataAdapter(widgetSource, { autoBind: true, autoSort: true, uniqueDataFields: fields, autoSortField: name });
            return dataAdapter.records;
        };

        const columns: IGridProps['columns'] = [
            {
                columntype: 'textbox',
                createeverpresentrowwidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): void => {
                    const element = htmlElement as any;
                    ReactDOM.render(
                        <JqxInput theme={'material-purple'} ref={this.myInput} style={{ border: 'none' }}
                            width={'100%'} height={30} source={getSourceAdapter('name')}
                            popupZIndex={999999} placeHolder={'Enter Name: '} displayMember={'name'} />,
                        element[0],
                        () => { element[0].getElementsByTagName('input')[0].style.border = 'none'; }
                    );
                },
                datafield: 'name',
                filtertype: 'input',
                geteverpresentrowwidgetvalue: (datafield: string, htmlElement: HTMLElement): any => {
                    const value = this.myInput.current!.getOptions('value');
                    return value;
                },
                reseteverpresentrowwidgetvalue: (datafield: string, htmlElement: HTMLElement): void => {
                    this.myInput.current!.setOptions({ value: '' });
                },
                text: 'Name',
                width: 215
            },
            {
                createeverpresentrowwidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): void => {
                    const element = htmlElement as any;
                    ReactDOM.render(
                        <JqxDropDownList theme={'material-purple'} ref={this.myDropDownList} style={{ border: 'none' }}
                            width={'100%'} height={30} source={getSourceAdapter('productname')}
                            popupZIndex={999999} placeHolder={'Enter Product: '} displayMember={'productname'} />,
                        element[0]
                    );
                },
                datafield: 'productname',
                geteverpresentrowwidgetvalue: (datafield: string, htmlElement: HTMLElement): any => {
                    const selectedItem = this.myDropDownList.current!.getSelectedItem();
                    if (!selectedItem) {
                        return '';
                    }
                    const value = selectedItem.label;
                    return value;
                },
                reseteverpresentrowwidgetvalue: (datafield: string, htmlElement: HTMLElement): void => {
                    this.myDropDownList.current!.clearSelection();
                },
                text: 'Product',
                width: 220
            },
            {
                cellsalign: 'right',
                cellsformat: 'd',
                createeverpresentrowwidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): void => {
                    const element = htmlElement as any;
                    ReactDOM.render(
                        <JqxDateTimeInput theme={'material-purple'} ref={this.myDateTimeInput} style={{ border: 'none' }}
                            width={'100%'} height={30} value={null}
                            popupZIndex={999999} placeHolder={'Enter Date: '} />,
                        element[0]
                    );
                },
                datafield: 'date',
                filtertype: 'range',
                geteverpresentrowwidgetvalue: (datafield: string, htmlElement: HTMLElement): any => {
                    const value = this.myDateTimeInput.current!.getOptions('value');
                    return value;
                },
                reseteverpresentrowwidgetvalue: (datafield: string, htmlElement: HTMLElement): void => {
                    this.myDateTimeInput.current!.setOptions({ value: null });
                },
                text: 'Ship Date',
                width: 210
            },
            {
                cellsalign: 'right',
                createeverpresentrowwidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): void => {
                    const element = htmlElement as any;
                    ReactDOM.render(
                        <JqxNumberInput theme={'material-purple'} ref={this.myNumberInput} style={{ border: 'none' }}
                            width={'100%'} height={30} decimalDigits={0} inputMode={'simple'} />,
                        element[0]
                    );
                },
                datafield: 'quantity',
                filtertype: 'number',
                geteverpresentrowwidgetvalue: (datafield: string, htmlElement: HTMLElement): any => {
                    const value = this.myNumberInput.current!.val();
                    return value;
                },
                reseteverpresentrowwidgetvalue: (datafield: string, htmlElement: HTMLElement): void => {
                    this.myNumberInput.current!.setOptions({ value: '' });
                },
                text: 'Qty.'
            },
            { text: '', datafield: 'addButtonColumn', width: 50 },
            { text: '', datafield: 'resetButtonColumn', width: 50 }
        ];

        this.state = {
            columns,
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'} ref={this.myGrid}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    filterable={true} showeverpresentrow={true} editable={true} everpresentrowposition={'top'}
                    everpresentrowactionsmode={'columns'} selectionmode={'multiplecellsadvanced'} />
                <br />
                <JqxRadioButton theme={'material-purple'} onChecked={this.topRadioBtnOnChecked} checked={true}>Add New Row to Top</JqxRadioButton>
                <JqxRadioButton theme={'material-purple'} onChecked={this.bottomRadioBtnOnChecked}>Add New Row to Botton</JqxRadioButton>
            </div>
        );
    }

    private topRadioBtnOnChecked(): void {
        this.myGrid.current!.setOptions({ everpresentrowactions: 'add reset' });
    };

    private bottomRadioBtnOnChecked(): void {
        this.myGrid.current!.setOptions({ everpresentrowactions: 'addBottom reset' });
    };
}

export default App;