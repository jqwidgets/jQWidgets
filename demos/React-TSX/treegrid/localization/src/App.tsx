import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import { generateordersdata } from './../public/generatedata';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

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

    const columns: ITreeGridProps['columns'] = useMemo(() => [
        { align: "center", dataField: "name", text: "Bestellung Name", width: 250 },
        { align: "center", dataField: "customer", text: "Auftraggeber", width: 250 },
        { align: "center", cellsAlign: "right", cellsFormat: "c2", dataField: "price", text: "Preis", width: 180 },
        {
            align: "center",
            cellsFormat: "dd-MMMM-yyyy hh:mm",
            cellsRenderer: (rowKey?: number, column?: any, cellValue?: any, rowData?: any, cellText?: string) => {
                if (rowData.level === 0) {
                    return dataAdapter.formatDate(cellValue, 'dd-MMMM-yyyy');
                }
                return cellText;
            },
            dataField: "date",
            text: "Bestellung Datum"
        }
    ], [dataAdapter]);

    const localization = useMemo(() => ({
        pagerfirstbuttonstring: 'first',
        pagergotopagestring: 'Gehe zu',
        pagerlastbuttonstring: 'last',
        pagernextbuttonstring: 'voriger',
        pagerpreviousbuttonstring: 'nächster',
        pagerrangestring: ' von ',
        pagershowrowsstring: 'Zeige Zeile:'
    }), []);

    const ready = useCallback(() => {
        setTimeout(() => {
            myTreeGrid.current?.expandRow(2);
        }, 0);
    }, []);

    return (
        <JqxTreeGrid
            theme={'material-purple'}
            ref={myTreeGrid}
            width={'100%'}
            source={dataAdapter}
            pageable={true}
            pagerMode={"advanced"}
            sortable={true}
            localization={localization}
            columns={columns}
            ready={ready}
        />
    );
};

export default App;