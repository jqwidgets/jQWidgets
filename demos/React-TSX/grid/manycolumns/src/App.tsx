import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private data: any[] = [];
    private datafields: any[] = [];
    private columns: any[] = [];

    constructor(props: {}) {
        super(props);

        this.generateData();

        const source: any = {
            datafields: this.datafields,
            datatype: 'array',
            localdata: this.data
        };

        this.state = {
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} source={this.state.source} columns={this.columns} />
        );
    }

    private generateData(): void {
        for (let i = 0; i < 200; i++) {
            const row: any = {};
            for (let j = 0; j < 200; j++) {
                row['Name' + j] = 'Cell ' + (1 + i) + '.' + (1 + j);
                if (i === 0) {
                    this.columns.push({ datafield: 'Name' + j, text: 'Column ' + (1 + j), width: 100 });
                    this.datafields.push({ name: 'Name' + j, type: 'string' });
                }
            }
            this.data[i] = row;
        }
    }
}

export default App;