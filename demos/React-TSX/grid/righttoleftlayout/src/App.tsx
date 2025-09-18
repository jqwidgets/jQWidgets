import * as React from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const source: any = React.useMemo(() => ({
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
    }), []);

    const columns = React.useMemo(() => [
        { text: 'Ship Name', datafield: 'ShipName', width: 250, align: 'right', cellsalign: 'right' },
        { text: 'Shipped Date', datafield: 'ShippedDate', width: 100, align: 'right', cellsalign: 'right', cellsformat: 'yyyy-MM-dd' },
        { text: 'Freight', datafield: 'Freight', width: 80, align: 'right', cellsformat: 'f2', cellsalign: 'right' },
        { text: 'Ship Address', datafield: 'ShipAddress', align: 'right', width: 350, cellsalign: 'right' },
        { text: 'Ship City', datafield: 'ShipCity', width: 100, align: 'right', cellsalign: 'right' },
        { text: 'Ship Country', datafield: 'ShipCountry', align: 'right', cellsalign: 'right' }
    ], []);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxGrid
            theme="material-purple"
            width="100%"
            height={450}
            source={dataAdapter}
            columns={columns}
            rtl={true}
        />
    );
};

export default App;