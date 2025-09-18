import React, { useMemo } from 'react';
import JqxTree, { ITreeProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

const App = () => {
    const source = useMemo(() => {
        const src = {
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
        const dataAdapter = new jqx.dataAdapter(src, { autoBind: true });
        return dataAdapter.getGroupedRecords(
            ['Country', 'City'],
            'items',
            'label',
            [
                { name: 'uid', map: 'value' },
                { name: 'CompanyName', map: 'label' }
            ],
            'row',
            'value'
        );
    }, []);

    return (
        <JqxTree
            theme={'material-purple'}
            source={source}
            width={300}
            height={300}
        />
    );
};

export default App;