import * as React from 'react';
import { useRef, useCallback, useMemo } from 'react';
import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

function App() {
    const myTreeGrid = useRef<JqxTreeGrid>(null);
    const myMenu = useRef<JqxMenu>(null);

    const source: any = useMemo(() => ({
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

    const dataAdapter: any = useMemo(() => new jqx.dataAdapter(source), [source]);

    const columns = useMemo(() => [
        { dataField: 'FirstName', minWidth: 100, text: 'FirstName', width: 180 },
        { dataField: 'LastName', text: 'LastName', width: 200 },
        { dataField: 'DepartmentName', text: 'Department Name', width: 200 },
        { dataField: 'Title', text: 'Title', width: 300 },
        { cellsFormat: 'd', dataField: 'BirthDate', text: 'Birth Date', width: 120 },
        { cellsFormat: 'd', dataField: 'HireDate', text: 'Hire Date', width: 120 },
        { dataField: 'Phone', text: 'Phone', width: 120 }
    ], []);

    const ready = useCallback(() => {
        myTreeGrid.current?.expandRow(32);
    }, []);

    const myTreeGridOnContextmenu = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
    }, []);

    const myTreeGridOnRowClick = useCallback((event: any) => {
        const args = event.args;
        if (args.originalEvent.button === 2) {
            const scrollTop = window.scrollX;
            const scrollLeft = window.scrollY;
            myMenu.current?.open(
                parseInt(args.originalEvent.clientX, 10) + 5 + scrollLeft,
                parseInt(args.originalEvent.clientY, 10) + 5 + scrollTop
            );
            event.preventDefault();
        }
    }, []);

    const myMenuOnItemClick = useCallback((event: any) => {
        const args = event.args;
        const selection = myTreeGrid.current?.getSelection();
        if (!selection || selection.length === 0) return;
        const rowid = selection[0].uid;
        if (args.innerHTML === 'Edit Selected Row') {
            myTreeGrid.current?.beginRowEdit(rowid);
        } else {
            myTreeGrid.current?.deleteRow(rowid);
        }
    }, []);

    return (
        <div>
            <div onContextMenu={myTreeGridOnContextmenu}>
                <JqxTreeGrid
                    theme={'material-purple'}
                    ref={myTreeGrid}
                    onRowClick={myTreeGridOnRowClick}
                    width={'100%'}
                    columnsResize={true}
                    source={dataAdapter}
                    columns={columns}
                    ready={ready}
                />
            </div>
            <JqxMenu
                theme={'material-purple'}
                ref={myMenu}
                onItemclick={myMenuOnItemClick}
                width={200}
                height={58}
                autoOpenPopup={false}
                mode={'popup'}
            >
                <ul>
                    <li>Edit Selected Row</li>
                    <li>Delete Selected Row</li>
                </ul>
            </JqxMenu>
        </div>
    );
}

export default App;