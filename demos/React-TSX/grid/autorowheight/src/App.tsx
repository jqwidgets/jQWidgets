import * as React from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const source: any = {
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

    const columns = React.useMemo(
        () => [
            { text: 'Ship Name', datafield: 'ShipName', width: 150 },
            { text: 'Freight', datafield: 'Freight', width: 100, cellsformat: 'f2', cellsalign: 'right' },
            { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
            { text: 'Ship City', datafield: 'ShipCity', width: 100 },
            { text: 'Ship Country', datafield: 'ShipCountry' }
        ],
        []
    );

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), []);

    return (
        <JqxGrid
            theme="material-purple"
            width="100%"
            source={dataAdapter}
            pageable={true}
            autorowheight={true}
            autoheight={true}
            altrows={true}
            columns={columns}
        />
    );
};

export default App;