import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';
import JqxNumberInput from '../../../jqwidgets-react/react_jqxnumberinput.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.top.on('checked', () => {
            this.refs.myGrid.everpresentrowactions('add reset');
        });
        this.refs.bottom.on('checked', () => {
            this.refs.myGrid.everpresentrowactions('addBottom reset');
        });
    }
    render() {
        let source =
            {
                localdata: generatedata(10),
                datafields:
                [
                    { name: 'name', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' }
                ],
                datatype: 'array'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let getSourceAdapter = (name) => {
            let source =
                {
                    localdata: generatedata(10),
                    datafields:
                    [
                        { name: 'name', type: 'string' },
                        { name: 'productname', type: 'string' }
                    ],
                    datatype: 'array'
                };
            let fields = new Array();
            fields.push(name);
            let dataAdapter = new $.jqx.dataAdapter(source, { autoBind: true, autoSort: true, uniqueDataFields: fields, autoSortField: name });
            return dataAdapter.records;
        }

        let input, dropDownList, DateTimeInput, NumberInput;

        let columns =
            [
                {
                    text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215,
                    createEverPresentRowWidget: (datafield, htmlElement, popup, addCallback) => {
                        let container = document.createElement('div');
                        htmlElement[0].appendChild(container);

                        input = ReactDOM.render(
                            <JqxInput style={{ border: 'none' }}
                                width={'100%'} height={30} source={getSourceAdapter('name')}
                                popupZIndex={999999} placeHolder={'Enter Name: '} displayMember={'name'}
                            />, container);

                        return container;
                    },
                    initEverPresentRowWidget: (datafield, htmlElement) => {
                    },
                    getEverPresentRowWidgetValue: (datafield, htmlElement, validate) => {
                        let value = input.val();
                        return value;
                    },
                    resetEverPresentRowWidgetValue: (datafield, htmlElement) => {
                        input.val('');
                    }
                },
                {
                    text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220,
                    createEverPresentRowWidget: (datafield, htmlElement, popup, addCallback) => {
                        let container = document.createElement('div');
                        htmlElement[0].appendChild(container);

                        dropDownList = ReactDOM.render(
                            <JqxDropDownList style={{ border: 'none' }}
                                width={'100%'} height={30} source={getSourceAdapter('productname')}
                                popupZIndex={999999} placeHolder={'Enter Product: '} displayMember={'productname'}
                            />, container);

                        return container;
                    },
                    getEverPresentRowWidgetValue: (datafield, htmlElement, validate) => {
                        let selectedItem = dropDownList.getSelectedItem();
                        if (!selectedItem)
                            return '';
                        let value = selectedItem.label;
                        return value;
                    },
                    resetEverPresentRowWidgetValue: (datafield, htmlElement) => {
                        dropDownList.clearSelection();
                    }
                },
                {
                    text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd',
                    createEverPresentRowWidget: (datafield, htmlElement, popup, addCallback) => {
                        let container = document.createElement('div');
                        htmlElement[0].appendChild(container);

                        DateTimeInput = ReactDOM.render(
                            <JqxDateTimeInput style={{ border: 'none' }}
                                width={'100%'} height={30} value={null}
                                popupZIndex={999999} placeHolder={'Enter Date: '}
                            />, container);

                        return container;
                    },
                    initEverPresentRowWidget: (datafield, htmlElement) => {
                    },
                    getEverPresentRowWidgetValue: (datafield, htmlElement, validate) => {
                        let value = DateTimeInput.val();
                        return value;
                    },
                    resetEverPresentRowWidgetValue: (datafield, htmlElement) => {
                        DateTimeInput.val(null);
                    }
                },
                {
                    text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right',
                    createEverPresentRowWidget: (datafield, htmlElement, popup, addCallback) => {
                        let container = document.createElement('div');
                        htmlElement[0].appendChild(container);

                        NumberInput = ReactDOM.render(
                            <JqxNumberInput style={{ border: 'none' }}
                                width={'100%'} height={30} decimalDigits={0} inputMode={'simple'}
                            />, container);

                        return container;
                    },
                    initEverPresentRowWidget: (datafield, htmlElement) => {
                    },
                    getEverPresentRowWidgetValue: (datafield, htmlElement, validate) => {
                        let value = NumberInput.val();
                        if (value == '') value = 0;
                        return parseInt(value);
                    },
                    resetEverPresentRowWidgetValue: (datafield, htmlElement) => {
                        NumberInput.val('');
                    }
                },
                { text: '', datafield: 'addButtonColumn', width: 50 },
                { text: '', datafield: 'resetButtonColumn', width: 50 }
            ];

        return (
            <div>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter} filterable={true}
                    showeverpresentrow={true} everpresentrowposition={'top'}
                    editable={true} columns={columns} everpresentrowactionsmode={'columns'}
                    selectionmode={'multiplecellsadvanced'}
                />
                <br />
                <JqxRadioButton ref='top' checked={true}>Add New Row to Top</JqxRadioButton>
                <JqxRadioButton ref='bottom'>Add New Row to Bottom</JqxRadioButton>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
