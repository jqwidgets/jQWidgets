import * as React from 'react';
import { useState, useMemo } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const source = useMemo(() => ({
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
    const columns = useMemo(() => [
        {
            cellvaluechanging: (row: number, column: any, columntype: any, oldvalue: any, newvalue: any): any => {
                if (newvalue === '') {
                    return oldvalue;
                }
            },
            columntype: 'combobox',
            createeditor: (row: number, column: any, editor: any): void => {
                const list = ['Stuttgart', 'Rio de Janeiro', 'Strasbourg'];
                editor.jqxComboBox({ autoDropDownHeight: true, source: list, promptText: 'Please Choose:' });
            },
            datafield: 'ShipCity', text: 'Ship City', width: 150
        },
        {
            cellvaluechanging: (row: number, column: any, columntype: any, oldvalue: any, newvalue: any): any => {
                if (newvalue === '') {
                    return oldvalue;
                }
            },
            columntype: 'dropdownlist',
            createeditor: (row: number, column: any, editor: any): void => {
                const list = ['Germany', 'Brazil', 'France'];
                editor.jqxDropDownList({ autoDropDownHeight: true, source: list });
            },
            datafield: 'ShipCountry', text: 'Ship Country', width: 150
        },
        { text: 'Ship Name', datafield: 'ShipName', columntype: 'combobox' }
    ], []);
    const [gridSource] = useState(() => new jqx.dataAdapter(source));
    return (
        <JqxGrid
            theme="material-purple"
            width="100%"
            source={gridSource}
            columns={columns}
            pageable={true}
            autoheight={true}
            editable={true}
            selectionmode="singlecell"
        />
    );
};

export default App;