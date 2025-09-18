import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

function App() {
    const log = useRef<HTMLDivElement>(null);

    const source = useMemo(() => ({
        dataFields: [
            { name: 'OrderID', type: 'int' },
            { name: 'Freight', type: 'float' },
            { name: 'ShipName', type: 'string' },
            { name: 'ShipAddress', type: 'string' },
            { name: 'ShipCity', type: 'string' },
            { name: 'ShipCountry', type: 'string' },
            { name: 'ShippedDate', type: 'date' }
        ],
        dataType: 'xml',
        id: 'OrderID',
        record: 'Order',
        root: 'Orders',
        url: 'orderdetails.xml'
    }), []);

    const columns = useMemo<IDataTableProps['columns']>(() => [
        { text: 'Freight', dataField: 'Freight', cellsFormat: 'f', cellsAlign: 'right', align: 'right', width: 250 },
        { text: 'Ship Country', dataField: 'ShipCountry', width: 250 },
        { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy' }
    ], []);

    const editSettings = useMemo<IDataTableProps['editSettings']>(() => ({
        cancelOnEsc: true,
        editOnDoubleClick: true,
        editOnF2: true,
        editSingleCell: true,
        saveOnBlur: true,
        saveOnEnter: true,
        saveOnPageChange: true,
        saveOnSelectionChange: true
    }), []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const onCellBeginEdit = useCallback((event: any) => {
        const args = event.args;
        const rowIndex = args.index;
        const columnDataField = args.dataField;
        let value = args.value;
        if (columnDataField === 'ShippedDate' && value) {
            value = value.getDate() + '/' + parseInt((value.getMonth() + 1), 10) + '/' + value.getFullYear();
        }
        const logDiv = log.current!;
        logDiv.innerHTML = 'cellBeginEdit - Row: ' + rowIndex + ', Column: ' + columnDataField + ', Value: ' + value + ' <br />' + logDiv.innerHTML;
    }, []);

    const onCellEndEdit = useCallback((event: any) => {
        const args = event.args;
        const rowIndex = args.index;
        const columnDataField = args.dataField;
        let value = args.value;
        if (columnDataField === 'ShippedDate' && value) {
            value = value.getDate() + '/' + parseInt((value.getMonth() + 1), 10) + '/' + value.getFullYear();
        }
        const logDiv = log.current!;
        logDiv.innerHTML = '<br/>cellEndEdit - Row: ' + rowIndex + ', Column: ' + columnDataField + ', Value: ' + value + '<br/>' + logDiv.innerHTML;
    }, []);

    return (
        <div>
            <JqxDataTable
                theme="material-purple"
                onCellBeginEdit={onCellBeginEdit}
                onCellEndEdit={onCellEndEdit}
                // @ts-ignore
                width="100%"
                source={dataAdapter}
                columns={columns}
                altRows={true}
                pageable={true}
                editable={true}
                pagerButtonsCount={8}
                editSettings={editSettings}
            />
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', width: '800px', marginTop: '20px' }}>
                <h4>Event Log</h4>
                <div ref={log} style={{ maxHeight: '300px', overflow: 'auto' }} />
            </div>
        </div>
    );
}

export default App;