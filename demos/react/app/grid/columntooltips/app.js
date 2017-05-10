import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    componentDidMount() {




    }
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
                url: '../sampledata/orders.xml',
                sortcolumn: 'ShipName',
                sortdirection: 'asc'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let tooltiprenderer = (element) => {
            $(element).jqxTooltip({ position: 'mouse', content: $(element).text() });
        }

        let columns =
            [
                { text: 'Ship Name', datafield: 'ShipName', width: 250, rendered: tooltiprenderer },
                { text: 'Shipped Date', datafield: 'ShippedDate', width: 100, cellsformat: 'yyyy-MM-dd', rendered: tooltiprenderer },
                { text: 'Freight', datafield: 'Freight', width: 80, cellsformat: 'F2', cellsalign: 'right', rendered: tooltiprenderer },
                { text: 'Ship Address', datafield: 'ShipAddress', width: 350, rendered: tooltiprenderer },
                { text: 'Ship City', datafield: 'ShipCity', width: 100, rendered: tooltiprenderer },
                { text: 'Ship Country', datafield: 'ShipCountry', width: 101, rendered: tooltiprenderer }
            ];

        return (
            <JqxGrid
                width={850} height={450} source={dataAdapter}
                altrows={true} sortable={true} columns={columns}

            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
