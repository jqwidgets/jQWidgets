import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
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
        };

        this.state = {
            columns: [
                { text: 'Product Name', datafield: 'ProductName', width: 250, pinned: true },
                { text: 'Category', datafield: 'CategoryID', width: 120, cellsalign: 'right' },
                { text: 'Quantity Per Unit', datafield: 'QuantityPerUnit', width: 200, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'UnitPrice', width: 120, cellsformat: 'c2', cellsalign: 'right' },
                { text: 'Units On Order', datafield: 'UnitsOnOrder', width: 120, cellsalign: 'right' },
                { text: 'Reorder Level', datafield: 'ReorderLevel', width: 120, cellsalign: 'right' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} source={this.state.source} columns={this.state.columns}
                sortable={true} pageable={true} autoheight={true} />
        );
    }
}

export default App;