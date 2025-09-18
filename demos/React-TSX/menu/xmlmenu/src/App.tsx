import * as React from 'react';
import JqxMenu, { IMenuProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';

const App = () => {
    const [source, setSource] = React.useState<IMenuProps['source']>([]);

    React.useEffect(() => {
        const dataSource = {
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

        const getAdapter = (src: any) => {
            const dataAdapter = new jqx.dataAdapter(src);
            dataAdapter.dataBind();
            return dataAdapter;
        };

        const groupedSource = getAdapter(dataSource).getGroupedRecords(
            ['ContactTitle', 'ContactName'],
            'items',
            'label',
            [{ name: 'ContactName', map: 'label' }]
        );
        setSource(groupedSource);
    }, []);

    return (
        <JqxMenu theme={'material-purple'} width={150} source={source} mode={'vertical'} />
    );
};

export default App;