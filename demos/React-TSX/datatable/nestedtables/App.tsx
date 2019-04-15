import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    private myDataTable = React.createRef<JqxDataTable>();
    private count: number = 0;
    private nestedTables: any[] = [];

    constructor(props: {}) {
        super(props);

        const source = {
            dataFields: [
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

        const ordersSource: any = {
            dataFields: [
                { name: 'EmployeeID', type: 'string' },
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

        const ordersDataAdapter: any = new jqx.dataAdapter(ordersSource, { autoBind: true });

        const initRowDetails = (id: any, row: number, element: any, rowinfo: any): void => {
            const container = document.createElement('div');
            container.style.margin = '10px';
            element[0].appendChild(container);

            const nestedDataTable = element[0].children[0];
            const containerID = `nestedDataTable${this.count}`;
            nestedDataTable.id = containerID;

            const filterGroup = new jqx.filter();
            const filterValue = id;
            const filterCondition = 'equal';
            const filter = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
            // fill the orders depending on the id.
            const orders: any[] = ordersDataAdapter.records;
            const ordersbyid = [];
            for (const order of orders) {
                const result = filter.evaluate(order.EmployeeID);
                if (result) {
                    ordersbyid.push(order);
                }
            }
            const nestedOrdersSource = {
                dataFields: [
                    { name: 'EmployeeID', type: 'string' },
                    { name: 'ShipName', type: 'string' },
                    { name: 'ShipAddress', type: 'string' },
                    { name: 'ShipCity', type: 'string' },
                    { name: 'ShipCountry', type: 'string' },
                    { name: 'ShippedDate', type: 'date' }
                ],
                id: 'OrderID',
                localdata: ordersbyid
            }
            if (nestedDataTable !== null) {
                const nestedDataTableAdapter = new jqx.dataAdapter(nestedOrdersSource);

                const columns: IDataTableProps['columns'] = [
                    { text: 'Ship Name', dataField: 'ShipName', width: 200 },
                    { text: 'Ship Address', dataField: 'ShipAddress', width: 200 },
                    { text: 'Ship City', dataField: 'ShipCity', width: 150 },
                    { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                    { text: 'Shipped Date', dataField: 'ShippedDate', cellsFormat: 'd', width: 200 }
                ];

                ReactDOM.render(
                    <JqxDataTable theme={'material-purple'} width={820} height={180} columns={columns}
                        pageable={true} source={nestedDataTableAdapter} />,
                    document.querySelector(`#${containerID}`)
                );

                // store the nested Data Tables and use the Employee ID as a key.
                this.nestedTables[id] = nestedDataTable;
                this.count++;
            }
        }

        const ready = (): void => {
            this.myDataTable.current!.showDetails(1);
        }

        this.state = {
            columns: [
                { text: 'First Name', dataField: 'FirstName', width: 250 },
                { text: 'Last Name', dataField: 'LastName', width: 250 },
                { text: 'Title', dataField: 'Title' }
            ],
            initRowDetails,
            ready,
            source
        };
    }

    public render() {
        return (
            <JqxDataTable theme={'material-purple'} ref={this.myDataTable}
                // @ts-ignore 
                width={'100%'} source={this.state.source}
                columns={this.state.columns} pageable={true} rowDetails={true}
                pageSize={3} initRowDetails={this.state.initRowDetails} ready={this.state.ready} />
        );
    }
}

export default App;