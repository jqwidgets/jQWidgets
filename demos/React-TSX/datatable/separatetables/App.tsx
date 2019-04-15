import * as React from 'react';
 


import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

export interface IState extends IDataTableProps {
    detailsColumns: IDataTableProps['columns'];
    detailsSource?: IDataTableProps['source'];
}

class App extends React.PureComponent<{}, IState> {

    private masterDataTable = React.createRef<JqxDataTable>();
    private detailsDataTable = React.createRef<JqxDataTable>();
    private employeesData: any;
    private ordersData: any;

    constructor(props: {}) {
        super(props);
        this.masterTableOnRowSelect = this.masterTableOnRowSelect.bind(this);

        this.employeesData = this.employeesDataGenerator();
        this.ordersData = this.ordersDataGenerator();

        this.state = {
            columns: [
                { text: 'First Name', dataField: 'FirstName', width: 250 },
                { text: 'Last Name', dataField: 'LastName', width: 250 },
                { text: 'Title', dataField: 'Title' }
            ],
            detailsColumns: [
                { text: 'Employee Name', dataField: 'EmployeeName', width: 300 },
                { text: 'Ship Name', dataField: 'ShipName', width: 300 },
                { text: 'Ship Address', dataField: 'ShipAddress', width: 300 },
                { text: 'Ship City', dataField: 'ShipCity', width: 150 },
                { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                { text: 'Shipped Date', dataField: 'ShippedDate', cellsFormat: 'd', width: 200 }
            ],
            source: this.employeesData
        };
    }

    public componentDidMount() {
        this.masterDataTable.current!.selectRow(0);
    }

    public render() {
        return (
            <div>
                <h3>Employees</h3>
                <JqxDataTable theme={'material-purple'} ref={this.masterDataTable} onRowSelect={this.masterTableOnRowSelect}
                    // @ts-ignore 
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    pageable={true} sortable={true} pageSize={5} />
                <h3>Orders by Employee</h3>

                <JqxDataTable theme={'material-purple'} ref={this.detailsDataTable}
                    // @ts-ignore 
                    width={'100%'} columns={this.state.detailsColumns}
                    pageable={true} pageSize={5} />
            </div>
        );
    }

    private masterTableOnRowSelect(event: any): void {
        const key = event.args.key;
        const filterGroup = new jqx.filter();
        const filterValue = key;
        const filterCondition = 'equal';
        // create string filter
        const filter = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
        // fill the orders depending on the id.
        const ordersbyid = [];
        // filter all orders by EmployeeID.

        for (const order of this.ordersData) {
            const result = filter.evaluate(order.EmployeeID);
            if (result) {
                ordersbyid.push(order);
            }
        }

        const detailsSource = {
            dataFields: [
                { name: 'EmployeeID', type: 'number' },
                { name: 'EmployeeName', type: 'string' },
                { name: 'ShipName', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShippedDate', type: 'date' }
            ],
            id: 'OrderID',
            localdata: ordersbyid
        }
        // update the details DataTable.
        const detailsAdapter = new jqx.dataAdapter(detailsSource);
        this.detailsDataTable.current!.setOptions({ source: detailsAdapter });
    }

    private employeesDataGenerator(): any {
        const source = {
            async: false,
            dataFields: [
                { name: 'EmployeeID', type: 'number' },
                { name: 'FirstName', type: 'string' },
                { name: 'LastName', type: 'string' },
                { name: 'Title', type: 'string' },
                { name: 'Address', type: 'string' },
                { name: 'City', type: 'string' }
            ],
            dataType: 'xml',
            id: 'EmployeeID',
            record: 'Employee',
            root: 'Employees',
            url: 'employees.xml'
        };

        const employeesAdapter = new jqx.dataAdapter(source, {
            autoBind: true,
            beforeLoadComplete: (records: any) => {
                // add 'EmployeeName' data field.
                for (const record of records) {
                    record.EmployeeName = record.FirstName + ' ' + record.LastName;
                }
                return records;
            }
        });

        return employeesAdapter;
    }

    private ordersDataGenerator(): any {
        const ordersSource = {
            async: false,
            dataFields: [
                { name: 'EmployeeID', type: 'number' },
                { name: 'EmployeeName', value: 'EmployeeID', type: 'string', values: { source: this.employeesData.records, value: 'EmployeeID', name: 'EmployeeName' } },
                { name: 'ShipName', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShippedDate', type: 'date' }
            ],
            dataType: 'xml',
            record: 'Order',
            root: 'Orders',
            url: 'orderdetails.xml'
        };
        // create orders DataAdapter.
        const ordersDataAdapter = new jqx.dataAdapter(ordersSource, { autoBind: true });
        const orders = ordersDataAdapter.records;

        return orders;
    }
}

export default App;