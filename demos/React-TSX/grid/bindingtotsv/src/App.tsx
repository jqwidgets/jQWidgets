import * as React from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const source: any = React.useMemo(() => ({
        datafields: [
            { name: 'Year', type: 'int' },
            { name: 'HPI', type: 'float' },
            { name: 'BuildCost', type: 'float' },
            { name: 'Population', type: 'float' },
            { name: 'Rate', type: 'float' }
        ],
        datatype: 'tab',
        url: 'homeprices.txt'
    }), []);

    const columns = React.useMemo(() => [
        { text: 'Year', datafield: 'Year', width: 200 },
        { text: 'HPI', datafield: 'HPI', cellsformat: 'f2', width: 200 },
        { text: 'Build Cost', datafield: 'BuildCost', cellsformat: 'f2', width: 180 },
        { text: 'Population', datafield: 'Population', cellsformat: 'f2', width: 100 },
        { text: 'Rate', datafield: 'Rate', cellsformat: 'f5', minwidth: 100 }
    ], []);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxGrid
            theme="material-purple"
            // @ts-ignore
            width="100%"
            source={dataAdapter}
            columns={columns}
            columnsresize={true}
        />
    );
};

export default App;