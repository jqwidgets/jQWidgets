import React, { useRef, useMemo, useCallback } from 'react';
import JqxTreeGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const App = () => {
    const myTreeGrid = useRef<JqxTreeGrid>(null);

    const data = useMemo(() => [
        {
            budget: '1230000',
            children: [
                {
                    budget: '423000',
                    children: [
                        {
                            budget: '113000',
                            id: '3',
                            location: 'San Antonio',
                            name: 'Accounting Department'
                        },
                        {
                            budget: '310000',
                            children: [
                                { budget: '240000', id: '5', location: 'San Antonio', name: 'Banking Office' },
                                { budget: '70000', id: '6', location: 'San Antonio', name: 'Bonds Office' }
                            ],
                            id: '4',
                            location: 'San Antonio',
                            name: 'Investment Department'
                        }
                    ],
                    id: '2',
                    location: 'San Antonio',
                    name: 'Finance Division'
                },
                {
                    budget: '600000',
                    children: [
                        { budget: '300000', id: '8', location: 'Miami', name: 'Manufacturing Department' },
                        { budget: '200000', id: '9', location: 'Miami', name: 'Public Relations Department' },
                        { budget: '100000', id: '10', location: 'Miami', name: 'Sales Department' }
                    ],
                    id: '7',
                    location: 'Miami',
                    name: 'Operations Division'
                },
                { budget: '200000', id: '11', location: 'Boston', name: 'Research Division' }
            ],
            id: '1',
            location: 'Las Vegas',
            name: 'Corporate Headquarters'
        }
    ], []);

    const source = useMemo(() => ({
        dataFields: [
            { name: 'name', type: 'string' },
            { name: 'budget', type: 'number' },
            { name: 'id', type: 'number' },
            { name: 'children', type: 'array' },
            { name: 'location', type: 'string' }
        ],
        dataType: 'json',
        hierarchy: { root: 'children' },
        id: 'id',
        localData: data
    }), [data]);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const cellsRendererFunction = useCallback(
        (row: any, dataField: string, cellValueInternal: any, rowData: any, cellText: string): string => {
            const cellValue = rowData[dataField];
            if (cellValue < 400000) {
                return "<span style='color: #e91b1b;'>" + cellText + "</span><span class='red-arrow-down'></span>";
            }
            return "<span style='color: #028b2b;'>" + cellText + "</span><span class='green-arrow-up'></span>";
        },
        []
    );

    const columns = useMemo(() => [
        { dataField: 'id', text: 'ID', width: 150 },
        { dataField: 'name', text: 'Name', width: 270 },
        { dataField: 'location', text: 'Location' },
        { align: "right", cellsAlign: "right", cellClassName: 'conditionalFormatting', cellsFormat: "c2", cellsRenderer: cellsRendererFunction, dataField: 'budget', text: 'Budget', width: 200 }
    ], [cellsRendererFunction]);

    const ready = useCallback((): void => {
        setTimeout(() => {
            myTreeGrid.current?.expandRow(1);
            myTreeGrid.current?.expandRow(2);
            myTreeGrid.current?.expandRow(7);
        });
    }, []);

    return (
        <JqxTreeGrid
            theme="material-purple"
            ref={myTreeGrid}
            width="100%"
            source={dataAdapter}
            altRows={true}
            enableHover={false}
            editable={true}
            selectionMode="none"
            columns={columns}
            ready={ready}
        />
    );
};

export default App;