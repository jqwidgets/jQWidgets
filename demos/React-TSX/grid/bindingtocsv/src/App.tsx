import React, { useMemo } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const source = useMemo(() => ({
        datafields: [
            { name: 'Date', type: 'date' },
            { name: 'S&P 500', type: 'float' },
            { name: 'NASDAQ', type: 'float' }
        ],
        datatype: 'csv',
        url: 'nasdaq_vs_sp500.txt'
    }), []);

    const columns = useMemo<IGridProps['columns']>(() => [
        { text: 'Date', datafield: 'Date', cellsformat: 'D', width: 250 },
        { text: 'S&P 500', datafield: 'S&P 500', width: 300, cellsformat: 'f' },
        { text: 'NASDAQ', datafield: 'NASDAQ', cellsformat: 'f' }
    ], []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxGrid
            theme={'material-purple'}
            width={'100%'}
            source={dataAdapter}
            columns={columns}
            columnsresize={true}
        />
    );
};

export default App;