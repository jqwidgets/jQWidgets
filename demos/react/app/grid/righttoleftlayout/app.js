import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'xml',
                datafields: [
                    { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                    { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                    { name: 'ShipName', map: 'm\\:properties>d\\:ShipName', type: 'string' },
                    { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress', type: 'string' },
                    { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity', type: 'string' },
                    { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry', type: 'string' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:OrderID',
                url: '../sampledata/orders.xml'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Ship Name', datafield: 'ShipName', width: 250, align: 'right', cellsalign: 'right' },
                { text: 'Shipped Date', datafield: 'ShippedDate', width: 100, align: 'right', cellsalign: 'right', cellsformat: 'yyyy-MM-dd' },
                { text: 'Freight', datafield: 'Freight', width: 80, align: 'right', cellsformat: 'F2', cellsalign: 'right' },
                { text: 'Ship Address', datafield: 'ShipAddress', align: 'right', width: 350, cellsalign: 'right' },
                { text: 'Ship City', datafield: 'ShipCity', width: 100, align: 'right', cellsalign: 'right' },
                { text: 'Ship Country', datafield: 'ShipCountry', align: 'right', cellsalign: 'right' }
            ];

        return (
            <JqxGrid
                width={850} height={450} source={dataAdapter} 
                rtl={true} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
