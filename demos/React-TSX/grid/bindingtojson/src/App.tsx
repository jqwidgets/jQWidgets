import * as React from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const source: any = {
        datafields: [
            { name: 'name', type: 'string' },
            { name: 'type', type: 'string' },
            { name: 'calories', type: 'int' },
            { name: 'totalfat', type: 'string' },
            { name: 'protein', type: 'string' }
        ],
        datatype: 'json',
        id: 'id',
        url: 'beverages.txt'
    };

    const columns = [
        { text: 'Name', datafield: 'name', width: 250 },
        { text: 'Beverage Type', datafield: 'type', width: 250 },
        { text: 'Calories', datafield: 'calories', width: 180 },
        { text: 'Total Fat', datafield: 'totalfat', width: 120 },
        { text: 'Protein', datafield: 'protein', minwidth: 120 }
    ];

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