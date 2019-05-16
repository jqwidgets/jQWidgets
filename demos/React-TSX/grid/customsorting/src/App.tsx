import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);

        const data = generatedata(100, false);

        const compare = (value1: any, value2: any): any => {
            value1 = String(value1).toLowerCase();
            value2 = String(value2).toLowerCase();
            try {
                const tmpvalue1 = parseFloat(value1);
                if (isNaN(tmpvalue1)) {
                    if (value1 < value2) { return -1; }
                    if (value1 > value2) { return 1; }
                }
                else {
                    const tmpvalue2 = parseFloat(value2);
                    if (tmpvalue1 < tmpvalue2) { return -1; }
                    if (tmpvalue1 > tmpvalue2) { return 1; }
                }
            }
            catch (error) {
                const er = error;
                alert(er);
            }
            return 0;
        };

        const customsortfunc = (column: any, direction: string | boolean): void => {
            let sortdata = new Array();
            if (direction === 'ascending') { direction = true; }
            if (direction === 'descending') { direction = false; }
            if (direction != null) {
                for (const dataItem of data) {
                    sortdata.push(dataItem);
                }
            }
            else {
                sortdata = data;
            }
            const tmpToString = Object.prototype.toString;
            const that: any = this;
            Object.prototype.toString = (typeof column === 'function') ? column : () => that[column];
            if (direction != null) {
                sortdata.sort(compare);
                if (!direction) {
                    sortdata.reverse();
                }
            }
            source.localdata = sortdata;
            this.myGrid.current!.updatebounddata('sort');
            Object.prototype.toString = tmpToString;
        }

        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            datatype: 'array',
            localdata: data,
            sort: customsortfunc
        };

        this.state = {
            columns: [
                { text: 'First Name', datafield: 'firstname', width: 200 },
                { text: 'Last Name', datafield: 'lastname', width: 200 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
            ],
            ready: () => {
                setTimeout(() => {
                    this.myGrid.current!.sortby('firstname', 'asc');
                });                
            },
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'} ref={this.myGrid}
                // @ts-ignore
                width={'100%'} source={this.state.source} columns={this.state.columns}
                pageable={true} sortable={true} autoheight={true} ready={this.state.ready} />
        );
    }
}

export default App;