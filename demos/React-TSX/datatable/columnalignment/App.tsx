import * as React from 'react';
 


import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

export interface IState extends IDataTableProps {
    dropDownsSource: IDropDownListProps['source'];
}

class App extends React.PureComponent<{}, IState> {

    private myDataTable = React.createRef<JqxDataTable>();

    constructor(props: {}) {
        super(props);
        this.columnAlignment = this.columnAlignment.bind(this);
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
                { text: 'Freight', dataField: 'Freight', width: '50%', cellsFormat: 'f2' }
            ],
            dropDownsSource: ['Left', 'Center', 'Right'],
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
                        <h4>Column Alignment</h4>
                        <JqxDropDownList theme={'material-purple'} onChange={this.columnAlignment}
                            height={25} autoDropDownHeight={true}
                            selectedIndex={0} source={this.state.dropDownsSource} />
                    </div>
                    <div style={{ float: 'left', width: '300px' }}>
                        <h4>Cells Alignment</h4>
                        <JqxDropDownList theme={'material-purple'} onChange={this.cellsAlignment}
                            height={25} autoDropDownHeight={true}
                            selectedIndex={0} source={this.state.dropDownsSource} />

                    </div>
                </div>
            </div>
        );
    }

    private columnAlignment(event: any): void {
        const index = event.args.index;
        switch (index) {
            case 0:
                this.myDataTable.current!.setColumnProperty('ShippedDate', 'align', 'left');
                this.myDataTable.current!.setColumnProperty('Freight', 'align', 'left');
                break;
            case 1:
                this.myDataTable.current!.setColumnProperty('ShippedDate', 'align', 'center');
                this.myDataTable.current!.setColumnProperty('Freight', 'align', 'center');
                break;
            case 2:
                this.myDataTable.current!.setColumnProperty('ShippedDate', 'align', 'right');
                this.myDataTable.current!.setColumnProperty('Freight', 'align', 'right');
                break;
        }
    }

    private cellsAlignment(event: any): void {
        const index = event.args.index;
        switch (index) {
            case 0:
                this.myDataTable.current!.setColumnProperty('ShippedDate', 'cellsAlign', 'left');
                this.myDataTable.current!.setColumnProperty('Freight', 'cellsAlign', 'left');
                break;
            case 1:
                this.myDataTable.current!.setColumnProperty('ShippedDate', 'cellsAlign', 'center');
                this.myDataTable.current!.setColumnProperty('Freight', 'cellsAlign', 'center');
                break;
            case 2:
                this.myDataTable.current!.setColumnProperty('ShippedDate', 'cellsAlign', 'right');
                this.myDataTable.current!.setColumnProperty('Freight', 'cellsAlign', 'right');
                break;
        }
    }
}

export default App;