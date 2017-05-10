import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let data = generatedata(500);

        let source =
            {
                localdata: data,
                datafields:
                [
                    { name: 'name', type: 'string' },
                    { name: 'productname', type: 'string' }
                ],
                datatype: 'array'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);


        let columns =
            [
                { text: 'Name', filtertype: 'list', filteritems: items, datafield: 'name', width: 200 },
                { text: 'Product', filtertype: 'checkedlist', filteritems: ['Black Tea', 'Green Tea', 'Caffe Latte'], datafield: 'productname' }
            ];

        let items = new Array();
        items.push(data[0].name);
        items.push(data[1].name);
        items.push(data[2].name);
        items.push(data[3].name);
        items.push(data[4].name);

        return (
            <JqxGrid
                width={600} source={dataAdapter} showfilterrow={true}
                filterable={true} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
