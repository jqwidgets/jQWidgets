import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const App = () => {
    const myDataTable = useRef<JqxDataTable>(null);
    const columnName = useRef<JqxDropDownList>(null);
    const sortOrder = useRef<JqxDropDownList>(null);

    const columns = useMemo(
        () => [
            { text: 'Name', dataField: 'firstname', width: 200 },
            { text: 'Last Name', dataField: 'lastname', width: 200 },
            { text: 'Product', editable: false, dataField: 'productname', width: 180 },
            { text: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsAlign: 'right' },
            { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
            { text: 'Total', dataField: 'total', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
        ],
        []
    );

    const source = useMemo(() => {
        const s: any = {
            dataFields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            dataType: 'array',
            localData: generatedata(85, false)
        };
        return new jqx.dataAdapter(s);
    }, []);

    const sortBtnOnClick = useCallback(() => {
        const columnIndex = columnName.current!.getOptions('selectedIndex');
        const order = sortOrder.current!.getOptions('selectedIndex') === 0 ? 'asc' : 'desc';
        myDataTable.current!.sortBy(columns[columnIndex].dataField!, order);
    }, [columns]);

    const clearBtnOnClick = useCallback(() => {
        myDataTable.current!.sortBy('firstname', null);
    }, []);

    return (
        <div>
            <JqxDataTable
                theme={'material-purple'}
                ref={myDataTable}
                style={{ float: 'left', marginLeft: '20px' }}
                source={source}
                columns={columns}
                pageable={true}
                columnsResize={true}
                pagerButtonsCount={10}
            />
            <div style={{ float: 'left', marginLeft: '10px' }}>
                <table>
                    <tbody>
                        <tr>
                            <td align="right">
                                <div><strong>Settings</strong></div>
                            </td>
                            <td align="left" />
                        </tr>
                        <tr>
                            <td align="right">Column:</td>
                            <td align="left">
                                <JqxDropDownList
                                    theme={'material-purple'}
                                    ref={columnName}
                                    width={100}
                                    selectedIndex={0}
                                    autoDropDownHeight={true}
                                    source={['Name', 'Last Name', 'Product', 'Quantity', 'Unit Price', 'Total']}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Sort Order:</td>
                            <td align="left">
                                <JqxDropDownList
                                    theme={'material-purple'}
                                    ref={sortOrder}
                                    width={100}
                                    selectedIndex={0}
                                    autoDropDownHeight={true}
                                    source={['Ascending', 'Descending']}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td align="right" />
                            <td align="left">
                                <JqxButton
                                    theme={'material-purple'}
                                    style={{ float: 'left' }}
                                    onClick={sortBtnOnClick}
                                    width={50}
                                >
                                    Sort
                                </JqxButton>
                                <JqxButton
                                    theme={'material-purple'}
                                    style={{ float: 'left', marginLeft: '5px' }}
                                    onClick={clearBtnOnClick}
                                    width={50}
                                >
                                    Clear
                                </JqxButton>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default App;