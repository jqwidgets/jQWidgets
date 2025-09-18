import * as React from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const source: any = React.useMemo(() => ({
        datafields: [
            { name: 'ProductName' },
            { name: 'QuantityPerUnit' },
            { name: 'UnitPrice', type: 'float' },
            { name: 'UnitsInStock', type: 'float' },
            { name: 'UnitsOnOrder', type: 'float' },
            { name: 'ReorderLevel', type: 'float' },
            { name: 'CategoryID', type: 'int' }
        ],
        datatype: 'xml',
        id: 'ProductID',
        record: 'Product',
        root: 'Products',
        url: 'products.xml'
    }), []);

    const columns: IGridProps['columns'] = React.useMemo(() => [
        { text: 'Product Name', datafield: 'ProductName', width: 250, pinned: true },
        { text: 'Category', datafield: 'CategoryID', width: 120, cellsalign: 'right' },
        { text: 'Quantity Per Unit', datafield: 'QuantityPerUnit', width: 200, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'UnitPrice', width: 120, cellsformat: 'c2', cellsalign: 'right' },
        { text: 'Units On Order', datafield: 'UnitsOnOrder', width: 120, cellsalign: 'right' },
        { text: 'Reorder Level', datafield: 'ReorderLevel', width: 120, cellsalign: 'right' }
    ], []);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxGrid
            theme="material-purple"
            // @ts-ignore
            width="100%"
            source={dataAdapter}
            columns={columns}
            sortable={true}
            pageable={true}
            autoheight={true}
        />
    );
};

export default App;