import * as React from 'react';
import { useRef, useMemo, useCallback, useEffect } from 'react';
import { generateordersdata } from './../public/generatedata';
import JqxTreeGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const App = () => {
    const myTreeGrid = useRef<JqxTreeGrid>(null);

    const source = useMemo(() => ({
        dataFields: [
            { name: 'name', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'id', type: 'string' },
            { name: 'parentid', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'date', type: 'date' },
            { name: 'customer', type: 'string' }
        ],
        dataType: 'array',
        hierarchy: {
            keyDataField: { name: 'id' },
            parentDataField: { name: 'parentid' }
        },
        id: 'id',
        localData: generateordersdata(200)
    }), []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const columns = useMemo(() => [
        { align: 'center', dataField: 'name', text: 'Order Name', width: 250 },
        { align: 'center', dataField: 'customer', text: 'Customer', width: 250 },
        { align: 'center', cellsAlign: 'right', cellsFormat: 'c2', dataField: 'price', text: 'Price', width: 80 },
        {
            align: 'center',
            cellsFormat: 'dd-MMMM-yyyy hh:mm',
            cellsRenderer: (rowKey?: number, column?: any, cellValue?: any, rowData?: any, cellText?: any) => {
                if (rowData.level === 0) {
                    return dataAdapter.formatDate(cellValue, 'dd-MMMM-yyyy');
                }
                return cellText;
            },
            dataField: 'date',
            text: 'Order Date'
        }
    ], [dataAdapter]);

    const ready = useCallback(() => {
        setTimeout(() => {
            myTreeGrid.current?.expandRow(2);
        }, 0);
    }, []);

    useEffect(() => {
        return () => {
            // Cleanup if necessary
        };
    }, []);

    return (
        <JqxTreeGrid
            theme="material-purple"
            ref={myTreeGrid}
            width="100%"
            height="auto"
            source={dataAdapter}
            pageable={true}
            pagerMode="advanced"
            sortable={true}
            columns={columns}
            ready={ready}
        />
    );
};

export default App;