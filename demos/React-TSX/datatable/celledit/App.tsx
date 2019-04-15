import * as React from 'react';
 


import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    private log = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.onCellBeginEdit = this.onCellBeginEdit.bind(this);
        this.onCellEndEdit = this.onCellEndEdit.bind(this);

        const source: any = {
            dataFields: [
                { name: 'OrderID', type: 'int' },
                { name: 'Freight', type: 'float' },
                { name: 'ShipName', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShippedDate', type: 'date' }
            ],
            dataType: 'xml',
            id: 'OrderID',
            record: 'Order',
            root: 'Orders',
            url: 'orderdetails.xml'
        };

        this.state = {
            columns: [
                { text: 'Freight', dataField: 'Freight', cellsFormat: 'f', cellsAlign: 'right', align: 'right', width: 250 },
                { text: 'Ship Country', dataField: 'ShipCountry', width: 250 },
                { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy' }
            ],
            editSettings: {
                cancelOnEsc: true, editOnDoubleClick: true, editOnF2: true, editSingleCell: true,
                saveOnBlur: true, saveOnEnter: true, saveOnPageChange: true, saveOnSelectionChange: true
            },
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <div>
                <JqxDataTable theme={'material-purple'} onCellBeginEdit={this.onCellBeginEdit} onCellEndEdit={this.onCellEndEdit}
                    // @ts-ignore 
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    altRows={true} pageable={true} editable={true}
                    pagerButtonsCount={8} editSettings={this.state.editSettings} />
                <div style={{ fontSize: '13px', fontFamily: 'Verdana', width: '800px', marginTop: '20px' }}>
                    <h4>Event Log</h4>
                    <div ref={this.log} style={{ maxHeight: '300px', overflow: 'auto' }} />
                </div>
            </div>
        );
    }

    private onCellBeginEdit(event: any): void {
        const args = event.args;
        // row's index.
        const rowIndex = args.index;
        // column's data field.
        const columnDataField = args.dataField;
        // cell's value.
        let value = args.value;
        if (columnDataField === 'ShippedDate' && value) {
            value = value.getDate() + '/' + parseInt((value.getMonth() + 1), 10) + '/' + value.getFullYear();
        }
        const log = this.log.current!;
        log.innerHTML = 'cellBeginEdit - Row: ' + rowIndex + ', Column: ' + columnDataField + ', Value: ' + value + ' <br />' + log.innerHTML;
    }

    private onCellEndEdit(event: any): void {
        const args = event.args;
        // row's index.
        const rowIndex = args.index;
        // column's data field.
        const columnDataField = args.dataField;
        // cell's value.
        let value = args.value;
        if (columnDataField === 'ShippedDate' && value) {
            value = value.getDate() + '/' + parseInt((value.getMonth() + 1), 10) + '/' + value.getFullYear();
        }
        const log = this.log.current!;
        log.innerHTML = '<br/>cellEndEdit - Row: ' + rowIndex + ', Column: ' + columnDataField + ', Value: ' + value + '<br/>' + log.innerHTML;
    }
}

export default App;