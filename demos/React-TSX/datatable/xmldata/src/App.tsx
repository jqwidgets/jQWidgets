import * as React from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

const App = () => {
    const source: any = React.useMemo(() => ({
        dataFields: [
            { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName', type: 'string' },
            { name: 'ContactName', map: 'm\\:properties>d\\:ContactName', type: 'string' },
            { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle', type: 'string' },
            { name: 'City', map: 'm\\:properties>d\\:City', type: 'string' },
            { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode', type: 'string' },
            { name: 'Country', map: 'm\\:properties>d\\:Country', type: 'string' }
        ],
        dataType: 'xml',
        id: 'm\\:properties>d\\:CustomerID',
        record: 'content',
        root: 'entry',
        url: 'customers.xml'
    }), []);

    const columns = React.useMemo(() => [
        { text: 'Company Name', dataField: 'CompanyName', width: 250 },
        { text: 'Contact Name', dataField: 'ContactName', width: 250 },
        { text: 'Contact Title', dataField: 'ContactTitle', width: 250 },
        { text: 'City', dataField: 'City', width: 120 },
        { text: 'Postal Code', dataField: 'PostalCode', width: 90 },
        { text: 'Country', dataField: 'Country', width: 100 }
    ], []);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxDataTable
            theme="material-purple"
            width="100%"
            source={dataAdapter}
            columns={columns}
            columnsResize={true}
            pageable={true}
            pagerButtonsCount={10}
        />
    );
};

export default App;