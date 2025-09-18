import * as React from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

const App = () => {
    const source: any = React.useMemo(() => ({
        dataFields: [
            { name: 'name', type: 'string' },
            { name: 'type', type: 'string' },
            { name: 'calories', type: 'int' },
            { name: 'totalfat', type: 'string' },
            { name: 'protein', type: 'string' }
        ],
        dataType: 'json',
        id: 'id',
        url: 'beverages.txt'
    }), []);

    const columns = React.useMemo(() => [
        { text: 'Name', dataField: 'name', width: 300 },
        { text: 'Beverage Type', dataField: 'type', width: 300 },
        { text: 'Calories', dataField: 'calories', width: 180 },
        { text: 'Total Fat', dataField: 'totalfat', width: 120 },
        { text: 'Protein', dataField: 'protein' }
    ], []);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxDataTable
            theme={'material-purple'}
            width={'100%'}
            source={dataAdapter}
            columns={columns}
            columnsResize={true}
            pageable={true}
            pagerButtonsCount={10}
        />
    );
};

export default App;