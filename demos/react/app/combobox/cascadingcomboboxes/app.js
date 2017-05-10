import React from 'react';
import ReactDOM from 'react-dom';

import JqxComboBox from '../../../jqwidgets-react/react_jqxcombobox.js';
import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.customers.on('select', (event) => {
            if (event.args) {
                this.refs.orders.setOptions({ disabled: false, selectedIndex: -1 });
                let value = event.args.item.value;
                let ordersSource = this.refs.orders.source()._source;
                ordersSource.data = { CustomerID: value };
                let ordersAdapter = new $.jqx.dataAdapter(ordersSource, {
                    beforeLoadComplete: (records) => {
                        let filteredRecords = new Array();
                        for (let i = 0; i < records.length; i++) {
                            if (records[i].CustomerID == value)
                                filteredRecords.push(records[i]);
                        }
                        return filteredRecords;
                    }
                });
                this.refs.orders.setOptions({ source: ordersAdapter, autoDropDownHeight: ordersAdapter.records.length > 10 ? false : true });
            }
        });        
    }
    render() {
        let customersSource =
            {
                dataType: 'json',
                dataFields: [
                    { name: 'CompanyName' },
                    { name: 'CustomerID' }
                ],
                url: '../sampledata/customers.txt'
            };
        let customersAdapter = new $.jqx.dataAdapter(customersSource);

        let ordersSource =
            {
                dataType: 'json',
                dataFields: [
                    { name: 'CustomerID' },
                    { name: 'OrderID' },
                    { name: 'ShipCity' },
                    { name: 'OrderDate' },
                    { name: 'ShipName' },
                    { name: 'ShipCountry' },
                    { name: 'ShipAddress' }
                ],
                url: '../sampledata/orders.txt'
            };
        let ordersAdapter = new $.jqx.dataAdapter(ordersSource);
     
        return (
            <div>
                <span style={{ marginTop: 6, fontSize: 12, fontFamily: 'Verdana', float: 'left' }}>Customers:</span>
                <JqxComboBox style={{ marginLeft: 5, float: 'left' }} ref='customers'
                    width={300} height={25} source={customersAdapter} valueMember={'CustomerID'}
                    placeHolder={'Select customer...'} displayMember={'CompanyName'}
                />
                <div style={{ clear: 'both' }} />
                <div style={{ marginTop: 20 }}>
                    <span style={{ marginTop: 6, fontSize: 12, fontFamily: 'Verdana', float: 'left' }}>Orders:</span>
                    <JqxComboBox style={{ marginLeft: 5, float: 'left' }} ref='orders'
                        width={300} height={25} source={ordersAdapter} valueMember={'CustomerID'}
                        placeHolder={'Select order...'} displayMember={'OrderID'}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
