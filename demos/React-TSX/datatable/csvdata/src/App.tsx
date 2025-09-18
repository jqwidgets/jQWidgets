import * as React from 'react';
import { useState, useMemo } from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

function App() {
    const [columns] = useState([
        { text: 'Date', dataField: 'Date', cellsFormat: 'D', width: 250 },
        { text: 'S&P 500', dataField: 'S&P 500', width: 300, cellsFormat: 'f' },
        { text: 'NASDAQ', dataField: 'NASDAQ', cellsFormat: 'f' }
    ]);

    const source = useMemo(() => {
        const sourceObj = {
            dataFields: [
                { name: 'Date', type: 'date' },
                { name: 'S&P 500', type: 'float' },
                { name: 'NASDAQ', type: 'float' }
            ],
            dataType: 'csv',
            url: 'nasdaq_vs_sp500.txt'
        };
        return new jqx.dataAdapter(sourceObj);
    }, []);

    return (
        <JqxDataTable
            theme="material-purple"
            width="100%"
            source={source}
            columns={columns}
            columnsResize={true}
            pageable={true}
            pagerButtonsCount={10}
        />
    );
}

export default App;