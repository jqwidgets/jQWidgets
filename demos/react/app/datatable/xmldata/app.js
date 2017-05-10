import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'xml',
                datafields: [
                    { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName', type: 'string' },
                    { name: 'ContactName', map: 'm\\:properties>d\\:ContactName', type: 'string' },
                    { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle', type: 'string' },
                    { name: 'City', map: 'm\\:properties>d\\:City', type: 'string' },
                    { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode', type: 'string' },
                    { name: 'Country', map: 'm\\:properties>d\\:Country', type: 'string' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:CustomerID',
                url: '../sampledata/customers.xml'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Company Name', datafield: 'CompanyName', width: 250 },
                { text: 'Contact Name', datafield: 'ContactName', width: 250 },
                { text: 'Contact Title', datafield: 'ContactTitle', width: 250 },
                { text: 'City', datafield: 'City', width: 120 },
                { text: 'Postal Code', datafield: 'PostalCode', width: 90 },
                { text: 'Country', datafield: 'Country', width: 100 }
            ];

        return (
            <JqxDataTable
                width={850} source={dataAdapter} columnsResize={true}
                pageable={true} pagerButtonsCount={10} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
