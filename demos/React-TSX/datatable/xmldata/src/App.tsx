import * as React from 'react';
 


import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
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
        };

        this.state = {
            columns: [
                { text: 'Company Name', dataField: 'CompanyName', width: 250 },
                { text: 'Contact Name', dataField: 'ContactName', width: 250 },
                { text: 'Contact Title', dataField: 'ContactTitle', width: 250 },
                { text: 'City', dataField: 'City', width: 120 },
                { text: 'Postal Code', dataField: 'PostalCode', width: 90 },
                { text: 'Country', dataField: 'Country', width: 100 }
            ],
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <JqxDataTable theme={'material-purple'}
                // @ts-ignore 
                width={'100%'} source={this.state.source} columns={this.state.columns}
                columnsResize={true} pageable={true} pagerButtonsCount={10} />
        );
    }
}

export default App;