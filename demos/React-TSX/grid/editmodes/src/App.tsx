import * as React from 'react';
 


import './App.css';

import { generatedata } from './generatedata';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);
        this.myDropDownListOnSelect = this.myDropDownListOnSelect.bind(this);
        this.firstnameOnChange = this.firstnameOnChange.bind(this);
        this.lastnameOnChange = this.lastnameOnChange.bind(this);
        this.quantityOnChange = this.quantityOnChange.bind(this);
        this.productnameOnChange = this.productnameOnChange.bind(this);
        this.availableOnChange = this.availableOnChange.bind(this);

        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(200, false)
        };

        this.state = {
            columns: [
                { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 90 },
                { text: 'Last Name', datafield: 'lastname', width: 90 },
                { text: 'Product', datafield: 'productname' },
                { text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right' },
                { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>

                <JqxGrid theme={'material-purple'} ref={this.myGrid}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    editable={true} editmode={'click'} selectionmode={'singlecell'} />

                <div style={{ marginTop: '20px' }}>
                    <div style={{ float: 'left', marginTop: '10px' }}>
                        <span>Edit Mode:</span>

                        <JqxDropDownList theme={'material-purple'} onSelect={this.myDropDownListOnSelect}
                            width={150} height={25} selectedIndex={0}
                            dropDownWidth={150} autoDropDownHeight={true}
                            source={['Click', 'Double-Click', 'Selected Cell Click']} />

                    </div>
                    <div style={{ float: 'left', marginLeft: '20px', marginTop: '10px' }}>
                        <span>Editable Columns:</span>
                        <div>
                            <div style={{ float: 'left' }}>
                                <JqxCheckBox theme={'material-purple'} onChange={this.firstnameOnChange} checked={true}>First Name</JqxCheckBox>
                                <JqxCheckBox theme={'material-purple'} onChange={this.lastnameOnChange} checked={true}>Last Name</JqxCheckBox>
                                <JqxCheckBox theme={'material-purple'} onChange={this.quantityOnChange} checked={true}>Quantity</JqxCheckBox>
                            </div>
                            <div style={{ float: 'left', marginLeft: '20px' }}>
                                <JqxCheckBox theme={'material-purple'} onChange={this.productnameOnChange} checked={true}>Product</JqxCheckBox>
                                <JqxCheckBox theme={'material-purple'} onChange={this.availableOnChange} checked={true}> Available</JqxCheckBox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private myDropDownListOnSelect(event: any): void {
        const index = event.args.index;
        const editmode = index === 0 ? 'click' : index === 1 ? 'dblclick' : 'selectedcell';
        this.myGrid.current!.setOptions({ editmode });
    };

    private firstnameOnChange(event: any): void {
        this.myGrid.current!.setcolumnproperty('firstname', 'editable', event.args.checked);
    };

    private lastnameOnChange(event: any): void {
        this.myGrid.current!.setcolumnproperty('lastname', 'editable', event.args.checked);
    };

    private quantityOnChange(event: any): void {
        this.myGrid.current!.setcolumnproperty('quantity', 'editable', event.args.checked);
    };

    private productnameOnChange(event: any): void {
        this.myGrid.current!.setcolumnproperty('productname', 'editable', event.args.checked);
    };

    private availableOnChange(event: any): void {
        this.myGrid.current!.setcolumnproperty('available', 'editable', event.args.checked);
    };
}

export default App;