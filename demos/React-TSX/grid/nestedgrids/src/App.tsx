import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);

        const source: any =
        {
            async: false,
            datafields: [
                { name: 'FirstName' },
                { name: 'LastName' },
                { name: 'Title' },
                { name: 'Address' },
                { name: 'City' }
            ],
            datatype: 'xml',
            id: 'EmployeeID',
            record: 'Employee',
            root: 'Employees',
            url: 'employees.xml'
        };

        const ordersDetailsSource: any = {
            async: false,
            datafields: [
                { name: 'EmployeeID', type: 'string' },
                { name: 'ShipName', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShippedDate', type: 'date' }
            ],
            datatype: 'xml',
            record: 'Order',
            root: 'Orders',
            url: 'orderdetails.xml'
        };

        const ordersDataAdapter = new jqx.dataAdapter(ordersDetailsSource, { autoBind: true });

        const photoRenderer = (row: number, column: any, value: string, defaultHTML: string, columnData: any, rowData: any): string => {
            const name = rowData.FirstName;
            const imgurl = 'https://www.jqwidgets.com/react/images/' + name.toLowerCase() + '.png';
            const img = '<div style="background: white;"><img style="margin: 2px; margin-left: 10px;" width="32" height="32" src="' + imgurl + '"></div>';
            return img;
        }

        const renderer = (row: number, column: any, value: string): string => {
            return '<span style="margin-left: 4px; margin-top: 9px; float: left;">' + value + '</span>';
        }

        const nestedGrids: any[] = [];

        const initrowdetails = (index: number, parentElement: any, gridElement: any, record: any): void => {
            const id = record.uid.toString();
            const nestedGridContainer = parentElement.children[0];
            nestedGrids[index] = nestedGridContainer;
            const filtergroup = new jqx.filter();
            const filtervalue = id;
            const filtercondition = 'equal';
            const filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            // fill the orders depending on the id.
            const orders = ordersDataAdapter.records;
            const ordersbyid = [];
            for (const order of orders) {
                const result = filter.evaluate(order.EmployeeID);
                if (result) {
                    ordersbyid.push(order);
                }
            }
            const ordersSource = {
                datafields: [
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
            const nestedGridAdapter = new jqx.dataAdapter(ordersSource);

            if (nestedGridContainer != null) {
                const columns: IGridProps['columns'] = [
                    { text: 'Ship Name', datafield: 'ShipName', width: 200 },
                    { text: 'Ship Address', datafield: 'ShipAddress', width: 200 },
                    { text: 'Ship City', datafield: 'ShipCity', width: 150 },
                    { text: 'Ship Country', datafield: 'ShipCountry', width: 150 },
                    { text: 'Shipped Date', datafield: 'ShippedDate', width: 200 }
                ];

                ReactDOM.render(
                    <JqxGrid theme={'material-purple'} width={780} height={200} source={nestedGridAdapter} columns={columns} />,
                    document.getElementById(nestedGridContainer.id)
                );
            }
        };

        this.state = {
            columns: [
                { text: 'Photo', width: 50, cellsrenderer: photoRenderer },
                { text: 'First Name', datafield: 'FirstName', width: 100, cellsrenderer: renderer },
                { text: 'Last Name', datafield: 'LastName', width: 100, cellsrenderer: renderer },
                { text: 'Title', datafield: 'Title', width: 180, cellsrenderer: renderer },
                { text: 'Address', datafield: 'Address', width: 300, cellsrenderer: renderer },
                { text: 'City', datafield: 'City', width: 170, cellsrenderer: renderer }
            ],
            initrowdetails,
            ready: (): void => {
                setTimeout(() => {
                    this.myGrid.current!.showrowdetails(1);
                });
            },
            rowdetailstemplate: {
                rowdetails: '<div id="nestedGrid" style="margin: 10px;"></div>',
                rowdetailsheight: 220,
                rowdetailshidden: true
            },
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'} ref={this.myGrid}
                // @ts-ignore
                width={'100%'} height={365} source={this.state.source} columns={this.state.columns}
                rowdetails={true} rowsheight={35} initrowdetails={this.state.initrowdetails}
                ready={this.state.ready} rowdetailstemplate={this.state.rowdetailstemplate} />
        );
    }
}

export default App;