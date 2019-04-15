import * as React from 'react';
 


import JqxTree, { ITreeProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

class App extends React.PureComponent<{}, ITreeProps> {
    constructor(props: {}) {
        super(props);

        // Prepare the data
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

        // Create data adapter.
        const dataAdapter = new jqx.dataAdapter(source, { autoBind: true });
        // Get the tree items. The first parameter is the grouping fields. The second parameter is the sub items collection name. The third parameter is the group's name. 
        // Each jqxTree item has a 'label' property, but in the data source, we have a 'CompanyName' field. The last parameter 
        // specifies the mapping between the 'CompanyName' and 'label' fields.
        const records = dataAdapter.getGroupedRecords(['Country', 'City'], 'items', 'label', [{ name: 'uid', map: 'value' }, { name: 'CompanyName', map: 'label' }], 'row', 'value');

        this.state = {
          source: records
        }
    }

    public render() {
        return (
            <JqxTree theme={'material-purple'}
                source={this.state.source}
                width={300} height={300}
            />
        );
    }
}

export default App;
