import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const App = () => {
    const myTreeGrid = useRef<JqxTreeGrid>(null);

    const source = useMemo(() => ({
        dataFields: [
            { name: 'EmployeeKey', type: 'number' },
            { name: 'ParentEmployeeKey', type: 'number' },
            { name: 'FirstName', type: 'string' },
            { name: 'LastName', type: 'string' },
            { name: 'Title', type: 'string' },
            { name: 'HireDate', type: 'date' },
            { name: 'BirthDate', type: 'date' },
            { name: 'Phone', type: 'string' },
            { name: 'Gender', type: 'string' },
            { name: 'DepartmentName', type: 'string' }
        ],
        dataType: 'csv',
        hierarchy: {
            keyDataField: { name: 'EmployeeKey' },
            parentDataField: { name: 'ParentEmployeeKey' }
        },
        id: 'EmployeeKey',
        url: 'employeesadv.csv'
    }), []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const columns = useMemo(() => [
        { dataField: 'FirstName', minWidth: 100, text: 'FirstName', width: 180 },
        { dataField: 'LastName', text: 'LastName', width: 180 },
        { dataField: 'DepartmentName', text: 'Department Name', width: 180 },
        { dataField: 'Title', text: 'Title', width: 300 },
        { cellsFormat: 'd', dataField: 'BirthDate', text: 'Birth Date', width: 150 },
        { cellsFormat: 'd', dataField: 'HireDate', text: 'Hire Date', width: 150 },
        { dataField: 'Phone', text: 'Phone', width: 150 }
    ], []);

    const ready = useCallback(() => {
        if (myTreeGrid.current) {
            myTreeGrid.current.expandRow(32);
            myTreeGrid.current.expandRow(112);
        }
    }, []);

    return (
        <JqxTreeGrid
            theme="material-purple"
            ref={myTreeGrid}
            width="100%"
            pageable
            columnsResize
            sortable
            filterable
            filterMode="advanced"
            source={dataAdapter}
            columns={columns}
            ready={ready}
        />
    );
};

export default App;