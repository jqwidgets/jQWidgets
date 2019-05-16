import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private eventLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.myGridOnColumnResized = this.myGridOnColumnResized.bind(this);

        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(10, false)
        };

        this.state = {
            columns: [
                { text: 'First Name', datafield: 'firstname', width: 100 },
                { text: 'Last Name', datafield: 'lastname', width: 100 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', datafield: 'total', minwidth: 100, resizable: false, width: 'auto', cellsalign: 'right', cellsformat: 'c2' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'} onColumnresized={this.myGridOnColumnResized}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    columnsresize={true} />

                <div ref={this.eventLog} style={{ marginTop: '30px' }} />
            </div>
        );
    }

    private myGridOnColumnResized(event: any): void {
        const column = event.args.columntext;
        const newwidth = event.args.newwidth
        const oldwidth = event.args.oldwidth;
        this.eventLog.current!.innerHTML = `Column: ${column}, New Width: ${newwidth}, Old Width ${oldwidth}`;
    }
}

export default App;