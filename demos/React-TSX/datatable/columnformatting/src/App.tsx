import * as React from 'react';
 


import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

export interface IState extends IDataTableProps {
    dateSource: IDropDownListProps['source'];
    numberSource: IDropDownListProps['source'];
}

class App extends React.PureComponent<{}, IState> {

    private myDataTable = React.createRef<JqxDataTable>();

    constructor(props: {}) {
        super(props);
        this.dateFormats = this.dateFormats.bind(this);
        this.cellsAlignment = this.cellsAlignment.bind(this);

        const source: any = {
            dataFields: [
                { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
                { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
                { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
                { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
            ],
            dataType: 'xml',
            id: 'm\\:properties>d\\:OrderID',
            record: 'content',
            root: 'entry',
            url: 'orders.xml'
        };

        this.state = {
            columns: [
                { text: 'Shipped Date', dataField: 'ShippedDate', width: '50%', cellsFormat: 'D' },
                { text: 'Freight', dataField: 'Freight', width: '50%', cellsFormat: 'f2', cellsAlign: 'right' }
            ],
            dateSource: ['Short Date', 'Long Date', 'Long date, Short Time', 'Long date, Long Time', 'Month/Year', 'Month/Day', 'Custom'],
            numberSource: ['n', 'f', 'f2', 'f3', 'c', 'c2', 'c3', 'p', 'p2', 'p3'],
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <div>
                <JqxDataTable theme={'material-purple'} ref={this.myDataTable}
                    // @ts-ignore 
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    sortable={true} pageable={true} columnsResize={true} />
                <div style={{ fontSize: '13px', fontFamily: 'Verdana', width: '600px', marginTop: '10px' }}>
                    <div style={{ float: 'left', width: '300px' }}>
                        <h4>Shipped Date</h4>
                        <JqxDropDownList theme={'material-purple'} onChange={this.dateFormats}
                            height={25} autoDropDownHeight={true}
                            selectedIndex={1} source={this.state.dateSource} />
                    </div>
                    <div style={{ float: 'left', width: '300px' }}>
                        <h4>Freight</h4>
                        <JqxDropDownList theme={'material-purple'} onChange={this.cellsAlignment}
                            height={25} autoDropDownHeight={true}
                            selectedIndex={2} source={this.state.numberSource} />

                    </div>
                </div>
            </div>
        );
    }

    private dateFormats(event: any): void {
        const index = event.args.index;
        switch (index) {
            case 0:
                this.myDataTable.current!.setColumnProperty('ShippedDate', 'cellsFormat', 'd');
                break;
            case 1:
                this.myDataTable.current!.setColumnProperty('ShippedDate', 'cellsFormat', 'D');
                break;
            case 2:
                this.myDataTable.current!.setColumnProperty('ShippedDate', 'cellsFormat', 'f');
                break;
            case 3:
                this.myDataTable.current!.setColumnProperty('ShippedDate', 'cellsFormat', 'F');
                break;
            case 4:
                this.myDataTable.current!.setColumnProperty('ShippedDate', 'cellsFormat', 'Y');
                break;
            case 5:
                this.myDataTable.current!.setColumnProperty('ShippedDate', 'cellsFormat', 'M');
                break;
            case 6:
                this.myDataTable.current!.setColumnProperty('ShippedDate', 'cellsFormat', 'yyyy-MM-dd HH:mm:ss');
                break;
        }
    }

    private cellsAlignment(event: any): void {
        const index = event.args.index;
        switch (index) {
            case 0:
                this.myDataTable.current!.setColumnProperty('Freight', 'cellsFormat', 'n');
                break;
            case 1:
                this.myDataTable.current!.setColumnProperty('Freight', 'cellsFormat', 'f');
                break;
            case 2:
                this.myDataTable.current!.setColumnProperty('Freight', 'cellsFormat', 'f2');
                break;
            case 3:
                this.myDataTable.current!.setColumnProperty('Freight', 'cellsFormat', 'f3');
                break;
            case 4:
                this.myDataTable.current!.setColumnProperty('Freight', 'cellsFormat', 'c');
                break;
            case 5:
                this.myDataTable.current!.setColumnProperty('Freight', 'cellsFormat', 'c2');
                break;
            case 6:
                this.myDataTable.current!.setColumnProperty('Freight', 'cellsFormat', 'c3');
                break;
            case 7:
                this.myDataTable.current!.setColumnProperty('Freight', 'cellsFormat', 'p');
                break;
            case 8:
                this.myDataTable.current!.setColumnProperty('Freight', 'cellsFormat', 'p2');
                break;
            case 9:
                this.myDataTable.current!.setColumnProperty('Freight', 'cellsFormat', 'p3');
                break;
        }
    }
}

export default App;