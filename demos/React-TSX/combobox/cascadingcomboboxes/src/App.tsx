import * as React from 'react';
import * as ReactDOM from 'react-dom';
import JqxComboBox, { IComboBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';
import 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxDataTable, { IDataTableProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

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

const initialCustomersAdapter = new jqx.dataAdapter(customersSource);
const initialOrdersAdapter = new jqx.dataAdapter(ordersSource);

const App = () => {
    const [autoDropDownHeight, setAutoDropDownHeight] = React.useState(false);
    const [disabled, setDisabled] = React.useState(true);
    const [customersAdapter] = React.useState(initialCustomersAdapter);
    const [ordersAdapter, setOrdersAdapter] = React.useState<IComboBoxProps['source']>(initialOrdersAdapter);

    const customersOnSelect = React.useCallback((event: any) => {
        if (event.args) {
            const value = event.args.item.value;
            const ordersSourceClone = { ...ordersAdapter._source, data: { CustomerID: value } };
            const newOrdersAdapter = new jqx.dataAdapter(ordersSourceClone, {
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
            setAutoDropDownHeight(newOrdersAdapter.records.length > 10 ? false : true);
            setDisabled(false);
            setOrdersAdapter(newOrdersAdapter);
        }
    }, [ordersAdapter]);

    const ordersOnSelect = React.useCallback((event: any) => {
        if (event.args) {
            const index = event.args.index;
            if (index !== -1) {
                const record = ordersAdapter.records[index];
                const detailsSource = {
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

                ReactDOM.render(
                    <JqxDataTable columns={columns} source={detailsAdapter} width={500} />,
                    document.querySelector('#orderInfo')
                );
            }
        }
    }, [ordersAdapter]);

    return (
        <div>
            <span style={{ marginTop: '6px', fontSize: '12px', fontFamily: 'Verdana', float: 'left' }}>Customers:</span>
            <JqxComboBox
                theme={'material-purple'}
                style={{ marginLeft: '5px', float: 'left' }}
                onSelect={customersOnSelect}
                width={300}
                height={30}
                source={customersAdapter}
                valueMember={'CustomerID'}
                placeHolder={'Select customer...'}
                displayMember={'CompanyName'}
            />
            <div style={{ clear: 'both' }} />
            <div style={{ marginTop: '20px' }} />
            <span style={{ marginTop: '6px', fontSize: '12px', fontFamily: 'Verdana', float: 'left' }}>Orders:</span>
            <JqxComboBox
                theme={'material-purple'}
                style={{ marginLeft: '5px', float: 'left' }}
                onSelect={ordersOnSelect}
                width={300}
                height={30}
                source={ordersAdapter}
                valueMember={'CustomerID'}
                autoDropDownHeight={autoDropDownHeight}
                placeHolder={'Select order...'}
                displayMember={'OrderID'}
                disabled={disabled}
            />
            <div style={{ clear: 'both' }} />
            <div id="orderInfo" style={{ marginTop: '25px', fontSize: '12px' }} />
        </div>
    );
};

export default App;