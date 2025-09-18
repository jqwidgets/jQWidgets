import * as React from 'react';
import { useRef, useState } from 'react';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxGrid, { jqx, IGridProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const myDropDownList = useRef<JqxDropDownList>(null);
    const myInput1 = useRef<JqxInput>(null);
    const myInput2 = useRef<JqxInput>(null);
    const selectedCell = useRef<HTMLSpanElement>(null);
    const unselectedCell = useRef<HTMLSpanElement>(null);

    const dropDownSource1: IDropDownListProps['source'] = ['none', 'single cell', 'multiple cells', 'multiple cells extended', 'multiple cells advanced'];
    const dropDownSource2: IDropDownListProps['source'] = ['First Name', 'Last Name', 'Product Name', 'Quantity', 'Unit Price', 'Total'];
    const columns: IGridProps['columns'] = [
        { text: 'First Name', datafield: 'firstname', width: 200 },
        { text: 'Last Name', datafield: 'lastname', width: 200 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ];
    const [enablehover, setEnableHover] = useState(true);

    const source = React.useMemo(() => {
        const src: any = {
            datafields: [
                { name: 'id', type: 'number' },
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(200, false),
        };
        return new jqx.dataAdapter(src);
    }, []);

    const scrollToBtnOnClick = () => {
        const index = parseInt(myInput1.current!.getOptions('value'), 10);
        if (!isNaN(index)) {
            myGrid.current!.ensurerowvisible(index);
        }
    };

    const clearBtnOnClick = () => {
        myGrid.current!.clearselection();
    };

    const selectBtnOnClick = () => {
        const index = parseInt(myInput2.current!.getOptions('value'), 10);
        const columnindex = myDropDownList.current!.getSelectedIndex();
        const columndatafield = myGrid.current!.getcolumnat(columnindex).datafield;
        if (!isNaN(index)) {
            myGrid.current!.selectcell(index, columndatafield);
        }
    };

    const myDropDownListOnSelect = (event: any) => {
        const index = event.args.index;
        let newSelectionMode: IGridProps['selectionmode'];
        switch (index) {
            case 0:
                newSelectionMode = 'none';
                break;
            case 1:
                newSelectionMode = 'singlecell';
                break;
            case 2:
                newSelectionMode = 'multiplecells';
                break;
            case 3:
                newSelectionMode = 'multiplecellsextended';
                break;
            case 4:
                newSelectionMode = 'multiplecellsadvanced';
                break;
        }
        myGrid.current!.setOptions({ selectionmode: newSelectionMode });
    };

    const myCheckBoxOnChange = (event: any) => {
        myGrid.current!.setOptions({ enablehover: event.args.checked });
        setEnableHover(event.args.checked);
    };

    const myGridOnCellSelect = (event: any) => {
        const columnheader = myGrid.current!.getcolumn(event.args.datafield).text;
        if (selectedCell.current) selectedCell.current.innerHTML = 'Row: ' + event.args.rowindex + ', Column: ' + columnheader;
    };

    const myGridOnCellUnselect = (event: any) => {
        const columnheader = myGrid.current!.getcolumn(event.args.datafield).text;
        if (unselectedCell.current) unselectedCell.current.innerHTML = 'Row: ' + event.args.rowindex + ', Column: ' + columnheader;
    };

    return (
        <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                onCellselect={myGridOnCellSelect}
                onCellunselect={myGridOnCellUnselect}
                // @ts-ignore
                width={'100%'}
                source={source}
                columns={columns}
                selectionmode={'singlecell'}
                enablehover={enablehover}
            />
            <div style={{ marginTop: '20px' }}>
                <div style={{ float: 'left' }}>
                    <div>
                        <JqxInput theme={'material-purple'} ref={myInput1} style={{ float: 'left', marginRight: '5px' }} width={50} height={20} value={100} />
                        <JqxButton theme={'material-purple'} style={{ float: 'left' }} onClick={scrollToBtnOnClick}>Scroll to Row</JqxButton>
                    </div>
                    <div style={{ clear: 'both' }} />
                    <div style={{ marginTop: '10px' }} />
                    <JqxCheckBox theme={'material-purple'} checked={true} onChange={myCheckBoxOnChange}> Enable Hover</JqxCheckBox>
                    <div style={{ marginTop: '10px' }}>
                        <span>Selection Mode</span>
                        <JqxDropDownList
                            theme={'material-purple'}
                            style={{ marginTop: '5px' }}
                            onSelect={myDropDownListOnSelect}
                            width={120}
                            height={25}
                            selectedIndex={1}
                            dropDownWidth={200}
                            autoDropDownHeight={true}
                            source={dropDownSource1}
                        />
                    </div>
                </div>
                <div style={{ float: 'left', marginLeft: '20px' }}>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td align={'right'}>Row</td>
                                    <td>
                                        <JqxInput theme={'material-purple'} ref={myInput2} style={{ float: 'left' }} width={50} value={0} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Column:</td>
                                    <td>
                                        <JqxDropDownList
                                            theme={'material-purple'}
                                            ref={myDropDownList}
                                            width={120}
                                            height={25}
                                            selectedIndex={1}
                                            autoDropDownHeight={true}
                                            source={dropDownSource2}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>
                                        <JqxButton theme={'material-purple'} style={{ float: 'left', marginRight: '5px' }} onClick={clearBtnOnClick}>Clear Selection</JqxButton>
                                    </td>
                                    <td>
                                        <JqxButton theme={'material-purple'} style={{ float: 'left' }} onClick={selectBtnOnClick}>Select Cell</JqxButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={{ float: 'left', marginLeft: '20px' }}>
                    <span>Selection Log:</span>
                    <div style={{ marginTop: '10px' }}>
                        <span>Selected Cell:</span>
                        <span ref={selectedCell} />
                        <br />
                        <span>Unselected Cell:</span>
                        <span ref={unselectedCell} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;