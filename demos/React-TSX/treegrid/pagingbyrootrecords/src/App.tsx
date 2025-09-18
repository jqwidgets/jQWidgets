import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
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
        localData: generateordersdata(10)
    }), []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const columns = useMemo(() => [
        { align: "center", dataField: "name", text: "Order Name", width: 250 },
        { align: "center", dataField: "customer", text: "Customer", width: 250 },
        { align: "center", cellsAlign: "right", cellsFormat: "c2", dataField: "price", text: "Price", width: 80 },
        {
            align: "center",
            cellsFormat: "dd-MMMM-yyyy hh:mm",
            cellsRenderer: (rowKey?: number, column?: any, cellValue?: any, rowData?: any, cellText?: any) => {
                if (rowData.level === 0) {
                    return dataAdapter.formatDate(cellValue, 'dd-MMMM-yyyy');
                }
                return cellText;
            },
            dataField: "date",
            text: "Order Date"
        }
    ], [dataAdapter]);

    const ready = useCallback((): void => {
        setTimeout(() => {
            myTreeGrid.current && myTreeGrid.current.expandRow(1);
        }, 0);
    }, []);

    return (
        <JqxTreeGrid
            theme="material-purple"
            ref={myTreeGrid}
            // @ts-ignore
            width="100%"
            height="auto"
            source={dataAdapter}
            sortable={true}
            pageable={true}
            pagerMode="advanced"
            pageSizeMode="root"
            pageSizeOptions={[2, 3, 4]}
            pageSize={2}
            columns={columns}
            ready={ready}
        />
    );
};

export default App;