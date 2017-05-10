import React from 'react';
import ReactDOM from 'react-dom';

import JqxMenu from '../../../jqwidgets-react/react_jqxmenu.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'xml',
                datafields: [
                    { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
                    { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
                    { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle' },
                    { name: 'City', map: 'm\\:properties>d\\:City' },
                    { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode' },
                    { name: 'Country', map: 'm\\:properties>d\\:Country' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:CustomerID',
                url: '../sampledata/customers.xml',
                async: false
            };
        // create data adapter.
        let dataAdapter = new $.jqx.dataAdapter(source);
        // perform Data Binding.
        dataAdapter.dataBind();
        // get the tree items. The first parameter is the grouping fields. The second parameter is the sub items collection name. The third parameter is the group's name. 
        // Each jqxMenu item has a 'label' property, but in the data source, we have a 'CompanyName' field. The last parameter 
        // specifies the mapping between the 'CompanyName' and 'label' fields.  
        let records = dataAdapter.getGroupedRecords(['ContactTitle', 'ContactName'], 'items', 'label', [{ name: 'ContactName', map: 'label' }]);
        return (
            <JqxMenu width={150} mode={'vertical'} source={records} />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
