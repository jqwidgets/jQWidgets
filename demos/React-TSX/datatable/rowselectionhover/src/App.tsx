import * as React from 'react';

import { useRef, useState, useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';

const App = () => {
    const myDataTable = useRef<JqxDataTable>(null);
    const myInput = useRef<JqxInput>(null);
    const selectedRows = useRef<HTMLDivElement>(null);

    const [selectedIndex, setSelectedIndex] = useState(1);
    const [selectionMode, setSelectionMode] = useState<IDataTableProps['selectionMode']>('multipleRows');

    const columns: IDataTableProps['columns'] = useMemo(
        () => [
            { text: 'First Name', dataField: 'firstname', width: 200 },
            { text: 'Last Name', dataField: 'lastname', width: 200 },
            { text: 'Product', dataField: 'productname', width: 180 },
            { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
            { text: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right' }
        ],
        []
    );

    const source = useMemo(() => {
        const src = {
            dataFields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' }
            ],
            dataType: 'array',
            localData: generatedata(15, false),
        };
        // @ts-ignore
        return new jqx.dataAdapter(src);
    }, []);

    const dropDownOnChange = (event: any) => {
        const index = event.args.index;
        let newSelectionMode: IDataTableProps['selectionMode'] = selectionMode;
        if (index === 0) {
            newSelectionMode = 'singleRow';
        } else if (index === 1) {
            newSelectionMode = 'multipleRows';
        }
        setSelectedIndex(index);
        setSelectionMode(newSelectionMode);
    };

    const rowSelectBtnOnClick = () => {
        const index = parseInt(myInput.current!.getOptions('value'), 10);
        myDataTable.current!.selectRow(index);
    };

    const clearSelectionBtnOnClick = () => {
        myDataTable.current!.clearSelection();
    };

    const selectionInfo = () => {
        const selection = myDataTable.current!.getSelection();
        let selectedRowsText = '<br/>Selected Row Indexes:<br/>';
        if (selection && selection.length > 0) {
            const rows = myDataTable.current!.getRows();
            for (let i = 0; i < selection.length; i++) {
                const rowData = selection[i];
                selectedRowsText += rows.indexOf(rowData);
                if (i < selection.length - 1) {
                    selectedRowsText += ', ';
                }
                if (i > 1 && i % 8 === 0) {
                    selectedRowsText += '<br/>';
                }
            }
        }
        if (selectedRows.current) {
            selectedRows.current.innerHTML = selectedRowsText;
        }
    };

    return (
        <div>
            <JqxDataTable
                theme={'material-purple'}
                ref={myDataTable}
                onRowSelect={selectionInfo}
                onRowUnselect={selectionInfo}
                // @ts-ignore
                width={'100%'}
                source={source}
                columns={columns}
                altRows={true}
                selectionMode={selectionMode}
            />
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <div><strong>Settings</strong></div>
                Select Row:
                <JqxInput
                    theme={'material-purple'}
                    ref={myInput}
                    width={60}
                    height={30}
                    value={0}
                />
                <br />
                <br />
                <JqxButton
                    theme={'material-purple'}
                    style={{ float: 'left' }}
                    onClick={rowSelectBtnOnClick}
                    width={80}
                    height={18}
                >
                    Select
                </JqxButton>
                <JqxButton
                    theme={'material-purple'}
                    style={{ float: 'left', marginLeft: '5px' }}
                    onClick={clearSelectionBtnOnClick}
                    width={135}
                    height={18}
                >
                    Clear Selection
                </JqxButton>
                <div style={{ clear: 'both' }} />
                <div ref={selectedRows} style={{ marginTop: '10px' }} />
                <br />
                <div>Selection Mode:</div>
                <JqxDropDownList
                    theme={'material-purple'}
                    onChange={dropDownOnChange}
                    height={30}
                    source={['Single Row', 'Multiple Rows']}
                    selectedIndex={selectedIndex}
                    autoDropDownHeight={true}
                />
            </div>
        </div>
    );
};

export default App;