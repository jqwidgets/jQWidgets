import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    componentDidMount() {
        let firstNameColumnFilter = () => {
            var filtergroup = new $.jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = 'Nancy';
            var filtercondition = 'contains';
            var filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.addfilter(filter_or_operator, filter);
            this.refs.myGrid.addfilter('firstname', filtergroup);
            this.refs.myGrid.applyfilters();
        };

        firstNameColumnFilter();
    }
    render() {
        let data = generatedata(500);

        let source =
            {
                localdata: data,
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ],
                datatype: "array"
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'First Name', datafield: 'firstname', width: 160 },
                { text: 'Last Name', datafield: 'lastname', width: 160 },
                { text: 'Product', datafield: 'productname', width: 170 },
                { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
            ];

        return (
            <JqxGrid ref='myGrid'
                width={850} source={dataAdapter} filterable={true}
                sortable={true} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
