import * as React from 'react';
import { useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
    const data = useMemo(() => generatedata(500, false), []);
    const source = useMemo(() => ({
        datafields: [
            { name: 'name', type: 'string' },
            { name: 'productname', type: 'string' }
        ],
        datatype: 'array',
        localdata: data
    }), [data]);
    const items = useMemo(() => [
        data[0].name,
        data[1].name,
        data[2].name,
        data[3].name,
        data[4].name
    ], [data]);
    const gridSource = useMemo(() => new jqx.dataAdapter(source), [source]);
    const columns: IGridProps['columns'] = useMemo(() => [
        { text: 'Name', filtertype: 'list', filteritems: items, datafield: 'name', width: 200 },
        { text: 'Product', filtertype: 'checkedlist', filteritems: ['Black Tea', 'Green Tea', 'Caffe Latte'], datafield: 'productname' }
    ], [items]);
    return (
        <JqxGrid theme={'material-purple'}
            width={600} source={gridSource} columns={columns}
            filterable={true} showfilterrow={true} />
    );
}

export default App;