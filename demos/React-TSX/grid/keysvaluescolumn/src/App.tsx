import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
    const myGrid = useRef<JqxGrid>(null);
    const eventLog = useRef<HTMLDivElement>(null);

    const employeesAdapter = useMemo(() => {
        const employeesSource: any = {
            async: false,
            datafields: [
                { name: 'FirstName', type: 'string' },
                { name: 'LastName', type: 'string' }
            ],
            datatype: 'xml',
            id: 'EmployeeID',
            record: 'Employee',
            root: 'Employees',
            url: 'employees.xml'
        };
        return new jqx.dataAdapter(employeesSource, {
            autoBind: true,
            beforeLoadComplete: (records: any[]): any[] => {
                const data = [];
                for (const record of records) {
                    const employee = record;
                    employee.EmployeeName = employee.FirstName + ' ' + employee.LastName;
                    employee.EmployeeID = employee.uid;
                    data.push(employee);
                }
                return data;
            }
        });
    }, []);

    const gridState = useMemo(() => {
        const ordersSource: any = {
            datafields: [
                { name: 'EmployeeName', value: 'EmployeeID', values: { source: employeesAdapter.records, value: 'EmployeeID', name: 'EmployeeName' } },
                { name: 'EmployeeID', map: 'm\\:properties>d\\:EmployeeID' },
                { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
                { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
                { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
                { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
            ],
            datatype: 'xml',
            id: 'm\\:properties>d\\:OrderID',
            pager: (pagenum: any, pagesize: any, oldpagenum: any): void => {},
            record: 'content',
            root: 'entry',
            url: 'orders.xml'
        };
        return {
            columns: [
                { text: 'Employee Name', datafield: 'EmployeeID', displayfield: 'EmployeeName', columntype: 'dropdownlist', width: 150 },
                { text: 'Ship City', datafield: 'ShipCity', width: 150 },
                { text: 'Ship Country', datafield: 'ShipCountry', width: 150 },
                { text: 'Ship Name', datafield: 'ShipName' }
            ],
            source: new jqx.dataAdapter(ordersSource)
        };
    }, [employeesAdapter.records]);

    const myGridOnCellSelect = useCallback((event: any): void => {
        const column = myGrid.current!.getcolumn(event.args.datafield);
        const value = myGrid.current!.getcellvalue(event.args.rowindex, column.datafield!);
        const displayValue = myGrid.current!.getcellvalue(event.args.rowindex, column.displayfield!);
        eventLog.current!.innerHTML = `<div>Selected Cell<br/>Row: ${event.args.rowindex}, Column: ${column.text}, Value: ${value}, Label: ${displayValue}</div>`;
    }, []);

    const myGridOnCellEndEdit = useCallback((event: any): void => {
        const column = myGrid.current!.getcolumn(event.args.datafield);
        const el = eventLog.current!;
        if (column.displayfield !== column.datafield) {
            el.innerHTML = `<div>Cell Edited:<br/>Index: ${event.args.rowindex}, Column: ${column.text}<br/>Value: ${event.args.value.value}, Label: ${event.args.value.label}<br/>Old Value: ${event.args.oldvalue.value}, Old Label: ${event.args.oldvalue.label}</div>`;
        } else {
            el.innerHTML = `<div>Cell Edited:<br/>Row: ${event.args.rowindex}, Column: ${column.text}<br/>Value: ${event.args.value}<br/>Old Value: ${event.args.oldvalue}</div>`;
        }
    }, []);

    return (
        <div>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                onCellselect={myGridOnCellSelect}
                onCellendedit={myGridOnCellEndEdit}
                // @ts-ignore
                width={'100%'}
                source={gridState.source}
                columns={gridState.columns}
                pageable={true}
                editable={true}
                autoheight={true}
                selectionmode={'singlecell'}
            />
            <div ref={eventLog} style={{ fontSize: '13px', fontFamily: 'Verdana', marginTop: '20px' }} />
        </div>
    );
}

export default App;