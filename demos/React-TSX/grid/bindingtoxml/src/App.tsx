import * as React from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const source: any = {
        datafields: [
            { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName', type: 'string' },
            { name: 'ContactName', map: 'm\\:properties>d\\:ContactName', type: 'string' },
            { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle', type: 'string' },
            { name: 'City', map: 'm\\:properties>d\\:City', type: 'string' },
            { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode', type: 'string' },
            { name: 'Country', map: 'm\\:properties>d\\:Country', type: 'string' }
        ],
        datatype: 'xml',
        id: 'm\\:properties>d\\:CustomerID',
        record: 'content',
        root: 'entry',
        url: 'customers.xml'
    };

    const columns = [
        { text: 'Company Name', datafield: 'CompanyName', width: 250 },
        { text: 'Contact Name', datafield: 'ContactName', width: 150 },
        { text: 'Contact Title', datafield: 'ContactTitle', width: 180 },
        { text: 'City', datafield: 'City', width: 120 },
        { text: 'Postal Code', datafield: 'PostalCode', width: 90 },
        { text: 'Country', datafield: 'Country', width: 100 }
    ];

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), []);

    return (
        <JqxGrid
            theme="material-purple"
            width="100%"
            source={dataAdapter}
            columns={columns}
            columnsresize={true}
        />
    );
};

export default App;