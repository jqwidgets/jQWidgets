import * as React from 'react';
import { useRef, useEffect, useMemo, useCallback, useState } from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

const App = () => {
    const myDataTable = useRef<JqxDataTable>(null);

    const source = useMemo(() => ({
        dataFields: [
            { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
            { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName', type: 'string' },
            { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress', type: 'string' },
            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity', type: 'string' },
            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry', type: 'string' }
        ],
        dataType: 'xml',
        id: 'm\\:properties>d\\:OrderID',
        record: 'content',
        root: 'entry',
        url: 'orders.xml'
    }), []);

    const columns = useMemo(() => [
        { text: 'Ship Name', dataField: 'ShipName', width: 350, align: 'left', cellsAlign: 'left' },
        { text: 'Freight', dataField: 'Freight', width: 180, align: 'right', cellsFormat: 'f2', cellsAlign: 'right' },
        { text: 'Ship Address', dataField: 'ShipAddress', align: 'left', width: 350, cellsAlign: 'left' },
        { text: 'Ship City', dataField: 'ShipCity', width: 100, align: 'left', cellsAlign: 'left' },
        { text: 'Ship Country', dataField: 'ShipCountry', align: 'left', cellsAlign: 'left' }
    ], []);

    const [dataAdapter] = useState(() => new jqx.dataAdapter(source));

    const tableOnBindingComplete = useCallback((event: any) => {
        myDataTable.current?.focus();
        myDataTable.current?.selectRow(0);
    }, []);

    return (
        <div>
            <JqxDataTable
                theme={'material-purple'}
                ref={myDataTable}
                onBindingComplete={tableOnBindingComplete}
                // @ts-ignore
                width={'100%'}
                source={dataAdapter}
                columns={columns}
                editable={true}
                pageable={true}
            />
            <div style={{ fontFamily: 'Verdana', fontSize: '12px', width: '670px' }}>
                <ul>
                    <li><b>Left Arrow</b> key is pressed - Navigates to the Previous Page. If Row Details is enabled, Collapses the Row.</li>
                    <li><b>Right Arrow</b> key is pressed - Navigates to the Next Page. If Row Details is enabled, Expands the Row.</li>
                    <li><b>Up Arrow</b> key is pressed - Selects the row above.</li>
                    <li><b>Down Arrow</b> key is pressed - Selects the row below.</li>
                    <li><b>Page Up/Down</b> is pressed - Navigate Up or Down with one page.</li>
                    <li><b>Home/End</b> is pressed - Navigate to the first or last row on the current page.</li>
                    <li><b>Enter</b> key is pressed - Saves the Edited Row.</li>
                    <li><b>Esc</b> key is pressed - Closes all Editors and Cancels the changes.</li>
                    <li><b>F2</b> key is pressed -  Enters edit mode for the currently selected row.</li>
                    <li><b>Shift+Arrow</b> key extends the selection.</li>
                    <li><b>Shift</b> extends the selection when an end user clicks on a row.</li>
                    <li><b>Ctrl</b> key is pressed - extends the selection when an end user clicks on a row. </li>
                </ul>
            </div>
        </div>
    );
};

export default App;