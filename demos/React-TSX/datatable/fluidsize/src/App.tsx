import * as React from 'react';
import './App.css';
import { generatedata } from './generatedata';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

function App() {
    const columns = React.useMemo(() => [
        { text: 'Name', dataField: 'firstname', width: '20%' },
        { text: 'Last Name', dataField: 'lastname', width: '20%' },
        { text: 'Product', editable: false, dataField: 'productname', width: '30%' },
        { text: 'Quantity', dataField: 'quantity', width: '30%', cellsAlign: 'right', align: 'right' }
    ], []);

    const source = React.useMemo(() => {
        const src = {
            dataFields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            dataType: 'array',
            localData: generatedata(200, false)
        };
        return new jqx.dataAdapter(src);
    }, []);

    return (
        <JqxDataTable
            theme={'material-purple'}
            width={'100%'}
            height={'100%'}
            source={source}
            columns={columns}
            pageable={true}
            columnsResize={true}
            pagerButtonsCount={3}
            pageSize={50}
        />
    );
}

export default App;