import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import JqxComboBox, { IComboBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';
import 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxDataTable, { IDataTableProps }from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

export interface IState extends IComboBoxProps {
    source1: IComboBoxProps['source'];
}

class App extends React.PureComponent<{}, IState> {

    constructor(props: {}) {
        super(props);
        this.customersOnSelect = this.customersOnSelect.bind(this);
        this.ordersOnSelect = this.ordersOnSelect.bind(this);

        const customersSource: any = {
            dataFields: [
                { name: 'CompanyName' },
                { name: 'CustomerID' }
            ],
            dataType: 'json',
            url: 'customers.txt'
        };

        const ordersSource: any = {
            dataFields: [
                { name: 'CustomerID' },
                { name: 'OrderID' },
                { name: 'ShipCity' },
                { name: 'OrderDate' },
                { name: 'ShipName' },
                { name: 'ShipCountry' },
                { name: 'ShipAddress' }
            ],
            dataType: 'json',
            url: 'orders.txt'
        };

        this.state = {
            autoDropDownHeight: false,
            disabled: true,
            source: new jqx.dataAdapter(customersSource),
            source1: new jqx.dataAdapter(ordersSource)
        }
    }

    public render() {
        return (
            <div>
                <span style={{ marginTop: '6px', fontSize: '12px', fontFamily: 'Verdana', float: 'left' }}>Customers:</span>
                <JqxComboBox theme={'material-purple'} style={{ marginLeft: '5px', float: 'left' }} onSelect={this.customersOnSelect}
                    width="300" height={30} source={this.state.source} valueMember={'CustomerID'}
                    placeHolder={'Select customer...'} displayMember={'CompanyName'} />
                <div style={{ clear: 'both' }} />
                <div style={{ marginTop: '20px' }} />
                <span style={{ marginTop: '6px', fontSize: '12px', fontFamily: 'Verdana', float: 'left' }}>Orders:</span>
                <JqxComboBox theme={'material-purple'} style={{ marginLeft: '5px', float: 'left' }} onSelect={this.ordersOnSelect}
                    width={300} height={30} source={this.state.source1} valueMember={'CustomerID'} autoDropDownHeight={this.state.autoDropDownHeight}
                    placeHolder={'Select order...'} displayMember={'OrderID'} disabled={this.state.disabled} />
                <div style={{ clear: 'both' }} />
                <div id="orderInfo" style={{ marginTop: '25px', fontSize: '12px' }} />
            </div>
        );
    }

    private customersOnSelect(event: any): void {
        if (event.args) {
            const value = event.args.item.value;
            const ordersSource = this.state.source1!._source;
            ordersSource.data = { CustomerID: value };
            const ordersAdapter = new jqx.dataAdapter(ordersSource, {
                beforeLoadComplete: (records: any[]): any[] => {
                    const filteredRecords = [];
                    for (const record of records) {
                        if (record.CustomerID === value) {
                            filteredRecords.push(record);
                        }
                    }
                    return filteredRecords;
                }
            });
            this.setState({
                autoDropDownHeight: ordersAdapter.records.length > 10 ? false : true,
                disabled: false,
                source1: ordersAdapter
            });
        }
    };

    private ordersOnSelect(event: any): void {
        if (event.args) {
            const index = event.args.index;
            if (index !== -1) {
                const record = this.state.source1.records[index];
                const detailsSource =
                {
                    dataFields: [
                        { name: 'CustomerID' },
                        { name: 'OrderID' },
                        { name: 'ShipCity' },
                        { name: 'OrderDate' },
                        { name: 'ShipName' },
                        { name: 'ShipCountry' },
                        { name: 'ShipAddress' }
                    ],
                    dataType: 'json',
                    localData: record
                };
                const detailsAdapter = new jqx.dataAdapter(detailsSource);

                const columns: IDataTableProps['columns'] = [
                    { text: 'Order Date', dataField: 'OrderDate', cellsFormat: 'd' },
                    { text: 'Ship Country', dataField: 'ShipCountry' },
                    { text: 'Ship Address', dataField: 'ShipAddress' },
                    { text: 'Ship Name', dataField: 'ShipName' }
                ];
                
                ReactDOM.render(<JqxDataTable columns={columns} source={detailsAdapter} width={500} />, document.querySelector('#orderInfo'))
            }
        }
    }
}

export default App;