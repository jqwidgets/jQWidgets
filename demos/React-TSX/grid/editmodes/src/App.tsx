import * as React from 'react';
import './App.css';
import { generatedata } from './generatedata';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const myGrid = React.useRef<JqxGrid>(null);

    const source: any = React.useMemo(() => ({
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
    }), []);

    const [columns] = React.useState([
        { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 90 },
        { text: 'Last Name', datafield: 'lastname', width: 90 },
        { text: 'Product', datafield: 'productname' },
        { text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right' },
        { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 }
    ]);

    const [dataAdapter] = React.useState(new jqx.dataAdapter(source));

    const myDropDownListOnSelect = React.useCallback((event: any) => {
        const index = event.args.index;
        const editmode = index === 0 ? 'click' : index === 1 ? 'dblclick' : 'selectedcell';
        myGrid.current!.setOptions({ editmode });
    }, []);

    const firstnameOnChange = React.useCallback((event: any) => {
        myGrid.current!.setcolumnproperty('firstname', 'editable', event.args.checked);
    }, []);

    const lastnameOnChange = React.useCallback((event: any) => {
        myGrid.current!.setcolumnproperty('lastname', 'editable', event.args.checked);
    }, []);

    const quantityOnChange = React.useCallback((event: any) => {
        myGrid.current!.setcolumnproperty('quantity', 'editable', event.args.checked);
    }, []);

    const productnameOnChange = React.useCallback((event: any) => {
        myGrid.current!.setcolumnproperty('productname', 'editable', event.args.checked);
    }, []);

    const availableOnChange = React.useCallback((event: any) => {
        myGrid.current!.setcolumnproperty('available', 'editable', event.args.checked);
    }, []);

    return (
        <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                // @ts-ignore
                width={'100%'}
                source={dataAdapter}
                columns={columns}
                editable={true}
                editmode={'click'}
                selectionmode={'singlecell'}
            />
            <div style={{ marginTop: '20px' }}>
                <div style={{ float: 'left', marginTop: '10px' }}>
                    <span>Edit Mode:</span>
                    <JqxDropDownList
                        theme={'material-purple'}
                        onSelect={myDropDownListOnSelect}
                        width={150}
                        height={25}
                        selectedIndex={0}
                        dropDownWidth={150}
                        autoDropDownHeight={true}
                        source={['Click', 'Double-Click', 'Selected Cell Click']}
                    />
                </div>
                <div style={{ float: 'left', marginLeft: '20px', marginTop: '10px' }}>
                    <span>Editable Columns:</span>
                    <div>
                        <div style={{ float: 'left' }}>
                            <JqxCheckBox theme={'material-purple'} onChange={firstnameOnChange} checked={true}>First Name</JqxCheckBox>
                            <JqxCheckBox theme={'material-purple'} onChange={lastnameOnChange} checked={true}>Last Name</JqxCheckBox>
                            <JqxCheckBox theme={'material-purple'} onChange={quantityOnChange} checked={true}>Quantity</JqxCheckBox>
                        </div>
                        <div style={{ float: 'left', marginLeft: '20px' }}>
                            <JqxCheckBox theme={'material-purple'} onChange={productnameOnChange} checked={true}>Product</JqxCheckBox>
                            <JqxCheckBox theme={'material-purple'} onChange={availableOnChange} checked={true}> Available</JqxCheckBox>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;