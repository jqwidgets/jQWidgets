import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);
        this.firstNameColumnFilter = this.firstNameColumnFilter.bind(this);

        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'date', type: 'date' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(500, false)
        };

        this.state = {
            columns: [
                { text: 'First Name', datafield: 'firstname', width: 160 },
                { text: 'Last Name', datafield: 'lastname', width: 160 },
                { text: 'Product', datafield: 'productname', width: 170 },
                { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
            ],
            ready: (): void => {
                setTimeout(() => {
                    this.firstNameColumnFilter();
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
                filterable={true} sortable={true} ready={this.state.ready} />
        );
    }

    private firstNameColumnFilter = (): void => {
        const filtergroup = new jqx.filter();
        const filterOrOperator = 1;
        const filtervalue = 'Nancy';
        const filtercondition = 'contains';
        const filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filterOrOperator, filter);
        this.myGrid.current!.addfilter('firstname', filtergroup);
        this.myGrid.current!.applyfilters();
    };
}

export default App;