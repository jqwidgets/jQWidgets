import * as React from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const columns: IGridProps['columns'] = [
        { text: 'Name', datafield: 'name', width: '30%' },
        { text: 'Beverage Type', datafield: 'type', width: '25%' },
        { text: 'Calories', datafield: 'calories', width: '15%' },
        { text: 'Total Fat', datafield: 'totalfat', width: '15%' },
        { text: 'Protein', datafield: 'protein', width: '15%' }
    ];

    const sourceInstance = React.useMemo(
        () =>
            new jqx.dataAdapter({
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
            }),
        []
    );

    return (
        <JqxGrid
            theme="material-purple"
            width="100%"
            source={sourceInstance}
            columns={columns}
        />
    );
};

export default App;