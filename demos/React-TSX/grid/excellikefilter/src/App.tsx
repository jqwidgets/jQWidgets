import * as React from 'react';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const columns = React.useMemo(() => [
        { text: 'Ship Name', datafield: 'ShipName', width: 250 },
        { text: 'Ship City', datafield: 'ShipCity', width: 250 },
        { text: 'Ship Country', datafield: 'ShipCountry', width: 200 },
        { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'f2', cellsalign: 'right' },
        { text: 'Ship Address', datafield: 'ShipAddress', width: 350 }
    ], []);

    const source = React.useMemo(() => {
        const src: any = {
            datafields: [
                { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                { name: 'ShipName', map: 'm\\:properties>d\\:ShipName', type: 'string' },
                { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress', type: 'string' },
                { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity', type: 'string' },
                { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry', type: 'string' }
            ],
            datatype: 'xml',
            id: 'm\\:properties>d\\:OrderID',
            record: 'content',
            root: 'entry',
            url: 'orders.xml'
        };
        return new jqx.dataAdapter(src);
    }, []);

    return (
        <JqxGrid
            theme="material-purple"
            width="100%"
            source={source}
            columns={columns}
            filterable={true}
            sortable={true}
            columnsresize={true}
            autoshowfiltericon={true}
            filtermode="excel"
        />
    );
};

export default App;