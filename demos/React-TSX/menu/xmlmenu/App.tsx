import * as React from 'react';
 


import JqxMenu, { IMenuProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';

class App extends React.PureComponent<{}, IMenuProps> {

    constructor(props: {}) {
        super(props);

        // prepare the data
        const source = {
            async: false,
            datafields: [
                { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
                { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
                { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle' },
                { name: 'City', map: 'm\\:properties>d\\:City' },
                { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode' },
                { name: 'Country', map: 'm\\:properties>d\\:Country' }
            ],
            datatype: 'xml',
            id: 'm\\:properties>d\\:CustomerID',
            record: 'content',
            root: 'entry',
            url: 'customers.xml'
        };

        const getAdapter = (dataSource: any): any => {
            const dataAdapter = new jqx.dataAdapter(dataSource);
            // perform Data Binding.
            dataAdapter.dataBind();
            return dataAdapter;
        };
        this.state = {
            source: getAdapter(source).getGroupedRecords(['ContactTitle', 'ContactName'], 'items', 'label', [{ name: 'ContactName', map: 'label' }])
        }
    }

    public render() {
        return (
            <JqxMenu theme={'material-purple'} width={150} source={this.state.source} mode={'vertical'} />
        );
    }
}

export default App;