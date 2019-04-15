import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    constructor(props: {}) {
        super(props);

        const source: any =
        {
            datafields: [
                { name: 'name', type: 'string' },
                { name: 'type', type: 'string' },
                { name: 'calories', type: 'int' },
                { name: 'totalfat', type: 'string' },
                { name: 'protein', type: 'string' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'beverages.txt'
        };

        this.state = {
            columns: [
                { text: 'Name', datafield: 'name', width: 250 },
                { text: 'Beverage Type', datafield: 'type', width: 250 },
                { text: 'Calories', datafield: 'calories', width: 180 },
                { text: 'Total Fat', datafield: 'totalfat', width: 120 },
                { text: 'Protein', datafield: 'protein', minwidth: 120 }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} source={this.state.source} columns={this.state.columns} columnsresize={true} />
        );
    }
}

export default App;