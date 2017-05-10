import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    render() {
        let source =
            {
                dataType: "xml",
                dataFields: [
                    { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                    { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                    { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
                    { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
                    { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
                    { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
                ],
                root: "entry",
                record: "content",
                id: 'm\\:properties>d\\:OrderID',
                url: "../../sampledata/orders.xml",
                pager: (pagenum, pagesize, oldpagenum) => {
                    // callback called when a page or page size is changed.
                }
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Ship Name', dataField: 'ShipName', pinned: true, width: 300 },
                { text: 'Ship City', dataField: 'ShipCity', width: 250 },
                { text: 'Ship Address', dataField: 'ShipAddress', width: 350 },
                { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                { text: 'Shipped Date', dataField: 'ShippedDate', width: 250, cellsFormat: 'D' },
                { text: 'Freight', dataField: 'Freight', width: 100, cellsFormat: 'f2', cellsalign: 'right' }
            ];

        return (
            <JqxDataTable
                width={850} source={dataAdapter} pagerButtonsCount={10}
                pageable={true} sortable={true} columnsResize={true} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
