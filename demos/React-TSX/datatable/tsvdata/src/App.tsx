import * as React from 'react';
import { useMemo } from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

function App() {
    const columns = useMemo(() => [
        { text: 'Year', dataField: 'Year', width: 200 },
        { text: 'HPI', dataField: 'HPI', cellsFormat: 'f2', width: 200 },
        { text: 'Build Cost', dataField: 'BuildCost', cellsFormat: 'f2', width: 180 },
        { text: 'Population', dataField: 'Population', cellsFormat: 'f2', width: 100 },
        { text: 'Rate', dataField: 'Rate', cellsFormat: 'f5' }
    ], []);

    const source = useMemo(() => {
        const dataSource: any = {
            dataFields: [
                { name: 'Year', type: 'int' },
                { name: 'HPI', type: 'float' },
                { name: 'BuildCost', type: 'float' },
                { name: 'Population', type: 'float' },
                { name: 'Rate', type: 'float' }
            ],
            dataType: 'tab',
            id: 'id',
            url: 'homeprices.txt'
        };
        return new jqx.dataAdapter(dataSource);
    }, []);

    return (
        <JqxDataTable
            theme="material-purple"
            width="100%"
            source={source}
            columns={columns}
            columnsResize
            pageable
            pagerButtonsCount={10}
        />
    );
}

export default App;