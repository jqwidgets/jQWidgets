import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private eventLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.myGridOnColumnReordered = this.myGridOnColumnReordered.bind(this);

        const source: any = {
            datafields: [
                { name: 'name' },
                { name: 'type' },
                { name: 'calories', type: 'int' },
                { name: 'totalfat' },
                { name: 'protein' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'beverages.txt'
        };

        this.state = {
            columns: [
                { text: 'Name', datafield: 'name', width: 200 },
                { text: 'Beverage Type', datafield: 'type', width: 200 },
                { text: 'Calories', datafield: 'calories', width: 100 },
                { text: 'Total Fat', datafield: 'totalfat' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'} onColumnreordered={this.myGridOnColumnReordered}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    columnsresize={true} columnsreorder={true} />

                <div ref={this.eventLog} style={{ marginTop: '30px' }} />
            </div>
        );
    }

    private myGridOnColumnReordered(event: any): void {
        const column = event.args.columntext;
        const newindex = event.args.newindex
        const oldindex = event.args.oldindex;
        this.eventLog.current!.innerHTML = `Column: ${column}, New Index: ${newindex}, Old Index: ${oldindex}`;
    }
}

export default App;