import * as React from 'react';
 


import './App.css';

import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'ProductName', type: 'string' },
                { name: 'QuantityPerUnit', type: 'int' },
                { name: 'UnitPrice', type: 'float' },
                { name: 'UnitsInStock', type: 'float' },
                { name: 'Discontinued', type: 'bool' }
            ],
            datatype: 'xml',
            id: 'ProductID',
            record: 'Product',
            root: 'Products',
            url: 'products.xml'
        };

        const cellClass = (row: number, columnfield: any, value: number): string => {
            if (value < 20) {
                return 'red';
            }
            else if (value >= 20 && value < 50) {
                return 'yellow';
            }
            else {
                return 'green';
            }
        }

        this.state = {
            columns: [
                { text: 'Product Name', datafield: 'ProductName', width: 250 },
                { text: 'Quantity per Unit', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right', width: 120 },
                { text: 'Unit Price', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2', width: 100 },
                { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellclassname: cellClass, width: 100 },
                { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} source={this.state.source} columns={this.state.columns}
                pageable={true} sortable={true} editable={true} altrows={true} autoheight={true} 
                enabletooltips={true} selectionmode={'multiplecellsadvanced'} />
        );
    }
}

export default App;