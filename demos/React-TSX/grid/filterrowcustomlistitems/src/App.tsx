import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    constructor(props: {}) {
        super(props);

        const data: any = generatedata(500, false);

        const source: any = {
            datafields: [
                { name: 'name', type: 'string' },
                { name: 'productname', type: 'string' }
            ],
            datatype: 'array',
            localdata: data
        };

        const generateItems = (): any[] => {
            const itemsArr = [];
            itemsArr.push(data[0].name);
            itemsArr.push(data[1].name);
            itemsArr.push(data[2].name);
            itemsArr.push(data[3].name);
            itemsArr.push(data[4].name);

            return itemsArr;
        }

        const items: any[] = generateItems();

        this.state = {
            columns: [
                { text: 'Name', filtertype: 'list', filteritems: items, datafield: 'name', width: 200 },
                { text: 'Product', filtertype: 'checkedlist', filteritems: ['Black Tea', 'Green Tea', 'Caffe Latte'], datafield: 'productname' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'} 
                width={600} source={this.state.source} columns={this.state.columns}
                filterable={true} showfilterrow={true} />
        );
    }
}

export default App;