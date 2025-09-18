import * as React from 'react';
import { useMemo, useCallback } from 'react';
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

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const columns = useMemo(() => [
        { text: 'Date', datafield: 'Date', cellsformat: 'D', width: 250 },
        { text: 'S&P 500', datafield: 'S&P 500', width: 300, cellsformat: 'f' },
        { text: 'NASDAQ', datafield: 'NASDAQ', cellsformat: 'f' }   
    ], []);

    const handlekeyboardnavigation = useCallback<IGridProps['handlekeyboardnavigation']>((event) => {
        const key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
        if (key === 13) {
            alert('Pressed Enter Key.');
            return true;
        } else if (key === 27) {
            alert('Pressed Esc Key.');
            return true;
        }
        return false;
    }, []);

    return (
        <JqxGrid
            theme="material-purple"
            width="100%"
            source={dataAdapter}
            columns={columns}
            columnsresize={true}
            editable={true}
            editmode="selectedcell"
            selectionmode="singlecell"
            handlekeyboardnavigation={handlekeyboardnavigation}
        />
    );
};

export default App;