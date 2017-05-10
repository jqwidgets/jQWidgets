import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myGrid.sortby('firstname', 'asc');
    }
    render() {

        let data = generatedata(100);
        let customsortfunc = (column, direction) => {
            let sortdata = new Array();
            if (direction == 'ascending') direction = true;
            if (direction == 'descending') direction = false;
            if (direction != null) {
                for (i = 0; i < data.length; i++) {
                    sortdata.push(data[i]);
                }
            }
            else sortdata = data;
            let tmpToString = Object.prototype.toString;
            Object.prototype.toString = (typeof column == 'function') ? column : () => { return this[column] };
            if (direction != null) {
                sortdata.sort(compare);
                if (!direction) {
                    sortdata.reverse();
                }
            }
            source.localdata = sortdata;
            this.refs.myGrid.updatebounddata('sort');
            Object.prototype.toString = tmpToString;
        }
        // custom comparer.
        let compare = (value1, value2) => {
            value1 = String(value1).toLowerCase();
            value2 = String(value2).toLowerCase();
            try {
                let tmpvalue1 = parseFloat(value1);
                if (isNaN(tmpvalue1)) {
                    if (value1 < value2) { return -1; }
                    if (value1 > value2) { return 1; }
                }
                else {
                    let tmpvalue2 = parseFloat(value2);
                    if (tmpvalue1 < tmpvalue2) { return -1; }
                    if (tmpvalue1 > tmpvalue2) { return 1; }
                }
            }
            catch (error) {
                let er = error;
            }
            return 0;
        };

        let source =
            {
                localdata: data,
                sort: customsortfunc,
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ],
                datatype: 'array'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);


        let columns =
            [
                { text: 'First Name', datafield: 'firstname', width: 200 },
                { text: 'Last Name', datafield: 'lastname', width: 200 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
            ];

        return (
            <JqxGrid ref='myGrid'
                width={850} source={dataAdapter} pageable={true}
                sortable={true} autoheight={true} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
