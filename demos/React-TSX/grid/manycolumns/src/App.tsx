import React, { useMemo } from 'react';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const { source, columns } = useMemo(() => {
        const data: any[] = [];
        const datafields: any[] = [];
        const columns: any[] = [];
        for (let i = 0; i < 200; i++) {
            const row: any = {};
            for (let j = 0; j < 200; j++) {
                row['Name' + j] = 'Cell ' + (1 + i) + '.' + (1 + j);
                if (i === 0) {
                    columns.push({ datafield: 'Name' + j, text: 'Column ' + (1 + j), width: 100 });
                    datafields.push({ name: 'Name' + j, type: 'string' });
                }
            }
            data[i] = row;
        }
        const source = new jqx.dataAdapter({
            datafields,
            datatype: 'array',
            localdata: data
        });
        return { source, columns };
    }, []);

    return (
        <JqxGrid
            theme="material-purple"
            width="100%"
            source={source}
            columns={columns}
        />
    );
};

export default App;