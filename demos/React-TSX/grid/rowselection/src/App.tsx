import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxGrid, { jqx, IGridProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';

const dropDownSource = ['none', 'single row', 'multiple rows', 'multiple rows extended'];

const columns: IGridProps['columns'] = [
    { text: 'First Name', datafield: 'firstname', width: 200 },
    { text: 'Last Name', datafield: 'lastname', width: 200 },
    { text: 'Product', datafield: 'productname', width: 180 },
    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
    { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
];

const source: any = {
    datafields: [
        { name: 'id', type: 'number' },
        { name: 'firstname', type: 'string' },
        { name: 'lastname', type: 'string' },
        { name: 'productname', type: 'string' },
        { name: 'quantity', type: 'number' },
        { name: 'price', type: 'number' },
        { name: 'total', type: 'number' }
    ],
    datatype: 'array',
    localdata: generatedata(200, false)
};

const dataAdapter = new jqx.dataAdapter(source);

function App() {
    const myGrid = useRef<JqxGrid>(null);
    const mySelectRowBtn = useRef<JqxButton>(null);
    const myInput1 = useRef<JqxInput>(null);
    const myInput2 = useRef<JqxInput>(null);
    const selectedRowIndex = useRef<HTMLSpanElement>(null);
    const unselectedRowIndex = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (myGrid.current) {
            myGrid.current.selectrow(2);
        }
    }, []);

    const scrollToBtnOnClick = () => {
        const index = parseInt(myInput1.current!.getOptions('value'), 10);
        if (!isNaN(index)) {
            myGrid.current!.ensurerowvisible(index);
        }
    };

    const selectRowBtnOnClick = () => {
        const index = parseInt(myInput2.current!.getOptions('value'), 10);
        if (!isNaN(index)) {
            myGrid.current!.selectrow(index);
        }
    };

    const clearSelectionBtnOnClick = () => {
        myGrid.current!.clearselection();
    };

    const enableSelectionOnSelect = (event: any) => {
        const index = event.args.index;
        if (mySelectRowBtn.current) {
            mySelectRowBtn.current.setOptions({ disabled: false });
        }
        let newSelectionMode: IGridProps['selectionmode'];
        switch (index) {
            case 0:
                newSelectionMode = 'none';
                if (mySelectRowBtn.current) {
                    mySelectRowBtn.current.setOptions({ disabled: true });
                }
                break;
            case 1:
                newSelectionMode = 'singlerow';
                break;
            case 2:
                newSelectionMode = 'multiplerows';
                break;
            case 3:
                newSelectionMode = 'multiplerowsextended';
                break;
        }
        myGrid.current!.setOptions({ selectionmode: newSelectionMode });
    };

    const enableHoverOnChange = (event: any) => {
        myGrid.current!.setOptions({ enablehover: event.args.checked });
    };

    const myGridOnRowSelect = (event: any) => {
        if (selectedRowIndex.current) {
            selectedRowIndex.current.innerHTML = event.args.rowindex;
        }
    };

    const myGridOnRowUnselect = (event: any) => {
        if (unselectedRowIndex.current) {
            unselectedRowIndex.current.innerHTML = event.args.rowindex;
        }
    };

    return (
        <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                onRowselect={myGridOnRowSelect}
                onRowunselect={myGridOnRowUnselect}
                width={'100%'}
                height={350}
                source={dataAdapter}
                columns={columns}
            />

            <div style={{ marginTop: '20px' }}>
                <div style={{ float: 'left' }}>
                    <div>
                        <JqxInput
                            theme={'material-purple'}
                            ref={myInput1}
                            width={50}
                            height={20}
                            value={100}
                        />
                        <JqxButton
                            theme={'material-purple'}
                            style={{ display: 'inline-block', marginLeft: '5px' }}
                            onClick={scrollToBtnOnClick}
                            width={100}
                        >
                            Scroll to Row
                        </JqxButton>
                    </div>
                    <div style={{ clear: 'both' }} />
                    <div style={{ marginTop: '10px' }}>
                        <JqxInput
                            theme={'material-purple'}
                            ref={myInput2}
                            width={50}
                            value={0}
                        />
                        <JqxButton
                            theme={'material-purple'}
                            ref={mySelectRowBtn}
                            style={{ display: 'inline-block', marginLeft: '5px' }}
                            onClick={selectRowBtnOnClick}
                        >
                            Select Row
                        </JqxButton>
                        <JqxButton
                            theme={'material-purple'}
                            style={{ display: 'inline-block', marginLeft: '5px' }}
                            onClick={clearSelectionBtnOnClick}
                        >
                            Clear Selection
                        </JqxButton>
                    </div>
                    <div style={{ clear: 'both' }} />
                    <div style={{ marginTop: '10px' }}>
                        <JqxCheckBox
                            theme={'material-purple'}
                            checked={true}
                            onChange={enableHoverOnChange}
                        >
                            Enable Hover
                        </JqxCheckBox>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <span>Selection Mode:</span>
                        <JqxDropDownList
                            theme={'material-purple'}
                            style={{ marginTop: '5px' }}
                            onSelect={enableSelectionOnSelect}
                            width={120}
                            height={25}
                            selectedIndex={1}
                            dropDownWidth={200}
                            autoDropDownHeight={true}
                            source={dropDownSource}
                        />
                        <div style={{ marginTop: '10px', fontSize: '12px', fontFamily: 'Verdana' }}>
                            Selection Modes:
                            <ul>
                                <li>'none' - disables the selection. Selection is possible only through the API.</li>
                                <li>'singlerow' - full row selection. Each click changes the selected row.</li>
                                <li>'multiplerows' - each click selects a new row. Click on a selected row unselects it.</li>
                                <li>'multiplerowsextended' - users can select multiple rows with drag and drop or<br /> by clicking on rows while holding Ctrl or Shift.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{ clear: 'both', fontSize: '12px', fontFamily: 'Verdana' }}>
                    <span>Selection Log:</span>
                    <div style={{ marginTop: '10px' }}>
                        <span>Selected Row Index:</span>
                        <span ref={selectedRowIndex} />
                        <br />
                        <span>Unselected Row Index:</span>
                        <span ref={unselectedRowIndex} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;